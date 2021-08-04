import type { PluginItem } from "@babel/core";
import type { Configuration } from "webpack";
interface BabelOptions {
    extends: string | null;
    plugins: PluginItem[] | null;
    presets: PluginItem[] | null;
}
export declare const babel: (config: BabelOptions) => BabelOptions;
export declare const managerBabel: (config: BabelOptions) => BabelOptions;
export declare const managerWebpack: (webpackConfig?: Configuration) => Configuration;
export declare const webpack: (webpackConfig?: Configuration) => Configuration;
export {};
