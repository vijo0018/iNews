import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the FirebaseAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthProvider {

  constructor(public http: Http) {
  }

  register(email:string, password:string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  login(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout(){
    firebase.auth().signOut();
  }

}
