import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificacionesPage } from './modificaciones.page';

describe('ModificacionesPage', () => {
  let component: ModificacionesPage;
  let fixture: ComponentFixture<ModificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
