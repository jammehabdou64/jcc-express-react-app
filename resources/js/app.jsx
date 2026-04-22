import { createInertiaApp } from "@inertiajs/react";

createInertiaApp({
  strictMode: true,
  pages: "./Pages",

  progress: {
    color: "#172554",
    delay: 1,
  },
});
