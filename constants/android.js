const pageObjects = {
  "TOOLBAR": {
    "OPEN_NAV_MENU_BUTTON": "~Open navigation drawer",
    "TOOLBAR_TITLE_TEXT_VIEW": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView"
  },
  "NAV_MENU": {
    "RECYCLER_VIEW": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView",
    "MENU_ITEM_PREFIX": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.support.v7.widget.LinearLayoutCompat[",
    "MENU_ITEM_POSTFIX": "]/android.widget.CheckedTextView"
  },
  "HOME_SCREEN": {
    "IMAGE_VIEW": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView",
    "TEXT_VIEW": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView"
  },
  "AUTHENTICATE_SCREEN": {
    "AUTHENTICATE_BUTTON": "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button"
  },
  "KEYCLOAK_LOGIN_SCREEN": {
    "USERNAME_TEXT_AREA": '//android.webkit.WebView[@content-desc="Log in to secure-app"]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText',
    "PASSWORD_TEXT_AREA": '//android.webkit.WebView[@content-desc="Log in to secure-app"]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[4]/android.widget.EditText',
    "LOGIN_BUTTON": "~Log in"
  },
  "LOGGED_IN_SCREEN": {
    "LOGOUT_BUTTON": '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.Button'
  }
}

const appiumSettings = {
  "ANDROID_DETAILS": {
    "PLATFORM_VERSION": "8.1",
    "DEVICE_NAME": "Android Emulator"
  },
  "APPIUM_DETAILS": {
    "PORT": 4723,
    "LOG_LEVEL": "verbose"
  }
}

module.exports.pageObjects = pageObjects;
module.exports.appiumSettings = appiumSettings;