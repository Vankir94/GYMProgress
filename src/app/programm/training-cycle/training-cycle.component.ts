import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-training-cycle',
  templateUrl: './training-cycle.component.html',
  styleUrls: ['./training-cycle.component.scss']
})
export class TrainingCycleComponent implements OnInit, OnDestroy {

  value3: string = this.localStorageService.takeData('value3');
  value4: string = this.localStorageService.takeData('value4');

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  goNext() {
    this.router.navigate(['/calendar']);
  }

  goBack() {
    this.router.navigate(['/nameProgram']);
  }

  createDay() {
    this.router.navigate(['/trainingDay']);
  }

  ngOnDestroy(): void {
    this.localStorageService.saveData('value4', this.value4);
    this.localStorageService.saveData('value3', this.value3);
  }
}
