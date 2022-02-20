import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import {CheckboxModule} from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';



import { ButtonStartComponent } from './button-start/button-start.component';
import { NameProgramComponent } from './name-program/name-program.component';
import { TrainingCycleComponent } from './training-cycle/training-cycle.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { TrainingDayComponent } from './training-cycle/training-day/training-day.component';
import { AddExerciseComponent } from './training-cycle/add-exercise/add-exercise.component';
import { CreateExerciseComponent } from './training-cycle/create-exercise/create-exercise.component';
import { LocalStorageService } from './local-storage.service';



const appRoutes: Routes = [
  { path: '', component: ButtonStartComponent },
  { path: 'nameProgram', component: NameProgramComponent },
  { path: 'cycle', component: TrainingCycleComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'trainingDay', component: TrainingDayComponent },
  { path: 'addExercise', component: AddExerciseComponent },
  { path: 'createExercise', component: CreateExerciseComponent },
];

@NgModule({
  declarations: [
    ButtonStartComponent,
    NameProgramComponent,
    TrainingCycleComponent,
    CalendarComponent,
    TrainingDayComponent,
    AddExerciseComponent,
    CreateExerciseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    CalendarModule,
    CheckboxModule,
    TagModule
  ],
  providers: [
    LocalStorageService
  ]
})
export class ProgrammModule { }
