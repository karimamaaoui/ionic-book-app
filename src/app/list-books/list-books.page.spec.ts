import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBooksPage } from './list-books.page';

describe('ListBooksPage', () => {
  let component: ListBooksPage;
  let fixture: ComponentFixture<ListBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
