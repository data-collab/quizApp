import { Component, OnInit } from '@angular/core';
import {QuizService} from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  data: any;

  constructor(private quizData: QuizService) {
    this.data = new Array<any>();
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.quizData.getPosts()
      .subscribe(
        (result) => {
          console.log('results', result);
          this.data = result;
        }
      );
  }

}
