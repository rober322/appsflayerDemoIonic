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
        appID: 'id1585857307', // replace with your app ID.
        devKey: 'ufkKv2yxxFrdXHxGMnHDQR', // replace with your dev key.
        isDebug: false,
        waitForATTUserAuthorization: 10, // for iOS 14 and higher
        minTimeBetweenSessions: 6, // default 5 sec
        registerOnDeepLink: true,
        registerConversionListener: true,
        registerOnAppOpenAttribution: false,
        deepLinkTimeout: 4000, // default 3000 ms
        useReceiptValidationSandbox: true, // iOS only
        useUninstallSandbox: true, // iOS only
      };

      AppsFlyer.initSDK(afConfig)
        .then((res) => console.log('ROBER initSDK res: ', res))
        .catch((error) => console.log('ROBER initSDK error: ', error));
    });
  }
}
