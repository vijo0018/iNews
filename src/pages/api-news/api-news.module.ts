import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiNewsPage } from './api-news';

@NgModule({
  declarations: [
    ApiNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiNewsPage),
  ],
})
export class ApiNewsPageModule {}
