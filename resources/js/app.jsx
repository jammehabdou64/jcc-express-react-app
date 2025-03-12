import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "../css/app.css";

createInertiaApp({
  title: (title) => `${title}`,
  render: ReactDOMServer.renderToString,
  resolve: (name) => {
    return resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx", { eager: true }),
    );
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },

  progress: {
    color: "#172554",
    delay: 1,
  },
});
