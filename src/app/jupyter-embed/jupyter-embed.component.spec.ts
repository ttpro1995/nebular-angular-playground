import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JupyterEmbedComponent } from './jupyter-embed.component';

describe('JupyterEmbedComponent', () => {
  let component: JupyterEmbedComponent;
  let fixture: ComponentFixture<JupyterEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupyterEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JupyterEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
