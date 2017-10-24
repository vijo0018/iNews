import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserNewsPage } from './user-news';

@NgModule({
  declarations: [
    UserNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserNewsPage),
  ],
})
export class UserNewsPageModule {}
