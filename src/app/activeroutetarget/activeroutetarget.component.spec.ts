import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveroutetargetComponent } from './activeroutetarget.component';

describe('ActiveroutetargetComponent', () => {
  let component: ActiveroutetargetComponent;
  let fixture: ComponentFixture<ActiveroutetargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveroutetargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveroutetargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
