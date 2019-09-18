const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-133320.okta.com',
  token: '00-bvBchHLqdZpzi3pQKCwUXtyGlDx6SllniaSMhC-'
});

module.exports = client;
