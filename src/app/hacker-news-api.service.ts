import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsAPIService {

  constructor(private http: HttpClient) {
  }

  getTop() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  getNews() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json');
  }

  getItem(id: string) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }

  getAsk() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/askstories.json');
  }

  getShow() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/showstories.json');
  }

  getUser(id: string) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  }

  getJobs() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
  }

}
