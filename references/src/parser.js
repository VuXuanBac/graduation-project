const TAG_STRING_SEPARATOR = ",";

function parseTag(item) {
  const tags = item[DATA_TAG_FIELD_KEY] || [];
  if (typeof tags === "string") {
    return tags
      .split(TAG_STRING_SEPARATOR)
      .filter(Boolean) /** Remove empty */
      .map((value) => value.trim());
  }
  return tags;
}

function parseItem(item) {
  if (item.cite) {
    // ========= bibtex-js-parser
    // const parseCite = BibtexParser.parseToJSON(item.cite)[0];
    // const { year, title, type, author } = parseCite;

    // ========= bibtexParse
    const parseCite = bibtexParse.toJSON(item.cite)[0];

    const type = parseCite.entryType;
    // const key = parseCite.citationKey;
    const { year, title, author } = parseCite.entryTags;
    const authors = author.split(" and ");

    // ========= Parse Tags
    item[DATA_TAG_FIELD_KEY] = parseTag(item);

    return { ...item, year, title, type, authors, author: authors[0] };
  }
  return item;
}
