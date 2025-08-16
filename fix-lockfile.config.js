const { execSync } = require("node:child_process");
const path = require("node:path");

const lernaInfoOutput = execSync("lerna list --all --json", { encoding: "utf8" });
const lernaPackages = JSON.parse(lernaInfoOutput).map((p) => path.relative(__dirname, p.location));

const config = {
    includePaths: [
        "./",
        ...lernaPackages
    ],
    lockFileNames: [
        "package-lock.json"
    ]
};

module.exports = config;
