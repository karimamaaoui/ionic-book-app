import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get('https://ionicproject-daafe-default-rtdb.firebaseio.com/Books.json');
  }

  addBook(newBook) {
    return this.http.post(
      'https://ionicproject-daafe-default-rtdb.firebaseio.com/Books.json',
      newBook
    );
  }

  deleteBook(BookId) {
    return this.http.delete(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Books/${BookId}.json`
    );
  }

  getBookById(id) {
    return this.http.get(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Books/${id}.json`
    );
  }

  updateBook(bookId: string, book: any) {
    return this.http.patch(
      `https://ionicproject-daafe-default-rtdb.firebaseio.com/Books/${bookId}.json`,
      book
    );
  }
  
}