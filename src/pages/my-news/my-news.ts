import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';



/**
 * Generated class for the MyNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-news',
  templateUrl: 'my-news.html',
})
export class MyNewsPage {


  id:any;

  itemsRef:AngularFireList<any>;
  items:Observable<any[]>
  // item:Observable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDb: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {
    this.id = navParams.get("params");
    const id = this.fireAuth.auth.currentUser.uid;    
   
    
    // console.log(this.id);
    const afObj = afDb.object('UserNews/'+id+'/'+this.id);
    this.items = afObj.valueChanges();
    this.items.subscribe(a => {return a});
//     console.log(this.itemsRef);

  }
  // updateItem(key: string, newText: string) {
  //   this.itemsRef.update(key, { text: newText });
  // }
  // deleteItem() {  
  //   console.log(this.id);  
  //   this.itemsRef.remove(this.id); 
  // }
  deleteEverything() {
    this.itemsRef.remove();
  
  } 

}
