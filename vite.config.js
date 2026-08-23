import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function cleanWriteupRouteRedirect() {
  return {
    name: "clean-writeup-route-redirect",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const [pathname, query = ""] = request.url.split("?");

        if (/^\/writeups\/[^/]+$/.test(pathname)) {
          response.statusCode = 301;
          response.setHeader("Location", `${pathname}/${query ? `?${query}` : ""}`);
          response.end();
          return;
        }

        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        const [pathname, query = ""] = request.url.split("?");

        if (/^\/writeups\/[^/]+$/.test(pathname)) {
          response.statusCode = 301;
          response.setHeader("Location", `${pathname}/${query ? `?${query}` : ""}`);
          response.end();
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [react(), cleanWriteupRouteRedirect()],
  base: command === "build" ? "./" : "/",
}));