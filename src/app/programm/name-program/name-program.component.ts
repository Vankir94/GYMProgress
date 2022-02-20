import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-name-program',
  templateUrl: './name-program.component.html',
  styleUrls: ['./name-program.component.scss']
})
export class NameProgramComponent implements OnInit, OnDestroy {
  value1: string = this.localStorageService.takeData('value1');
  value2: string = this.localStorageService.takeData('value2');

  title: string = 'Название программы';
  numberDays: string = 'Продолжительность (дни)';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  goNext() {
    this.router.navigate(['/cycle']);
  }

  goValue(value) {
    // console.log(value.target.value);
  }

  ngOnDestroy(): void {
    this.localStorageService.saveData('value1', this.value1);
    this.localStorageService.saveData('value2', this.value2);
  }
}
