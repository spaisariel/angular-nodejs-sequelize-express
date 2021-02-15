import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeriodoComponent } from './lista-periodo.component';

describe('ListaPeriodoComponent', () => {
  let component: ListaPeriodoComponent;
  let fixture: ComponentFixture<ListaPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
