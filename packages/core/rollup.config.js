import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/virtial-react-dom.esm.js",
      format: "esm",
    },
    {
      file: "dist/virtial-react-dom.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
    terser({
      format: {
        comments: false, // 去除注释
      },
    }),
  ],
};
