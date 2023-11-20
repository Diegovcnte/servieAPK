import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sucursal2Page } from './sucursal2.page';

describe('Sucursal2Page', () => {
  let component: Sucursal2Page;
  let fixture: ComponentFixture<Sucursal2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sucursal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
