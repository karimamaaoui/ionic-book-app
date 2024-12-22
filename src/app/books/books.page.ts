import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
  standalone:false
})
export class BooksPage implements OnInit {

  constructor(private bookService: BookService,    private router: Router,  ) {}
  title: string = '';
  author: string = '';
  allBooks = [];

  ngOnInit() {
    this.loadBooks(); 
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (response) => {
        console.log(response);

        for (const key in response) {
          this.allBooks.push({
            id: key,
            ...response[key],
          });
        }
        console.log(this.allBooks);
      },
      error: (err) => {
        console.log(err);
      },
  });
}
addBook() {
  if (this.title && this.author) {
    const newBook = { title: this.title, author: this.author };
    this.bookService.addBook(newBook).subscribe({
      next: (response) => {
        this.allBooks.push({ id: response['name'], ...newBook });
        this.title = '';
        this.author = '';
      },
      error: (err) => {
        console.error('Error adding book:', err);
      }
    });
    
  }
}
deleteBook(bookId: string) {
  this.bookService.deleteBook(bookId).subscribe({
    next: () => {
      console.log('Book deleted successfully');
      this.allBooks = this.allBooks.filter(book => book.id !== bookId);
    },
    error: (err) => {
      console.error('Error deleting book:', err);
    }
  });
}

openUpdate(bookId: string) {
  const selectedBook = this.allBooks.find((book) => book.id === bookId);

  if (selectedBook) {
    this.router.navigate(['/update-book-modal'], { 
      queryParams: { 
        id: selectedBook.id, 
        title: selectedBook.title, 
        author: selectedBook.author 
      }
    });
  }
}



updateBook(updatedBook: any) {
  this.bookService.updateBook(updatedBook.id, updatedBook).subscribe({
    next: () => {
      const index = this.allBooks.findIndex((b) => b.id === updatedBook.id);
      if (index !== -1) {
        this.allBooks[index] = updatedBook;
      }
    },
    error: (err) => console.error('Error updating book:', err),
  });
}

}
