import { MyProfilePage } from './../pages/my-profile/my-profile';
import { FirebaseAuthProvider } from './../providers/firebase-auth/firebase-auth';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { UserNewsPage } from './../pages/user-news/user-news';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { MenuController, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  registerPage:any = RegisterPage;
  loginPage:any = LoginPage;
  userNews:any = UserNewsPage;
  activePage:any;
  //tabsPage:any = TabsPage;

  isAuth = false;
  pages:Array<{title: string, component:any, icon:string}>;  

  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService:FirebaseAuthProvider) 
    {
      firebase.initializeApp({
        apiKey: "AIzaSyCKsrEShe7BPd6Rh-bapQCEtThb4MNc8Q4",
        authDomain: "inews-d1ef6.firebaseapp.com",
        databaseURL: "https://inews-d1ef6.firebaseio.com",
        storageBucket: "inews-d1ef6.appspot.com",
        messagingSenderId: "869919036997"
      });
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

ngOnInit() {
  
  this.pages = [
    {title: "Home", component: this.rootPage, icon:"home"},
    {title: 'My Profile', component: MyProfilePage, icon:"md-person"},
  

  ];
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      this.isAuth = true;
      this.nav.setRoot(this.rootPage);
    }else{
      this.isAuth = false;
      this.nav.setRoot(this.rootPage);
    }
  });
  }
  onLoadPage(paged: any){
    this.nav.setRoot(paged);
    this.activePage = paged;
    this.menuCtrl.close();
  }
  onLogout(){
    this.authService.logout();
   this.isAuth = false;
    this.nav.setRoot(this.rootPage);
    this.menuCtrl.close();
 }
 onLoad(page: any){
  this.nav.setRoot(page.component);
  this.activePage = page;
  this.menuCtrl.close();
}
checkActive(page){
  return page == this.activePage;
}
}