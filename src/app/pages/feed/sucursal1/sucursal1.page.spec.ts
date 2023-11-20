import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sucursal1Page } from './sucursal1.page';

describe('Sucursal1Page', () => {
  let component: Sucursal1Page;
  let fixture: ComponentFixture<Sucursal1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sucursal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
