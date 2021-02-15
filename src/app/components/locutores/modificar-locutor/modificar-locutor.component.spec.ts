import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLocutorComponent } from './modificar-locutor.component';

describe('ModificarLocutorComponent', () => {
  let component: ModificarLocutorComponent;
  let fixture: ComponentFixture<ModificarLocutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLocutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLocutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
