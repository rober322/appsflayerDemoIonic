import { Component } from '@angular/core';
import { AFEvent, AppsFlyer } from 'appsflyer-capacitor-plugin';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  tab1() {
    console.log('Tab 1');
    const data: AFEvent = {
      eventName: 'tab1',
      eventValue: {
        af_revenue: 700,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('logEvent res1: ', r.res))
      .catch((err) => console.log('logEvent err1: ', err));
  }

  tab2() {
    console.log('Tab 2');
    const data: AFEvent = {
      eventName: 'tab2',
      eventValue: {
        af_revenue: 800,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('logEvent res2: ', r.res))
      .catch((err) => console.log('logEvent err2: ', err));
  }

  tab3() {
    console.log('Tab 3');
    const data: AFEvent = {
      eventName: 'tab3',
      eventValue: {
        af_revenue: 900,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('logEvent res3: ', r.res))
      .catch((err) => console.log('logEvent err3: ', err));
  }
}
