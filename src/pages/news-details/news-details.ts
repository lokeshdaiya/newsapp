import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
article:any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
    public newsApi: NewsProvider) {
    let index= this.navParams.get('index');
    this.article = this.newsApi.articles[index];
   }

}
