import { Component } from '@angular/core';
import {
  AppTrackingStatusResponse,
  AppTrackingTransparency,
} from 'capacitor-plugin-app-tracking-transparency';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {
    this.getStatus();
  }

  public async getStatus(): Promise<AppTrackingStatusResponse> {
    console.log('requestPermission');
    const response = await AppTrackingTransparency.getStatus();
    console.log(response);
    // { status: 'authorized' } for example (denied, notDetermined, restricted)
    console.log('Status: ', response);
    return response;
  }
}
