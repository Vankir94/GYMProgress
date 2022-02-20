import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProgramComponent } from './name-program.component';

describe('NameProgramComponent', () => {
  let component: NameProgramComponent;
  let fixture: ComponentFixture<NameProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
