import eslintPlugin from "eslint-plugin-eslint-plugin";
// eslint-disable-next-line import/extensions
import { node } from "./lib/index.js";

export default [...node, eslintPlugin.configs["flat/recommended"]];
