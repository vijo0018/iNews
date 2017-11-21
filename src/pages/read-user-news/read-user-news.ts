import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the ReadUserNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-user-news',
  templateUrl: 'read-user-news.html',
})
export class ReadUserNewsPage {

  id:any;
  news:Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase) {
    this.id = navParams.get("params");
// console.log(this.id);

  const afObj = this.afDb.object('AllUserPosts/'+this.id);
  this.news = afObj.valueChanges();
  this.news.subscribe(a => {return a});
   
  }


}
