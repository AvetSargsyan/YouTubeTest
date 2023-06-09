export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    suites: {
        basePage: [
            './features/basePage.feature',
        ],
        profileSettings: [
            './features/profileSettings.feature',
        ],
        opeiningVideo: [
            './features/openingVideo.feature',
        ]
    },
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'MicrosoftEdge',
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'edgedriver',
    ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/*.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}