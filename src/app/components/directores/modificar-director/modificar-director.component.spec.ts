import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDirectorComponent } from './modificar-director.component';

describe('ModificarDirectorComponent', () => {
  let component: ModificarDirectorComponent;
  let fixture: ComponentFixture<ModificarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
