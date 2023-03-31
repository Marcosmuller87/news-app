import { NewsService } from './services/news.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  newsList: any[] = [];
  loading: boolean = false;

  constructor(private _newsService: NewsService) { }

  searchNews(parameters: any) {
    this.loading = true;
    this.newsList = [];
    this._newsService.getNews(parameters).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.newsList = data.articles;
      },
      error: (error: any) => {
        console.log(error);
        this.loading = false;
      }
    });
  }
}
