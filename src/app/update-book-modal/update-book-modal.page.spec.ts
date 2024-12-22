import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBookModalPage } from './update-book-modal.page';

describe('UpdateBookModalPage', () => {
  let component: UpdateBookModalPage;
  let fixture: ComponentFixture<UpdateBookModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
