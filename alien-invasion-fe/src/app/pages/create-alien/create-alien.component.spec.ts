import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlienComponent } from './create-alien.component';

describe('CreateAlienComponent', () => {
  let component: CreateAlienComponent;
  let fixture: ComponentFixture<CreateAlienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
