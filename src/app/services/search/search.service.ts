import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=22489109b6a84f75b2f085db20b9bdef&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
