// --------- This file contains format and columns template ---------

COLUMNS = {
  id: {
    name: "ID",
    template: "$id",
    require: true,
  },
  // type: "Type",
  title: "Title",
  author: "Main Author",
  year: "Year",
  description: "Description",
  link: {
    name: "File",
    template: `<a href="$value" target="_blank">File</a>`,
  },
  // url: {
  //   name: "URL",
  //   template: `<a href="$value" target="_blank">URL</a>`,
  // },
  cite: {
    name: "Cite",
    template: `<button type="button" onclick="copyToClipboard($id)">Copy</button>`,
  },
};

// Using for highlight data item. Each data item using `_group_` field to indicate the formats its use.
// - key: Name of the format group
//   - This value is used in `_group_` field in DATA
// - value: Object:
//    - `description`: Display on title of row
//    - `format`: Object:
//        - key:
//            - Any column name defined in COLUMNS
//            - "*" for all columns
//        - value:
//            - Object (CSS format)
//            - String (each letter represent a CSS format defined in FORMAT_MAPS)
TAG_FORMAT = {
  div: {
    title: "#Diversity",
    format: {
      "*": "O",
    },
  },
  design: {
    title: "#Design #Optimization",
    format: {
      "*": "C",
      title: "1g",
    },
  },
  csi: {
    title: "#CSI",
    format: {
      "*": "G",
    },
  },
  asop: {
    title: "#ASOP",
    format: {
      title: "1b",
    },
    parents: ["metric"],
  },
  gsop: {
    format: {
      title: "1o",
    },
    parents: ["metric"],
  },
  metric: {
    title: "#Metric",
    format: {
      "*": "B",
    },
  },
  input: {
    title: "#Finite-Input",
    format: {
      "*": "P",
    },
  },
  relay: {
    title: "#Relay",
    format: {
      title: "12y",
    },
    parents: ["coop"],
  },
  crn: {
    format: {
      title: "1w",
    },
    parents: ["coop"],
  },
  coop: {
    title: "#Cooperation",
    format: {
      "*": "Q",
    },
  },
  fav: {
    title: "#Favorite",
    format: {
      id: "R",
    },
    parents: ["int"],
  },
  int: {
    title: "#Interest",
    format: {
      id: "Y",
    },
  },
  x: {
    title: "#Done",
    format: {
      id: "1lb",
    },
  },
};

// Format shortcut for String representation of FORMAT value
// - key: 1 character
// - value: An Object represents CSS Format
const FORMAT_SUPPORTS = {
  1: { "font-weight": "bold" },
  2: { "font-style": "italic" },
  3: { "text-decoration": "underline" },
  4: { "text-decoration": "line-through" },
  0: { color: "#d7cdcd" }, // disable
  y: { color: "rgb(246 248 0)" },
  r: { color: "rgb(235 13 13)" },
  g: { color: "rgb(3 110 21)" },
  b: { color: "rgb(3 55 123)" },
  o: { color: "rgb(255 113 13)" },
  w: { color: "white" },
  R: { "background-color": "rgb(227 100 100)" },
  O: { "background-color": "rgb(223 166 116)" },
  Y: { "background-color": "rgb(233 233 146)" },
  G: { "background-color": "rgb(180 237 137)" },
  C: { "background-color": "rgb(162 223 222)" },
  B: { "background-color": "rgb(186 190 243)" },
  Q: { "background-color": "rgb(213 174 214)" },
  P: { "background-color": "rgb(159 98 232)", color: "#fff" },
  W: { "background-color": "white" },
  l: { "font-size": "xx-large" },
};

// Copy data `cite` field to clipboard on click Copy button
function copyToClipboard(id) {
  const { cite } = window.getDataItem(id - 1, ["cite"]);

  if (cite) {
    navigator.clipboard.writeText(cite);
    console.log(`Copy cite to clipboard for ID ${id}: ${cite}`);
  }
}

const FILTER_FIELDS = {
  tag: "_tags_",
  title: "title",
  type: "type",
  author: "author",
  year: "year",
  desc: "description",
  description: "description",
};
