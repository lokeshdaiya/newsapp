import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any ;
  pages:any[];
  sourcesApiUrl = 'https://newsapi.org/v2/sources?country=in&apiKey=bb32ea223d4348e98756d03830738122';
  constructor(platform: Platform, private http: HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      if(localStorage.getItem('showIntro') == 'false'){
        this.rootPage = NewsPage;
      }else {
        this.rootPage = HomePage;
      }

      this.http.get(this.sourcesApiUrl)
      .subscribe((result: any) => {
        this.pages= result.sources;
      })

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(NewsPage, {id:page.id});
  }
}
