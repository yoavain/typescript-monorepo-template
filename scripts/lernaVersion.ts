import path from "path";
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const updateVersionsFromLerna = async () => {
    const lernaJson = require(path.resolve(__dirname, "..", "lerna.json"));
    const lernaVersion: string = lernaJson.version;
    const { stdout, stderr } = await exec(
        `lerna version ${lernaVersion} --yes --exact --no-push --no-git-tag-version --no-commit-hooks --allow-branch=*`,
        { cwd: path.resolve(__dirname, "..") }
    );
    console.log(JSON.stringify({ stdout: stdout, stderr: stderr }));
};

updateVersionsFromLerna().catch(console.error);
