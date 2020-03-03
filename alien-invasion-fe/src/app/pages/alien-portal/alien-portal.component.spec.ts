import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienPortalComponent } from './alien-portal.component';

describe('AlienPortalComponent', () => {
  let component: AlienPortalComponent;
  let fixture: ComponentFixture<AlienPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
