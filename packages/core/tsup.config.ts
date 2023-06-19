const pkg = require("./package.json");

module.exports = {
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  sourcemap: true,
  minify: true,
  dts: true,
  external: Object.keys(pkg.dependencies),
  bundle: true,
  clean: true,
};
