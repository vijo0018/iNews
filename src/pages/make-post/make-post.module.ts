import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakePostPage } from './make-post';

@NgModule({
  declarations: [
    MakePostPage,
  ],
  imports: [
    IonicPageModule.forChild(MakePostPage),
  ],
})
export class MakePostPageModule {}
