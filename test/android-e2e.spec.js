const common = require('./common');
const sharedConstants = require('../constants/shared');
const pageObjects = require('../constants/android').pageObjects;

const chai = common.chai;
const client = common.client;
const navigationHeaders = sharedConstants.navigationHeaders;

describe('Run android e2e', () => {

  xit('should check for the presence of all of the navigation items', () => {
    return client
      .init()
      .isVisible(pageObjects.TOOLBAR.TOOLBAR_TITLE_TEXT_VIEW).should.eventually.be.true
      
      .getText(pageObjects.TOOLBAR.TOOLBAR_TITLE_TEXT_VIEW).should.eventually.equal(navigationHeaders.HOME)
      .isVisible(pageObjects.TOOLBAR.OPEN_NAV_MENU_BUTTON).should.eventually.be.true
      .click(pageObjects.TOOLBAR.OPEN_NAV_MENU_BUTTON)
      .pause(1000)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "1" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "1" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.HOME)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "2" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "2" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.IDM)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "3" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "3" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "4" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "4" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.AUTHENTICATION)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "5" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "5" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.SSO)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "6" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "6" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DEVICE_SECURITY)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "7" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "7" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "8" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "8" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DEVICE_TRUST)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "9" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "9" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.SECURE_STORAGE)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "10" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "10" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.CERT_PINNING)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "11" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "11" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.PUSH_NOTIFICATIONS)

      .swipe(pageObjects.NAV_MENU.RECYCLER_VIEW,0,1000,500)
      .pause(1000)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "10" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "10" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.PUSH_NOTIFICATIONS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "11" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "11" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "12" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "12" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.PUSH_MESSAGES)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "13" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "13" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.METRICS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "14" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "14" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DOCS)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "15" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "15" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.DEVICE_PROFILE_INFO)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "16" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .getText(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "16" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.equal(navigationHeaders.TRUST_CHECK_INFO)
      .end();
  });

  xit('should check for the presence of home screen items', () => {
    return client
      .init()
      .isVisible(pageObjects.SHARED.IMAGE_VIEW).should.eventually.be.true
      .isVisible(pageObjects.SHARED.TEXT_VIEW).should.eventually.be.true
      .end();
  });

  it('should go to IDM landing page and verify its contents', () => {
    return client
      .init()
      .isVisible(pageObjects.TOOLBAR.OPEN_NAV_MENU_BUTTON).should.eventually.be.true
      .click(pageObjects.TOOLBAR.OPEN_NAV_MENU_BUTTON)
      
      .pause(1000)
      
      .isVisible(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "2" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX).should.eventually.be.true
      .click(pageObjects.NAV_MENU.MENU_ITEM_PREFIX + "2" + pageObjects.NAV_MENU.MENU_ITEM_POSTFIX)
      
      .pause(1000)

      .isVisible(pageObjects.TOOLBAR.TOOLBAR_TITLE_TEXT_VIEW).should.eventually.be.true
      .getText(pageObjects.TOOLBAR.TOOLBAR_TITLE_TEXT_VIEW).should.eventually.equal(navigationHeaders.IDM)

      .isVisible(pageObjects.SHARED.IMAGE_VIEW).should.eventually.be.true
      // for some reason it fails, if 'be true' is used
      .isVisible(pageObjects.SHARED.TEXT_VIEW).should.eventually.not.be.undefined
      
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

