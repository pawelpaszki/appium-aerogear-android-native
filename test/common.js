const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const dirname = path.resolve(__dirname);
const wdio = require('webdriverio');
const pathToApk = dirname + '/android-native.apk';
const appiumSettings = require('../constants/android').appiumSettings;

const options = {
  port: appiumSettings.APPIUM_DETAILS.PORT,
  logLevel: appiumSettings.APPIUM_DETAILS.LOG_LEVEL,
  desiredCapabilities: {
    platformName: 'Android',
    platformVersion: appiumSettings.ANDROID_DETAILS.PLATFORM_VERSION,
    deviceName: appiumSettings.ANDROID_DETAILS.DEVICE_NAME,
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

const client = wdio.remote(options);
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = client.transferPromiseness;

module.exports.chai = chai;
module.exports.client = client;