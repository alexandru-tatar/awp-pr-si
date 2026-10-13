import { serve } from "bun";
import praesentation from "./praesentation.html";

const server = serve({
  routes: {
    "/*": praesentation,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Präsentation: ${server.url}`);
