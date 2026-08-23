import { readFile, writeFile } from "node:fs/promises";

const indexPath = "dist/index.html";
const fallbackPath = "dist/404.html";
const pagesBase = "/amr-khaled-portfolio/";
const writeupsDirectory = "dist/writeups";
const writeupsDataPath = "src/data/writeups.js";

const indexHtml = await readFile(indexPath, "utf8");
const fallbackHtml = indexHtml.replace(
  "<head>",
  `<head>\n    <base href="${pagesBase}" />`,
);

await writeFile(fallbackPath, fallbackHtml);

const writeupsData = await readFile(writeupsDataPath, "utf8");
const writeupRoutes = [
  ...writeupsData.matchAll(
    /id:\s*["']([^"']+)["'][\s\S]*?writeupPath:\s*publicAsset\(["']writeups\/([^"']+)["']\)/g,
  ),
].map((match) => match[1]);

const routeHtml = indexHtml
  .replaceAll('href="./icon.png"', 'href="../../icon.png"')
  .replaceAll('src="./assets/', 'src="../../assets/')
  .replaceAll('href="./assets/', 'href="../../assets/');

await Promise.all(
  writeupRoutes.map(async (slug) => {
    await writeFile(`${writeupsDirectory}/${slug}`, routeHtml);
  }),
);
