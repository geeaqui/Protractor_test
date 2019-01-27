exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
     './tests/account/spec.js',
    './tests/purchase/spec.js'
    ],
    multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }],
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 1000000,
      isVerbose: true,
      includeStackTrace: true,
  },
  }