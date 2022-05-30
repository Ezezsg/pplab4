import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaABMComponent } from './pizza-abm.component';

describe('PizzaABMComponent', () => {
  let component: PizzaABMComponent;
  let fixture: ComponentFixture<PizzaABMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaABMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
