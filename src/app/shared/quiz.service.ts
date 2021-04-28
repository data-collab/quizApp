import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  urlApi = 'https://opentdb.com/api.php?amount=10';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  // insertOptions(category: string, difficulty: string){
  //   let body = {
  //     Category: category;
  //     Difficulty: difficulty;
  //   }
  //   return this.http.post
  // }
  // tslint:disable-next-line:typedef
  getPosts(){
    return this.http.get(this.url);
  }
}
