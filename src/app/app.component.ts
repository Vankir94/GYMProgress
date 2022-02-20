import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

const url = 'https://my-json-server.typicode.com/Vankir94/GYMProgress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'GYMProgress';

  constructor(
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
