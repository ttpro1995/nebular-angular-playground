import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDatetimePickerComponent } from './ex-datetime-picker.component';

describe('ExDatetimePickerComponent', () => {
  let component: ExDatetimePickerComponent;
  let fixture: ComponentFixture<ExDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
