"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack = exports.managerWebpack = exports.managerBabel = exports.babel = void 0;
var node_logger_1 = require("@storybook/node-logger");
var ie11Preset = [
    "@babel/preset-env",
    {
        targets: {
            ie: "11",
        },
    },
    "storybook-addon-ie11",
];
var plugins = [require.resolve("@babel/plugin-transform-classes")];
var babel = function (config) {
    var _a = config.presets, presets = _a === void 0 ? [] : _a;
    return __assign(__assign({}, config), { presets: __spreadArray(__spreadArray([], __read((presets || []))), [ie11Preset]), plugins: plugins });
};
exports.babel = babel;
var managerBabel = function (config) {
    var _a = config.presets, presets = _a === void 0 ? [] : _a;
    return __assign(__assign({}, config), { presets: __spreadArray(__spreadArray([], __read((presets || []))), [ie11Preset]) });
};
exports.managerBabel = managerBabel;
var nodeModulesThatNeedToBeParsedBecauseTheyExposeES6 = [
    "@storybook/node_logger",
    "acorn-jsx",
    "better-opn",
    "boxen",
    "camelcase",
    "chalk",
    "color-convert",
    "commander",
    "highlight.js",
    "find-cache-dir",
    "find-up",
    "fs-extra",
    "json5",
    "node-fetch",
    "pkg-dir",
    "resolve-from",
    "semver",
    "uuid",
];
var escape = function (str) { return str.replace("/", "/"); };
var include = new RegExp("[\\\\/]node_modules[\\\\/](" + nodeModulesThatNeedToBeParsedBecauseTheyExposeES6
    .map(escape)
    .join("|") + ")");
var es6Loader = {
    test: /\.js$/,
    use: [
        {
            loader: require.resolve("babel-loader"),
            options: {
                sourceType: "unambiguous",
                presets: [ie11Preset],
                plugins: plugins,
            },
        },
    ],
    include: include,
};
var managerWebpack = function (webpackConfig) {
    var _a, _b;
    if (webpackConfig === void 0) { webpackConfig = {}; }
    return (__assign(__assign({}, webpackConfig), { module: __assign(__assign({}, webpackConfig.module), { rules: __spreadArray(__spreadArray([], __read(((_b = (_a = webpackConfig.module) === null || _a === void 0 ? void 0 : _a.rules) !== null && _b !== void 0 ? _b : []))), [es6Loader]) }) }));
};
exports.managerWebpack = managerWebpack;
var webpack = function (webpackConfig) {
    var _a, _b;
    if (webpackConfig === void 0) { webpackConfig = {}; }
    node_logger_1.logger.info("=> Using IE11 addon");
    return __assign(__assign({}, webpackConfig), { module: __assign(__assign({}, webpackConfig.module), { rules: __spreadArray(__spreadArray([], __read(((_b = (_a = webpackConfig.module) === null || _a === void 0 ? void 0 : _a.rules) !== null && _b !== void 0 ? _b : []))), [es6Loader]) }) });
};
exports.webpack = webpack;
//# sourceMappingURL=preset.js.map