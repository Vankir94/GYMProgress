import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {

  value1: any;
  valueIconLeft: any;
  selectedCities: string[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  goSave() {
    this.router.navigate(['/trainingDay']);
  }

  goBack() {
    this.router.navigate(['/trainingDay']);
  }

  createTheExercise() {
    this.router.navigate(['/createExercise']);
  }
}
