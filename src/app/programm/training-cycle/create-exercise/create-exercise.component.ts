import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.scss']
})
export class CreateExerciseComponent implements OnInit {

  valueIconLeft: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goSave() {
    this.router.navigate(['/addExercise']);
  }

  goBack() {
    this.router.navigate(['/addExercise']);
  }
}
