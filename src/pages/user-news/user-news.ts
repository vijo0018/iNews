import { MakePostPage } from './../make-post/make-post';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-user-news',
  templateUrl: 'user-news.html',
})
export class UserNewsPage {

  isAuth:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  
}

  ngOnInit() {
    
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        console.log(this.isAuth = true);
      }else{
        console.log(this.isAuth = false);
      }
    });

  }

  makeNewPost(){
    this.navCtrl.push(MakePostPage, {mode: 'New'});
  }

  ionViewDidLoad() {
    
  }

}
