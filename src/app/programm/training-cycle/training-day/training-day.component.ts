import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.scss']
})
export class TrainingDayComponent implements OnInit, OnDestroy {

  value5: string = this.localStorageService.takeData('value5');

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  goSave() {
    this.router.navigate(['/cycle']);
  }

  goBack() {
    this.router.navigate(['/cycle']);
  }

  addExercise() {
    this.router.navigate(['/addExercise']);
  }

  ngOnDestroy(): void {
    this.localStorageService.saveData('value5', this.value5);
  }
}
