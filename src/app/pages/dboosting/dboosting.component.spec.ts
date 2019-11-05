import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboostingComponent } from './dboosting.component';

describe('DboostingComponent', () => {
  let component: DboostingComponent;
  let fixture: ComponentFixture<DboostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
