import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-start',
  templateUrl: './button-start.component.html',
  styleUrls: ['./button-start.component.scss']
})
export class ButtonStartComponent implements OnInit {


  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  goNext() {
    this.router.navigate(['/nameProgram']);
  }

}
