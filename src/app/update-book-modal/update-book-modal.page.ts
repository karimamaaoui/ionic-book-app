import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-update-book-modal',
  templateUrl: './update-book-modal.page.html',
  styleUrls: ['./update-book-modal.page.scss'],
  standalone:false,
})
export class UpdateBookModalPage implements OnInit {

  bookId: string = '';
  title: string = '';
  author: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // Retrieve query parameters
    this.route.queryParams.subscribe((params) => {
      this.bookId = params['id'];
      this.title = params['title'];
      this.author = params['author'];
    });
  }

  updateBook() {
    const updatedBook = { title: this.title, author: this.author };

    this.bookService.updateBook(this.bookId, updatedBook).subscribe({
      next: () => {
        console.log('Book updated successfully');
        this.router.navigate(['/dashborad']); 
      },
      error: (err) => {
        console.error('Error updating book:', err);
      },
    });
  }
}
