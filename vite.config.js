import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as fs from "node:fs";
import path from "path";
import module from "module";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactVirtualized()],
});
// to resolve https://github.com/bvaughn/react-virtualized/issues/1632
const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;
const require = module.createRequire(import.meta.url);
function reactVirtualized() {
  return {
    name: "my:react-virtualized",
    configResolved() {
      const file = require
        .resolve("react-virtualized")
        .replace(
          path.join("dist", "commonjs", "index.js"),
          path.join("dist", "es", "WindowScroller", "utils", "onScroll.js")
        );
      const code = fs.readFileSync(file, "utf-8");
      const modified = code.replace(WRONG_CODE, "");
      fs.writeFileSync(file, modified);
    },
  };
}
