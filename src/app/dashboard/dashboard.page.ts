import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ListBooksPage } from '../list-books/list-books.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  books: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  currentPage: number = 0;
  booksPerPage: number = 10;
  selectedTab: string = 'list-books';  
  currentUserEmail: string = '';
  constructor(
    private booksService: BooksService,
    private router: Router,
      private authService:AuthService
  ) {}

  ngOnInit() {
    this.fetchBooks();
    
    // Subscribe to router events to update selectedTab
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSelectedTab();
    });
    
    // Initial update of selectedTab based on current route
    this.updateSelectedTab();
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.email) {
      this.currentUserEmail = currentUser.email;
    }
  }

  updateSelectedTab() {
    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    
    if (lastSegment === 'books') {
      this.selectedTab = 'books';
    } else if (lastSegment === 'profile') {
      this.selectedTab = 'profile';
    } else {
      this.selectedTab = 'list-books';
    }
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
  onTabChange() {
    // This method is called when the tab changes
    console.log('Selected tab:', this.selectedTab);
  }
}
