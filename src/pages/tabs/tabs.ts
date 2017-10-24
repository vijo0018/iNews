import { Component } from '@angular/core';

import { UserNewsPage } from '../user-news/user-news';
import { ApiNewsPage } from '../api-news/api-news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserNewsPage;
  tab2Root = ApiNewsPage;

  constructor() {

  }
}
