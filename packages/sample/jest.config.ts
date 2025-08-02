import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    roots: [
        "<rootDir>/unit_test"
    ],
    testMatch: [
        "**/*+(T|.t)est.+(ts|js)"
    ],
    transform: {
        "^.+\\.(ts|js)$": ["ts-jest", {
            tsconfig: "tsconfig.json",
            isolatedModules: true
        }]
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.*"
    ],
    coverageReporters: [
        "text-summary",
        "text",
        "cobertura"
    ]
};

export default config;
