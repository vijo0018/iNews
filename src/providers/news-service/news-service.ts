import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello NewsServiceProvider Provider');
  }
  apikey = "98d2c3b66b9b4954b33a2e41eb434ecf";
  random:any = Math.floor(Math.random()* 100 + 1)
  randomReq:any = "#"+this.random;
  
  getNews(source:string, sortBy:string) {
    return this.http.get('https://newsapi.org/v1/articles?source='+ source +'&sortBy='+ sortBy +'&apiKey='+this.apikey+this.randomReq)
      .map(res => res.json());
  }
  getSource(){
    return this.http.get('https://newsapi.org/v1/sources?language=en'+this.randomReq).map(res => res.json());
  }

}
