import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CatService {
  private http = inject(HttpClient);
  
  getCat() {
    return this.http.get<any>('https://api.thecatapi.com/v1/images/search');
  }
}