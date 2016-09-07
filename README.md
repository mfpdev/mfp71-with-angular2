# Running MobileFirst Platform Foundation 7.1 Cordova app with Angular 2

## Prerequisites

* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Install NodeJS / npm](https://docs.npmjs.com/getting-started/installing-node)
* [Install Gulp](http://gulpjs.com/)
* [Install MobileFirst Platform Foundation 7.1 Server](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/7.1/advanced-client-side-development/using-cli-to-create-build-and-manage-mobilefirst-project-artifacts/)

## Running the sample

- Clone this repository   

 ```bash
 $ git clone https://github.com/mfpdev/mfp71-with-angular2.git
 ```
- Deploy the MFRSSAdapter

  - Copy the [MFRSSAdapter](https://github.com/mfpdev/mfp71-with-angular2/tree/master/MFRSSAdapter) Copy the MFRSSAdapter folder to the `adapters` folder on your MFP 7.1 server.

  - Build and deploy the adapter:
    - From the terminal window, navigate into the adapter folder and run the following:

    ```bash
    $ mfp push
    ```

- Install and run the Sample app
  - From the terminal window, navigate into [BlogApp](https://github.com/mfpdev/mfp71-with-angular2/tree/master/BlogApp) and run:

  ```bash
  $ npm install
  ```

  - [Transpile](https://www.wikiwand.com/en/Source-to-source_compiler) the TypeScript code in the [app](https://github.com/mfpdev/mfp71-with-angular2/tree/master/BlogApp/app) folder with [gulp](http://gulpjs.com/) commands:

    - Run `build` to transpile the [TypeScript](https://www.typescriptlang.org/) code once

    ```bash
    $ gulp build
    ```
    - Or run `watch` to let `gulp` transpile the TypeScript code on every time you change something in the [app](https://github.com/mfpdev/mfp71-with-angular2/tree/master/BlogApp) folder.

    ```bash
    $ gulp watch
    ```

  - Add your platform (ios/android):

    ```bash
    $ mfp cordova platform add ios
    ```

  - Add the cordova-plugin-mfp plugin  :

    ```bash
    $ mfp cordova plugin add cordova-plugin-mfp
    ```

  - Deploy the application:

    ```bash
    $ mfp push
    ```
  - Preview the application:

    ```bash
    $ mfp cordova preview
    ```

  - Run the application:

    ```bash
    $ mfp cordova emulate
    ```

  *Caution: Always run Cordova commands using the mfp CLI (e.g mfp cordova emulate). Running Cordova directly will cause the app to stop working since MFP 7.1 does not work with Cordova version beyond 3.7*

  ### Supported Levels
  IBM MobileFirst Platform Foundation 7.1

  ### License
  Copyright 2016 IBM Corp.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
