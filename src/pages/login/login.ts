import { NgForm } from '@angular/forms';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fbAuth:FirebaseAuthProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }
  onLogin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Logging you in'
    });
    loading.present();
    this.fbAuth.login(form.value.email, form.value.password)
    .then(data =>{
      loading.dismiss();
    }).catch(error =>{
      const alert = this.alertCtrl.create({
        title:'Loggin Failed :(',
        message: error.message,
        buttons: ['Ok']
    });
      alert.present();
    });
  }

  ionViewDidLoad() {
  }

}
