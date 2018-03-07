import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';
import { LoadingController } from 'ionic-angular';
import {Observable} from "rxjs/Rx";
import {AnonymousSubscription} from "rxjs/Subscription";
import { NewsDetailsPage } from "../news-details/news-details";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  id=''
  apiUrl = '';
  articles:any;
  loader:any;
  private timerSubscription: AnonymousSubscription;
  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public newsApi: NewsProvider,
  public loadingCtrl: LoadingController
  ) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.getNews();
  }

  getNews(){
    this.loader.present();
    this.id = this.navParams.get('id');
    if(!this.id) this.id='All'
    if(this.id=='All')
    {
      this.apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bb32ea223d4348e98756d03830738122`
    }
    else {
      this.apiUrl = `https://newsapi.org/v2/top-headlines?sources=${this.id}&apiKey=bb32ea223d4348e98756d03830738122`
    }
    this.newsApi.getArticles(this.apiUrl).then((res)=> {
      this.articles = res;
      this.loader.dismiss();
      //this.subscribeToData();
    })
  }

  private subscribeToData(): void {
    // this.timerSubscription = Observable.timer(60000).first().subscribe(() => this.refreshData());
}
// refreshData(){
//   console.log('calling this method after 5sec');
//   this.newsApi.getArticles(this.apiUrl).then((res)=> {
//       this.articles = res;
//       this.subscribeToData();
//     })
// }
  goToDetail(i){
    this.navCtrl.push(NewsDetailsPage,{'index': i})
  }
 

}
