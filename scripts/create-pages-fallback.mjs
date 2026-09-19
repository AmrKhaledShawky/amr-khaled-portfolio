import { mkdir, readFile, writeFile } from "node:fs/promises";

const indexPath = "dist/index.html";
const fallbackPath = "dist/404.html";
const pagesBase = "/amr-khaled-portfolio/";
const writeupsDirectory = "dist/writeups";
const writeupsDataPath = "src/data/writeups.js";

const indexHtml = await readFile(indexPath, "utf8");
const routeAssetHtml = indexHtml
  .replaceAll('href="./icon.png"', `href="${pagesBase}icon.png"`)
  .replaceAll('src="./assets/', `src="${pagesBase}assets/`)
  .replaceAll('href="./assets/', `href="${pagesBase}assets/`);
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

await Promise.all(
  writeupRoutes.map(async (slug) => {
    const routeDirectory = `${writeupsDirectory}/${slug}`;
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(`${routeDirectory}/index.html`, routeAssetHtml);
  }),
);
