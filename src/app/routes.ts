import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
