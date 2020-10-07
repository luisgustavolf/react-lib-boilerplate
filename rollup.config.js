import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image'

export default {
    input: "src/lib/index.ts",
    output: {
        dir: 'dist',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
    },
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true
        }),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: false,
            tsconfig: 'rollup.tsconfig.json',
            clean: true
        }),
        postcss({
            extract: true
        }),
        image()
    ]
};