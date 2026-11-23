import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [...nextVitals, ...nextTs, { ignores: ["out/**", ".next/**", "images/**"] }];
export default eslintConfig;
