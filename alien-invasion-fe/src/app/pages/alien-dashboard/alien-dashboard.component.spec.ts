import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienDashboardComponent } from './alien-dashboard.component';

describe('AlienDashboardComponent', () => {
  let component: AlienDashboardComponent;
  let fixture: ComponentFixture<AlienDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
