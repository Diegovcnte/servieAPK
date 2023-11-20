import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColisionesPage } from './colisiones.page';

describe('ColisionesPage', () => {
  let component: ColisionesPage;
  let fixture: ComponentFixture<ColisionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ColisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
