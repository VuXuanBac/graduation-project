// Column
const COLUMN_TITLE_KEY = "name";
const COLUMN_TEMPLATE_KEY = "template";
const COLUMN_REQUIRE_KEY = "require";
const COLUMN_DEFAULT_VALUE_KEY = "default";

// Data
const DATA_TAG_FIELD_KEY = "_tags_";
const DATA_DEFAULT_IF_UNDEFINED = "NULL";

// Template placeholder
const DATA_INDEX_PLACEHOLDER_REGEX = /\$id/g;
const DATA_FIELD_VALUE_PLACEHOLDER_REGEX = /\$value/g;

// Format
const TAG_DISPLAY_NAME_KEY = "title";
const TAG_FORMAT_KEY = "format";
const TAG_PARENTS_KEY = "parents";

const FORMAT_ALL_COLUMNS_INDICATOR = "*";

function Parser(item_parser) {
  this.parse = (collection) => {
    return collection.map((item) => item_parser(item));
  };
}

function RenderHelper(columns, formatter) {
  this.columns = columns;
  this.formatter = formatter;
  this.getRowClass = (item) => {
    const tags = formatter.getTagsAndRelates(item[DATA_TAG_FIELD_KEY] || []);
    const descriptions = tags.map((tag) => formatter.getDisplayName(tag));
    return {
      klass: tags.join(" "),
      title: descriptions.join(" "),
    };
  };
}
/**
 * A Renderer object that render data into a Table and format each data items based on their tags
 * @param {*} columns An object describe the Table header title and a template for render the corresponding data item field.
 * @param {*} formatter An object describe how to format a data item based on its tags
 */
function Renderer(columns, formatter) {
  this.columns = columns;
  this.helper = new RenderHelper(columns, formatter);
  /**
   * Populate Table header title
   * @returns String represents Table Header <thead>
   */
  this.populateHeader = () => {
    const items = Object.entries(this.columns).reduce((prev, [key, value]) => {
      const title =
        typeof value === "string"
          ? value
          : value[COLUMN_TITLE_KEY] || capitalizeWords(key);
      return prev + `<th>${title}</th>`;
    }, "");
    return `<thead><tr>${items}</tr></thead>`;
  };

  /**
   * Populate data field into cell using column template
   * @param {*} value The raw value of the cell
   * @param {Number} item_index Index of the item in data
   * @param {String} cell_description Describe how to render cell content
   * @returns String reprensents the HTML Value for the cell
   */
  this.populateCell = (value, item_index, cell_description) => {
    if (typeof cell_description === "string") {
      return value || "";
    } else {
      const template = cell_description[COLUMN_TEMPLATE_KEY] || "";
      const required = cell_description[COLUMN_REQUIRE_KEY] || false;
      const default_value =
        cell_description[COLUMN_DEFAULT_VALUE_KEY] || DATA_DEFAULT_IF_UNDEFINED;

      if (required) {
        value ||= default_value;
      }

      if (value) {
        return template
          .replace(DATA_INDEX_PLACEHOLDER_REGEX, item_index + 1)
          .replace(DATA_FIELD_VALUE_PLACEHOLDER_REGEX, value);
      }
    }
    return "";
  };

  /**
   * Populate data item into row
   * @param {Object} item The data
   * @param {Number} index The index of data item
   * @returns String represent Table Row <tr>
   */
  this.populateRow = (item, index) => {
    const cells = Object.entries(this.columns).reduce(
      (prev, [field, cell_description]) => {
        const cell = this.populateCell(item[field], index, cell_description);
        return prev + `<td class="${field}">${cell}</td>`;
      },
      ""
    );
    // get class so this row can receive formats.
    const { klass = "", title = "" } = this.helper.getRowClass(item);
    return `<tr class="${klass}" title="${title}">${cells}</tr>`;
  };

  /**
   * Populate data to Table body
   * @param {*} data The data object
   * @returns String represents Table Body <tbody>
   */
  this.populateBody = (data) => {
    const items = data.reduce((prev, item, index) => {
      return prev + this.populateRow(item, index);
    }, "");
    return `<tbody>${items}</tbody>`;
  };

  this.populateCaption = (count) => {
    return `<caption>There are <b>${count}</b> items</caption>`;
  };

  /**
   * Populate data to table inside an element
   * @param {*} container_selector Selector for table container
   * @param {*} data An array of data object need to be rendered. Only fields that declared in `columns` are used for rendering
   */
  this.render = (container_selector, data, sort_by = undefined) => {
    if (data) {
      window.getDataItem = (index, fields = []) => {
        const item = data[index];
        if (fields.length > 0) {
          return fields.reduce((prev, field) => {
            prev[field] = item[field];
            return prev;
          }, {});
        }
        return item;
      };
      if (sort_by) {
        data.sort((a, b) => {
          return a[sort_by] >= b[sort_by] ? -1 : 1;
        });
      }

      document.querySelector(container_selector).innerHTML =
        this.populateCaption(data.length) +
        this.populateHeader() +
        this.populateBody(data);
    }
  };
}

/**
 * Format data row based on its tags
 * @param {Object} tag_descriptions Tag - Description mappings, the Description contains Tag display name, the Formats and Parents for this Tag
 * @param {Object} format_support Letter - Format mappings. This object helps using string to declare many formats instead of a complex Object.
 */
function Formatter(tag_descriptions, format_support) {
  this.tag_descriptions = tag_descriptions;
  this.support = format_support;

  this.getTagsAndRelates = (tags) => {
    if (!Array.isArray(tags)) {
      tags = [tags];
    }
    let result = [];
    let i = 0;
    while (i < tags.length) {
      const tag = tags[i];
      if (!result.includes(tag)) {
        result.push(tag);

        const description = this.tag_descriptions[tag];
        if (description && TAG_PARENTS_KEY in description) {
          let parents = description[TAG_PARENTS_KEY];
          result.push(...(Array.isArray(parents) ? parents : [parents]));
        }
      }
      i = i + 1;
    }
    return [...new Set(result)].sort();
  };

  this.getDisplayName = (tag) => {
    const description = this.tag_descriptions[tag];
    if (description && TAG_DISPLAY_NAME_KEY in description) {
      return description[TAG_DISPLAY_NAME_KEY];
    }
    return `#${tag.toUpperCase()}`;
  };
  /**
   * Convert formats defined in Tag Description into CSS Rules
   * @param {String} tag Tag name
   * @param {String} column Column key for specify which cell need format
   * @param {String|Object} formats If the value is String, use format object defined in format_support
   * @returns String presents CSS Rule
   */
  this.createRule = (tag, column, formats) => {
    const column_selector =
      column === FORMAT_ALL_COLUMNS_INDICATOR ? "td" : "." + column;
    const selector = `.${tag} ${column_selector}`;

    if (typeof formats === "string") {
      // split letters in formats, each letter stands for rules defined in format support
      format = formats.split("").reduce((prev, f) => {
        return { ...prev, ...this.support[f] };
      }, {});
    }

    const declaration = JSON.stringify(format)
      .replace(/,/g, ";")
      .replace(/"/g, "");
    return selector + declaration;
  };

  this.addRulesToDocument = () => {
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    Object.entries(this.tag_descriptions).forEach(([tag, description]) => {
      const column_formats = description[TAG_FORMAT_KEY];
      Object.entries(column_formats).forEach(([column, formats]) => {
        styleSheet.insertRule(this.createRule(tag, column, formats));
      });
    });
    return this;
  };
}
