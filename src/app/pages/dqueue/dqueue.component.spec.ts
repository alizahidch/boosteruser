import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DqueueComponent } from './dqueue.component';

describe('DqueueComponent', () => {
  let component: DqueueComponent;
  let fixture: ComponentFixture<DqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
