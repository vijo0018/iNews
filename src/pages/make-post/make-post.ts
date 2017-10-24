
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import firebase from 'firebase';


/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Item{
  title:string;
  // img:string;
  // subTitle:string;
  // category:string[];
  // Content:string;
  // currentUser:any;
}

@IonicPage()
@Component({
  selector: 'page-make-post',
  templateUrl: 'make-post.html',
})
export class MakePostPage {
  
  mode = 'New';
  categoryOptions = ['World', 'Fun', 'Games', 'Sports', 'Politics', 'Weather', 'Breaking', 'Technology', 'Traffic']

  private newsCollection: AngularFireList<Item>;
  news:Observable<Item[]>;
  currentUser:any = firebase.auth().currentUser.uid;
  createdAt:any = firebase.database.ServerValue.TIMESTAMP;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private afDb: AngularFireDatabase,
  ) {
    //  this.currentUser = fireAuth.auth.currentUser.uid;
    this.newsCollection = afDb.list<Item>('userNews'); 
    var news = this.newsCollection.valueChanges().map(news => {
          console.log(news);
          return news;
        })
        this.news = news;
    }
    addPost(title: string) {
     this.newsCollection.push({title});
     
    }
    ngOnInit() {
    }

  }