import path from "node:path";
import { promisify } from "node:util";
import { exec as asyncExec } from "node:child_process";

const exec = promisify(asyncExec);

const updateVersionsFromLerna = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const lernaJson = require(path.resolve(__dirname, "..", "lerna.json"));
    const lernaVersion: string = lernaJson.version;
    await exec(
        `lerna version ${lernaVersion} --yes --exact --no-push --no-git-tag-version --no-commit-hooks --allow-branch=*`,
        { cwd: path.resolve(__dirname, "..") }
    );
    await exec(
        `npm version ${lernaVersion} -git-tag-version=false`,
        { cwd: path.resolve(__dirname, "..") }
    );
    await exec(
        "git add package*.json",
        { cwd: path.resolve(__dirname, "..") }
    );
};

updateVersionsFromLerna().catch(console.error);
