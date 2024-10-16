const fs = require("fs");
const path = require("path");

function processNestedHtml(content, loaderContext, resourcePath = "") {
  let fileDir = resourcePath
    ? path.dirname(resourcePath)
    : path.dirname(loaderContext.resourcePath);
  const INCLUDE_PATTERN = /<include src="(\.\/)?(.+)"\/?>/gi;

  function replaceHtml(match, pathRule, src) {
    if (pathRule === "./") {
      fileDir = loaderContext.context;
    }
    const filePath = path.resolve(fileDir, src);
    loaderContext.addDependency(filePath);
    const html = fs.readFileSync(filePath, "utf8");
    return processNestedHtml(html, loaderContext, filePath);
  }

  return content.replace(INCLUDE_PATTERN, replaceHtml);
}

function processHtmlLoader(content, loaderContext) {
  return processNestedHtml(content, loaderContext);
}

module.exports = { processHtmlLoader };
