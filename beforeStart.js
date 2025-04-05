const fs = require('fs');
const path = require('path');
const sqwiroConfig = require('../SQWIRO_SCRIPTS/sqwiro.config.js');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function writeToFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

const sqwiroConfigFile = path.join(
  __dirname,
  './@sqwiro/app/config/config.json'
);

let config = {};

try {
  config = require('./@sqwiro/app/config/config.json');
} catch (error) {
  console.log('Error loading config.json', error);
}

(async () => {
  sqwiroConfig.cleanExpoProject();

  config.ipAddress = sqwiroConfig.getIpAddress();
  void writeToFile(sqwiroConfigFile, JSON.stringify(config, null, 2));
})();
