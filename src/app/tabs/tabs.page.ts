import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  tab1() {
    console.log('Tab 1');
  }

  tab2() {
    console.log('Tab 2');
  }

  tab3() {
    console.log('Tab 3');
  }
}
