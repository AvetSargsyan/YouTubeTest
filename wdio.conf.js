export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'MicrosoftEdge' // or "firefox", "microsoftedge", "safari"
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ['chromedriver'],
    services: [
        'edgedriver',
    ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/*.steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
}