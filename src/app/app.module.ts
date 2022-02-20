import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyFilterModule } from 'primeng/keyfilter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProgrammModule } from './programm/programm.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    KeyFilterModule,
    BrowserAnimationsModule,
    ProgrammModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
