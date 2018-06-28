const path = require('path');
const dirname = path.resolve(__dirname);
const wdio = require('webdriverio');
const pathToApk = dirname + '/app-debug.apk';
const data = require('../data/config.json');
const userDetails = data.USER;
const androidDetails = data.ANDROID_DETAILS;
const appiumDetails = data.APPIUM_DETAILS;
const MAX_WAIT = 5000;

const options = {
  port: appiumDetails.port,
  logLevel: appiumDetails.logLevel,
  desiredCapabilities: {
    platformName: 'Android',
    platformVersion: androidDetails.platformVersion,
    deviceName: androidDetails.deviceName,
    app: pathToApk,
    chromeOptions: {
      distribution: {
        skip_first_run_ui: true,
        show_welcome_page: true,
        import_bookmarks: false,
        make_chrome_default: false,
        ignore_certificate_errors: true
      }
    }
  }
}

var client = wdio.remote(options);
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = client.transferPromiseness;

module.exports.chai = chai;
module.exports.client = client;