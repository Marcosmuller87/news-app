import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parameters.country+'&category='+parameters.category+'&apiKey=5b367fed00704af4808bd36d8478541d';
    return this.http.get(URL);
  }
}
