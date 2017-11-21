import { UserNewsPage } from './../user-news/user-news';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDb.list(`profile/${auth.uid}`).push(this.profile).then(()=> this.navCtrl.setRoot(UserNewsPage));
    });
  }

}
