import { Component, OnInit } from '@angular/core';
import { BooksService } from '../dashboard/services/books.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.page.html',
  styleUrls: ['./list-books.page.scss'],
  standalone:false
})
export class ListBooksPage implements OnInit {
  books: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  currentPage: number = 0;
  booksPerPage: number = 10;
  selectedTab: string = 'dashboard';  

  constructor(
    private booksService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchBooks();
  }



  fetchBooks() {
    this.isLoading = true;
    this.booksService.getBooks().subscribe({
      next: (response) => {
        this.books = response.docs || [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while fetching books.';
        this.isLoading = false;
        console.error(error);
      }
    });
  }

  getPaginatedBooks() {
    const startIndex = this.currentPage * this.booksPerPage;
    return this.books.slice(startIndex, startIndex + this.booksPerPage);
  }

  loadNextPage() {
    if ((this.currentPage + 1) * this.booksPerPage < this.books.length) {
      this.currentPage++;
    }
  }


}
