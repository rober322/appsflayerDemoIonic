import { Component } from '@angular/core';
import {
  AppTrackingStatusResponse,
  AppTrackingTransparency,
} from 'capacitor-plugin-app-tracking-transparency';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {
    this.requestPermission();
  }

  public async requestPermission(): Promise<AppTrackingStatusResponse> {
    console.log('requestPermission');
    const response = await AppTrackingTransparency.requestPermission();
    // { status: 'authorized' } for example
    console.log('Permission: ', response);
    return response;
  }
}
