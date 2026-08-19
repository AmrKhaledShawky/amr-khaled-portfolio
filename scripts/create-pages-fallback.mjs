import { readFile, writeFile } from "node:fs/promises";

const indexPath = "dist/index.html";
const fallbackPath = "dist/404.html";
const pagesBase = "/amr-khaled-portfolio/";

const indexHtml = await readFile(indexPath, "utf8");
const fallbackHtml = indexHtml.replace(
  "<head>",
  `<head>\n    <base href="${pagesBase}" />`,
);

await writeFile(fallbackPath, fallbackHtml);
