const JasmineE2E = require('jasmine');
const runnerE2E = new JasmineE2E();

runnerE2E.loadConfigFile('e2e/jasmine.e2e.json');
runnerE2E.execute();
