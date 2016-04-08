# React Universal Chat
> 100% shared code between web, iOS, and Android

## Getting Started
* Clone the repo: `git clone https://github.com/gnestor/react-universal-chat`
* Install dependencies: `cd react-universal-chat && npm install`
* Set up iOS environment:
    * Install Xcode 7 from the App Store
* Set up Android environment:
    * Guide: [https://facebook.github.io/react-native/docs/android-setup.html](https://facebook.github.io/react-native/docs/android-setup.html)
    * Instructions for Mac:
        * Install Android JDK: [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
        * Install Android SDK: `brew install android-sdk`
            * Requires [Homebrew](http://brew.sh/)
        * Add ANDROID_HOME environment variable: `export ANDROID_HOME=/usr/local/opt/android-sdk`
        * Install Android environment dependencies:
            * `android`
            * Check the following:
                * Android SDK Build-tools version 23.0.1
                * Android 6.0 (API 23)
                * Local Maven repository for Support Libraries (this is called Android Support Repository in older versions)
            * Install
            * Install Intel HAXM: `open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_6.0.1.dmg`
        * Create an Android Virtual Device:
            * `android avd`
            * Create
                * Nexus 5
                * Google APIs
                * X86
                * 2048MB RAM
            * Start
* Run on iOS: `npm run ios`
* Run on Android:
    * Open Android AVD Manager: `android avd`
    * Start
    * `npm run android`
