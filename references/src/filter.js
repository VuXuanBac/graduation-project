const OPERATOR = {
  EQ: "=",
  NE: "!",
  GT: ">",
  LT: "<",
  LIKE: "#",
  AND: "&",
  OR: "|",
};
const ARRAY_SEPARATOR = ",";

/**
 * Filter data based on search conditions
 * @param {Object} data Original data
 * @param {Object} field_mappings Mapping from search attribute to data field, only data field listed here are using to filter
 */
function Filter(data, field_mappings) {
  this.data = data;
  this.fields = field_mappings || {};
  this.guideHtml = () => {
    const operatorGuide = {
      EQ: "Equal | An item of | Includes All",
      NE: "Not Equal | Not an item of | Not includes Any",
      GT: "Greater than",
      LT: "Less than",
      LIKE: "Contains any",
      AND: "[Combine queries] Get common items (joint) in both operands query",
      OR: "[Combine queries] Get every items (union) from operands query",
    };
    return `<b>Support fields for query</b>: ${Object.entries(this.fields).map(
      ([attribute, field]) => `<br/>  - ${attribute} (${field})`
    )}<br/><b>Support operators</b>: ${Object.entries(OPERATOR).map(
      ([name, sign]) => `<br/>  - ${sign} (${operatorGuide[name]})`
    )}
    `;
  };
  this.isItemPassCheck = (value, operator, operand) => {
    if (Array.isArray(operand)) {
      switch (operator) {
        case OPERATOR.EQ:
          return Array.isArray(value)
            ? new Set(operand).isSubsetOf(new Set(value))
            : operand.includes(value);
        case OPERATOR.NE:
          if (Array.isArray(value)) {
            new Set(operand).isDisjointFrom(new Set(value));
          } else {
            const regex = new RegExp(operand.join("|"), "i");
            return !regex.test(value);
          }
        case OPERATOR.LIKE:
          if (Array.isArray(value)) {
            return !new Set(operand).isDisjointFrom(new Set(value));
          } else {
            const regex = new RegExp(operand.join("|"), "i");
            return regex.test(value);
          }

        default:
          return false;
      }
    }
    switch (operator) {
      case OPERATOR.EQ:
        return value == operand;
      case OPERATOR.NE:
        return Array.isArray(value)
          ? !value.includes(operand)
          : value != operand;
      case OPERATOR.GT:
        return value > operand;
      case OPERATOR.LT:
        return value < operand;
      case OPERATOR.LIKE:
        const regex = new RegExp(operand, "i");
        return regex.test(value);
      default:
        return false;
    }
  };
  this.singleFilter = (attribute, operator, operand) => {
    if (attribute && operator && operand) {
      return this.data.filter((item) =>
        this.isItemPassCheck(item[attribute], operator, operand)
      );
    }
    return [];
  };
  this._combineTwoArrays = (operator, array1, array2) => {
    switch (operator) {
      case OPERATOR.OR: // Union
        return [...new Set([...array1, ...array2])];
      case OPERATOR.AND:
        return array1.filter((item) => array2.includes(item));
      default:
        return [];
    }
  };
  this.run = (query) => {
    if (query.trim() === "") {
      return this.data;
    }
    const split_regex = new RegExp(`([${Object.values(OPERATOR).join("")}])`);
    const tokens = query
      .split(split_regex)
      .filter(Boolean)
      .map((item) => item.trim());

    let i = 0;
    let result = [];
    while (i + 2 < tokens.length) {
      const attribute = this.fields[tokens[i]];
      const operator = tokens[i + 1];
      let operand = tokens[i + 2].split(ARRAY_SEPARATOR);
      if (operand.length == 1) {
        operand = operand[0];
      }
      const r = this.singleFilter(attribute, operator, operand);

      if (i == 0) {
        result = r;
      } else if (tokens[i - 1]) {
        result = this._combineTwoArrays(tokens[i - 1], r, result);
      }
      i = i + 4;
    }
    return result;
  };
}
