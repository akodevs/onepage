import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://public-api.wordpress.com/rest/v1.1/sites/153868853/posts/');
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>('https://public-api.wordpress.com/rest/v1.1/sites/153868853/posts/' + id);
  }
}
