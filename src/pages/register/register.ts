//import { ProfilePage } from './../profile/profile';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {NgForm} from  "@angular/forms";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl:AlertController,
    private fbAuth:FirebaseAuthProvider) {
  }
onRegister(form: NgForm){
  const loading = this.loadingCtrl.create({
    content:"Registering you!"
  });
  loading.present();
  this.fbAuth.register(form.value.email, form.value.password)
  .then(data =>{
    loading.dismiss();
  }).catch(error =>{
    loading.dismiss();
    const alert = this.alertCtrl.create({
      title:'Registration FAILED!',
      message: error.message,
      buttons: ['Ok']
    });
    alert.present();
    
  });
  //this.navCtrl.push(ProfilePage);
}

 

}
