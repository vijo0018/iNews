import { ReadUserNewsPage } from './../read-user-news/read-user-news';
import { MakePostPage } from './../make-post/make-post';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-user-news',
  templateUrl: 'user-news.html',
  
})
export class UserNewsPage {
  //createdAt:any = firebase.database.ServerValue.TIMESTAMP;
  
  key:string;
  isAuth:boolean = false;
  itemsRef:AngularFireList<any>;
  items:Observable<any[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase) {

      this.key = firebase.database().ref().push().key;
      
    this.itemsRef = afDb.list('AllUserPosts/');  //, ref => ref.orderByChild('createdAt')
    this.items = this.itemsRef.snapshotChanges().map(changes =>{
      return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
    });
    // console.log(this.items);
  
}

  ngOnInit() {
    
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
       this.isAuth = true;
      }else{
       this.isAuth = false;
      }
    });

  }

  makeNewPost(){
    this.navCtrl.push(MakePostPage, {mode: 'New', params: this.key});
  }
  ReadArticle(id:string){
    this.navCtrl.push(ReadUserNewsPage, {params: id});
  }

  ionViewDidLoad() {
    
  }

}
