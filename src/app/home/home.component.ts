import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categorySelect = '';
  difficultySelect = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onBtnSubmit(category: string, difficulty: string){
    console.log(category, difficulty);
    this.router.navigate(['/quiz']);
  }

}
