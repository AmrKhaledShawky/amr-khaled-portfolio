const githubPagesBase = "/amr-khaled-portfolio/";

export const siteBase = window.location.pathname.startsWith(githubPagesBase)
  ? githubPagesBase
  : "/";

export function publicAsset(path) {
  return `${siteBase}${path}`;
}