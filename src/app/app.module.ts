import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { MakePostPage } from './../pages/make-post/make-post';
import { UserNewsPage } from '../pages/user-news/user-news';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LoginPage } from '../pages/login/login';
import { ApiNewsPage } from '../pages/api-news/api-news';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewsServiceProvider } from '../providers/news-service/news-service';
import { FirebaseAuthProvider } from '../providers/firebase-auth/firebase-auth';

import {HttpModule} from "@angular/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {InAppBrowser} from '@ionic-native/in-app-browser';

export const firebaseConfig = {
  apiKey: "AIzaSyCKsrEShe7BPd6Rh-bapQCEtThb4MNc8Q4",
  authDomain: "inews-d1ef6.firebaseapp.com",
  databaseURL: "https://inews-d1ef6.firebaseio.com",
  projectId: "inews-d1ef6",
  storageBucket: "inews-d1ef6.appspot.com",
  messagingSenderId: "869919036997"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,

    UserNewsPage,
    MyProfilePage,
    LoginPage,
    ApiNewsPage,
    RegisterPage,
    MakePostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),

    IonicModule.forRoot(MyApp, {tabsHideOnSubPages:false, swipeBackEnable:true, modalEnter:'modal-slide-in', modalLeave:'modal-slide-out'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    UserNewsPage,
    MyProfilePage,
    LoginPage,
    ApiNewsPage,
    RegisterPage,
    MakePostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NewsServiceProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseAuthProvider,
    InAppBrowser
    
  ]
})
export class AppModule {}
