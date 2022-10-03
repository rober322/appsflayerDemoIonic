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
    console.log('ROBER Tab 1');
    const data: AFEvent = {
      eventName: 'tab1',
      eventValue: {
        af_revenue: 700,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('ROBER logEvent res1: ', r.res))
      .catch((err) => console.log('ROBER logEvent err1: ', err));
  }

  tab2() {
    console.log('ROBER Tab 2');
    const data: AFEvent = {
      eventName: 'tab2',
      eventValue: {
        af_revenue: 800,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('ROBER logEvent res2: ', r.res))
      .catch((err) => console.log('ROBER logEvent err2: ', err));
  }

  tab3() {
    console.log('ROBER Tab 3');
    const data: AFEvent = {
      eventName: 'tab3',
      eventValue: {
        af_revenue: 900,
        af_receipt_id: 'id536',
        af_currency: 'USD',
      },
    };

    AppsFlyer.logEvent(data)
      .then((r) => console.log('ROBER logEvent res3: ', r.res))
      .catch((err) => console.log('ROBER logEvent err3: ', err));
  }
}
