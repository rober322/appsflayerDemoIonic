import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AFInit, AppsFlyer } from 'appsflyer-capacitor-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      const afConfig: AFInit = {
        appID: 'appID', // replace with your app ID.
        devKey: 'devKey', // replace with your dev key.
        isDebug: false,
        waitForATTUserAuthorization: 10, // for iOS 14 and higher
        registerOnDeepLink: true,
        registerConversionListener: true,
        useReceiptValidationSandbox: true, // iOS only
        useUninstallSandbox: true, // iOS only
      };

      AppsFlyer.initSDK(afConfig)
        .then((res) => console.log('initSDK res: ', res))
        .catch((error) => console.log('initSDK error: ', error));
    });
  }
}
