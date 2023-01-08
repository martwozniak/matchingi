import path from "path";

/** @type {import("next-i18next").UserConfig} */
const config = {
    debug: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
    i18n: {
        locales: ["en", "pl"],
        defaultLocale: "en",
    },
    localePath: path.resolve("./src/lang"),
};
export default config;