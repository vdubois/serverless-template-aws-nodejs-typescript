const Jasmine = require('jasmine');
const runner = new Jasmine();

runner.loadConfigFile('spec/jasmine.spec.json');
runner.execute();
