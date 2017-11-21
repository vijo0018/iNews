import { NewsServiceProvider } from './../../providers/news-service/news-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ApiNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api-news',
  templateUrl: 'api-news.html',
})
export class ApiNewsPage {
  
  news:any;
  sortBy:any;
  source:string;
  
  status:any;

  error:any;
  message:any;

  sourceArray:any;

  tempOne:any;
  tempTwo:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newsService:NewsServiceProvider,
    private inAppBrowser:InAppBrowser) {
    }
    
    openWebPage(url:string){
      const options: InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
      }

      this.inAppBrowser.create(url, '_self', options);

    }
    
    
  ngOnInit(){
   this.sortBy = 'Top';
   this.getSources();      
  
  }
  
  getNews(){
    this.news = null;
      this.newsService.getNews(this.source, this.sortBy).subscribe(data => {
      this.status = data.status;
      this.news = data.articles;
  
      }, onerror =>  this.error = this.message = "The news source you've selected (" + this.source + ") isn't availabe sorted by "+this.sortBy); //onerror._body ger en string?
    }
    getSources(){
      this.newsService.getSource().subscribe(data => {
      this.sourceArray = data.sources;  
      this.fillArrays();
      });
      
    }
    
    fillArrays(){
    this.tempOne = null;
    this.tempTwo = null;
       for(let item of this.sourceArray){
         if(item.id == this.source){
           this.tempOne = item.sortBysAvailable[0];
           item.sortBysAvailable.length
           if(item.sortBysAvailable.length == 1){
            this.tempOne = item.sortBysAvailable[0];

           }else if(item.sortBysAvailable.length == 2){
            this.tempOne = item.sortBysAvailable[0];
           this.tempTwo = item.sortBysAvailable[1];
           }
           
           
         }
        
       }
       
      }

     }
  

