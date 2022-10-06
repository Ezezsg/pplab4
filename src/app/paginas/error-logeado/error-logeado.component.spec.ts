import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogeadoComponent } from './error-logeado.component';

describe('ErrorLogeadoComponent', () => {
  let component: ErrorLogeadoComponent;
  let fixture: ComponentFixture<ErrorLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLogeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
