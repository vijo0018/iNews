import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadUserNewsPage } from './read-user-news';

@NgModule({
  declarations: [
    ReadUserNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadUserNewsPage),
  ],
})
export class ReadUserNewsPageModule {}
