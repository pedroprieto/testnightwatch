var server = require('../server.js');

module.exports = {
  before: function(browser, done) {
    server.startServer(done);
  },
  after: function(browser,done) {
    server.stopServer(done);
  },
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .assert.containsText("#about", "Acerca de esta página")
      // .setValue('input[type=text]', 'nightwatch')
      // .waitForElementVisible('input[name=btnK]')
      // .click('input[name=btnK]')
      // .pause(1000)
      // .assert.containsText('#main', 'Nightwatch')
      .end();
  }
};
