# appium-aerogear-android-native

  ### To Run the tests

  1. start an Android emulator
  2. edit `/data/config.json` to include a valid username and password
  3. edit the same file to include vaild details for the android
   emulator 

  Then run the following comands:

  ```
    npm start-appium server
    npm test
  ```

  ### To change the Log Level

  Edit `/data/config.json` and in the `APPIUM_DETAILS` section change
  the value from `error` to `verbose` to see aditional logging for each
  test interaction. 
