import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPeriodoComponent } from './modificar-periodo.component';

describe('ModificarPeriodoComponent', () => {
  let component: ModificarPeriodoComponent;
  let fixture: ComponentFixture<ModificarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
