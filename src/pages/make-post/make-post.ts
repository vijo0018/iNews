import { MyNewsPage } from './../my-news/my-news';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';



/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-post',
  templateUrl: 'make-post.html',
})
export class MakePostPage {
  title:string;
  urlToImg:any;
  categories=[];
  description:string;
  story:string;
  createdAt:any = firebase.database.ServerValue.TIMESTAMP;
  
  Item = {};
  mode = 'New';
  categoryOptions = ['World', 'Fun', 'Games', 'Sports', 'Politics', 'Weather', 'Breaking', 'Technology', 'Traffic'];

  afList: AngularFireList<{}>
  news:Observable<{}>;

  isTrue: boolean;

  itemsRef:AngularFireList<any>;
  items:Observable<any[]>
  itemsnoId:Observable<any[]>

  test:Observable<any[]>
  itemsRefnoId:AngularFireList<any>;
  
  key:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private afDb: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {    
    const id = this.fireAuth.auth.currentUser.uid;    
    this.key = navParams.get("params");

    this.itemsRef = afDb.list('UserNews/'+id);
    this.itemsRefnoId = afDb.list('AllUserPosts/');

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
    });
    this.itemsnoId = this.itemsRefnoId.snapshotChanges().map(changes =>{
      return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
    }); 
     }
 

    addPost(form:NgForm) {
    console.log(this.categories)
    let userInfo = {createdAt: this.createdAt, 
      title:this.title,
      categories: this.categories,
      urlToImg: this.urlToImg,
      description: this.description,
      story:this.story};
      let key = this.key;
    this.itemsRefnoId.set(key, userInfo);
                    
    this.itemsRef.set(key, userInfo);
    
    this.key = firebase.database().ref().push().key;

    form.resetForm();

    }
    viewArticle(id:string){    
      console.log(id) 
      this.navCtrl.push(MyNewsPage,{passCollection: this.items, params:id, itemsRef: this.itemsRef});
  
    }
    deleteItem(key: string) {  
      console.log(key);  
      // console.log(key);
      this.itemsRef.remove(key); 
      this.itemsRefnoId.remove(key); 
      
    }

    // updateItem(key: string) {  
    //   console.log(key);  
    //   let newInput = {createdAt: this.createdAt, 
    //     title:this.title,
    //     categories: this.categories,
    //     urlToImg: this.urlToImg,
    //     description: this.description,
    //     story:this.story};
    //   this.itemsRef.update(key, { text: newInput }); 
    //   this.itemsRefnoId.update(key, { text: newInput }); 
      
    // }


    ngOnInit() {
    }
    
    // changeState(){
    //   console.log(this.isTrue);
    //   this.isTrue = false;
    //   if(this.isTrue == false){
    //     this.isTrue = true;
    //   }else if(this.isTrue == true){
    //     this.isTrue = false;
    //   }
    // }

  }