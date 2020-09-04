import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuPageComponent } from './neu-page.component';

describe('NeuPageComponent', () => {
  let component: NeuPageComponent;
  let fixture: ComponentFixture<NeuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
