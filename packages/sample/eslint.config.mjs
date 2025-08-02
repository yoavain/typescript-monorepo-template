import rootConfig from '../../eslint.config.mjs';

export default [
    ...rootConfig,
    {
        files: ["src/**/*"],
        rules: {
            "import/no-extraneous-dependencies": [
                "error",
                {
                    "devDependencies": false
                }
            ]
        }
    }
];