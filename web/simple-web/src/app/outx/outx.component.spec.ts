import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutxComponent } from './outx.component';

describe('OutxComponent', () => {
  let component: OutxComponent;
  let fixture: ComponentFixture<OutxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
