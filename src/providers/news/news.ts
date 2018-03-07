import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  articles:any;
  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getArticles(url){
    let promise = new Promise((resolve, reject) => {
  
    this.http.get(url)
      .subscribe(
        (res: any) => { // Success
          this.articles =  res.articles;
          resolve(this.articles);
        }
      );
  });
  return promise;
  }

}
