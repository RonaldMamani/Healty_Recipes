import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl= `https://api.spoonacular.com/recipes/random?apiKey=22489109b6a84f75b2f085db20b9bdef&number=${take}`

    return this.http.get(apiUrl)
  }
}
