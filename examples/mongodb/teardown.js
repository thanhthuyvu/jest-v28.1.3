// teardown.js
const path = require('path');

const fs = require('fs');

const globalConfigPath = path.join(__dirname, 'globalConfig.json');

module.exports = async function () {
  await globalThis.__MONGOD__.stop();

  fs.unlinkSync(globalConfigPath);
};
