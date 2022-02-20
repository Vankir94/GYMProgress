import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  date: Date;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goNext() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/cycle']);
  }

}
