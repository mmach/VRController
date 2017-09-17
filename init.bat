mkdir android/app/src/main/assets ;
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
C:\Users\michal.wach\AppData\Local\Android\sdk\platform-tools\adb  logcat *:S ReactNative:V ReactNativeJS:V