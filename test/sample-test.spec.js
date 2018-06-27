const path = require('path');
const scriptName = path.basename(__filename);
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

const pageObjects = {
  "TOOLBAR": {
    "openNavMenu": "~Open navigation drawer",
    "toolbarTitleTextView": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView"
  },
  "NAV_MENU": {
    "recyclerView": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView",
    "menuItemPrefix": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.support.v7.widget.LinearLayoutCompat[",
    "menuItemPostfix": "]/android.widget.CheckedTextView"
  },
  "AUTHENTICATE_SCREEN": {
    "authenticate_button": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button"
  },
  "KEYCLOAK_LOGIN_SCREEN": {
    "username_text_area": '//android.webkit.WebView[@content-desc="Log in to secure-app"]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText',
    "password_text_area": '//android.webkit.WebView[@content-desc="Log in to secure-app"]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[4]/android.widget.EditText',
    "login_button": "~Log in"
  },
  "LOGGED_IN_SCREEN": {
    "logout_button": '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.Button'
  },
  "SECURE_STORAGE_SCREEN": {
    "add_note_btn": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageButton",
    "note_title": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.TextView[1]",
    "note_content": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.TextView[2]"
  },
  "CREATE_NOTE_SCREEN": {
    "note_title_field": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.EditText[1]",
    "note_content_field": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.EditText[2]",
    "store_type_sqlite": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[2]",
    "save_note_btn": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button"
  }
}

const navigationHeadings = {
  HOME: "Home",
  IDM: "Identity Management",
  DOCS: "Documentation",
  AUTHENTICATION: "Authentication",
  SSO: "SSO",
  DEVICE_SECURITY: "Device Security",
  DEVICE_TRUST: "Device Trust",
  SECURE_STORAGE: "Secure Storage",
  CERT_PINNING: "Cert Pinning",
  PUSH_NOTIFICATIONS: "Push Notifications",
  PUSH_MESSAGES: "Push Messages",
  METRICS: "Metrics",
  DEVICE_PROFILE_INFO: "Device Profile Info",
  TRUST_CHECK_INFO: "Trust Check Info"
}

var client = wdio.remote(options);
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = client.transferPromiseness;

describe(scriptName, () => {

  
  // xit('should log into and out of application', (done) => {
  //   try {
  //     client.init()
  //     .click(pageObjects.NAV_BAR.openNavMenu)
  //     .waitForVisible(pageObjects.NAV_MENU.authenticate, MAX_WAIT)
  //     .click(pageObjects.NAV_MENU.authenticate)
  //     .waitForVisible(pageObjects.AUTHENTICATE_SCREEN.authenticate_button, MAX_WAIT)
  //     .waitForEnabled(pageObjects.AUTHENTICATE_SCREEN.authenticate_button, MAX_WAIT)
  //     .click(pageObjects.AUTHENTICATE_SCREEN.authenticate_button)
  //     .waitForVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.username_text_area, MAX_WAIT)
  //     .waitForVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.password_text_area, MAX_WAIT)
  //     .setValue(pageObjects.KEYCLOAK_LOGIN_SCREEN.username_text_area, userDetails.username)
  //     .setValue(pageObjects.KEYCLOAK_LOGIN_SCREEN.password_text_area, userDetails.password)
  //     .waitForVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.login_button, MAX_WAIT)
  //     .click(pageObjects.KEYCLOAK_LOGIN_SCREEN.login_button)
  //     .pause(MAX_WAIT)
  //     .waitForVisible(pageObjects.LOGGED_IN_SCREEN.logout_button, MAX_WAIT)
  //     .waitForEnabled(pageObjects.LOGGED_IN_SCREEN.logout_button, MAX_WAIT)
  //     .click(pageObjects.LOGGED_IN_SCREEN.logout_button)
  //     .waitForVisible(pageObjects.AUTHENTICATE_SCREEN.authenticate_button, MAX_WAIT)
  //     .end()
  //     .then(() => {
  //       done();
  //     });
  //   } catch(err) {
  //     done(err);
  //   }
  // });

  it('should check for the presence of all of the navigation items', () => {
    return client
      .init()
      .isVisible(pageObjects.TOOLBAR.toolbarTitleTextView).should.eventually.be.true
      
      .getText(pageObjects.TOOLBAR.toolbarTitleTextView).should.eventually.equal(navigationHeadings.HOME)
      .isVisible(pageObjects.TOOLBAR.openNavMenu).should.eventually.be.true
      .click(pageObjects.TOOLBAR.openNavMenu)
      .pause(1000)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "1" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "1" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.HOME)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "2" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "2" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.IDM)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "3" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "3" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "4" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "4" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.AUTHENTICATION)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "5" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "5" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.SSO)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "6" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "6" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DEVICE_SECURITY)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "7" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "7" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "8" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "8" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DEVICE_TRUST)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "9" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "9" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.SECURE_STORAGE)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "10" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "10" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.CERT_PINNING)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "11" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "11" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.PUSH_NOTIFICATIONS)

      .swipe(pageObjects.NAV_MENU.recyclerView,0,1000,500)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "10" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "10" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.PUSH_NOTIFICATIONS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "11" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "11" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "12" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "12" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.PUSH_MESSAGES)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "13" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "13" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.METRICS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "14" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "14" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "15" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "15" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.DEVICE_PROFILE_INFO)
      
      .isVisible(pageObjects.NAV_MENU.menuItemPrefix + "16" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.menuItemPrefix + "16" + pageObjects.NAV_MENU.menuItemPostfix).should.eventually.equal(navigationHeadings.TRUST_CHECK_INFO)
      .end();
  });

  // it('should log into and out of application (transfer promisness)', () => {
  //   return client
  //     .init()
  //     .isVisible(pageObjects.NAV_BAR.openNavMenu).should.eventually.be.true
  //     .click(pageObjects.NAV_BAR.openNavMenu)
  //     .isVisible(pageObjects.NAV_MENU.authenticate).should.eventually.be.true
  //     .click(pageObjects.NAV_MENU.authenticate)
  //     .isEnabled(pageObjects.AUTHENTICATE_SCREEN.authenticate_button).should.eventually.be.true
  //     .click(pageObjects.AUTHENTICATE_SCREEN.authenticate_button)
  //     .pause(3000)
  //     .isVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.username_text_area).should.eventually.be.true
  //     .isVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.password_text_area).should.eventually.be.true
  //     .setValue(pageObjects.KEYCLOAK_LOGIN_SCREEN.username_text_area, userDetails.username)
  //     .setValue(pageObjects.KEYCLOAK_LOGIN_SCREEN.password_text_area, userDetails.password)
  //     .isVisible(pageObjects.KEYCLOAK_LOGIN_SCREEN.login_button).should.eventually.be.true
  //     .click(pageObjects.KEYCLOAK_LOGIN_SCREEN.login_button)
  //     .pause(3000)
  //     .isVisible(pageObjects.LOGGED_IN_SCREEN.logout_button).should.eventually.be.true
  //     .isEnabled(pageObjects.LOGGED_IN_SCREEN.logout_button).should.eventually.be.true
  //     .pause(3000)
  //     .click(pageObjects.LOGGED_IN_SCREEN.logout_button)
  //     .pause(3000)
  //     .isVisible(pageObjects.AUTHENTICATE_SCREEN.authenticate_button).should.eventually.be.true
  //     .end();
  // });

  // it('should create and persist a note without logging in', () => {
  //   return client
  //     .init()
  //     .isVisible(pageObjects.NAV_BAR.openNavMenu).should.eventually.be.true
  //     .click(pageObjects.NAV_BAR.openNavMenu)
  //     .isVisible(pageObjects.NAV_MENU.secure_storage).should.eventually.be.true
  //     .click(pageObjects.NAV_MENU.secure_storage)
  //     .isVisible(pageObjects.SECURE_STORAGE_SCREEN.add_note_btn).should.eventually.be.true
  //     .click(pageObjects.SECURE_STORAGE_SCREEN.add_note_btn)
  //     .isVisible(pageObjects.CREATE_NOTE_SCREEN.note_title_field).should.eventually.be.true
  //     .isVisible(pageObjects.CREATE_NOTE_SCREEN.note_content_field).should.eventually.be.true
  //     .isVisible(pageObjects.CREATE_NOTE_SCREEN.store_type_sqlite).should.eventually.be.true
  //     .isVisible(pageObjects.CREATE_NOTE_SCREEN.save_note_btn).should.eventually.be.true
  //     .setValue(pageObjects.CREATE_NOTE_SCREEN.note_title_field, "test title")
  //     .setValue(pageObjects.CREATE_NOTE_SCREEN.note_content_field, "test content")
  //     .click(pageObjects.CREATE_NOTE_SCREEN.store_type_sqlite)
  //     .hideDeviceKeyboard('pressKey', 'Done')
  //     .click(pageObjects.CREATE_NOTE_SCREEN.save_note_btn)
  //     .isVisible(pageObjects.SECURE_STORAGE_SCREEN.add_note_btn).should.eventually.be.true
  //     .isVisible(pageObjects.SECURE_STORAGE_SCREEN.note_title).should.eventually.be.true
  //     .isVisible(pageObjects.SECURE_STORAGE_SCREEN.note_content).should.eventually.be.true
  //     .getText(pageObjects.SECURE_STORAGE_SCREEN.note_title).should.eventually.equal("test title")
  //     .getText(pageObjects.SECURE_STORAGE_SCREEN.note_content).should.eventually.equal("Storage: SQLite Database")
  //     .end();
  // })
});

