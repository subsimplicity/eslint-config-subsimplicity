import eslintPlugin from "eslint-plugin-eslint-plugin";
import { node } from "./lib/index.mjs";

export default [...node, eslintPlugin.configs["flat/recommended"]];
