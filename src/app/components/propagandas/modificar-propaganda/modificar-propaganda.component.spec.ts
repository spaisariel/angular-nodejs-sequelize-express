import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPropagandaComponent } from './modificar-propaganda.component';

describe('ModificarPropagandaComponent', () => {
  let component: ModificarPropagandaComponent;
  let fixture: ComponentFixture<ModificarPropagandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPropagandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
