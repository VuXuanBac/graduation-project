const CONTAINER_SELECTOR = "#table-main";
// Render Table
const formatter = new Formatter(TAG_FORMAT, FORMAT_SUPPORTS);
formatter.addRulesToDocument();

const data = new Parser(parseItem).parse(DATA);
console.log(data);

const renderer = new Renderer(COLUMNS, formatter);
renderer.render(CONTAINER_SELECTOR, data);

const filter = new Filter(data, FILTER_FIELDS);

document.getElementById("search-guide").innerHTML = filter.guideHtml();

document.addEventListener("click", (event) => {
  const element = event.target;
  if (element.id === "search-btn") {
    const query = document.getElementById("search-input")?.value || "";
    renderer.render(CONTAINER_SELECTOR, filter.run(query));
  }
});

// Auto submit on enter
document.addEventListener("keypress", (event) => {
  const element = event.target;
  if (element.id === "search-input") {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-btn").click();
    }
  }
});
