import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { Book } from '../model/Book';
import { ResponseVO } from '../model/ResponseVO';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  bookDetails : Book[] = [];
  responseDetails = new ResponseVO("");
  resultTobeShown = false;
  bookModel = new Book(0,"","",0,"","");
  bookIdTobeDeleted = 0;
  
  constructor(private router:Router,
    private bookService : BooksService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks() {
    this.bookService.retrieveBooks().subscribe(
      response => {
        this.bookDetails=response;
      }, error => {
        console.log(error);
      });
  }

  handleEditing(editedbook : string){
    console.log(editedbook);
  }

  handleAddition(){
    
    this.bookService.addBooks(this.bookModel).subscribe(
      response => {
        this.responseDetails=response;
        this.retrieveBooks()
      }, error => {
        console.log(error);
      });

  }

  handleDeleting(bookid : number){
    this.bookService.deleteBooks(bookid).subscribe(
      response => {
        this.responseDetails=response;
        this.retrieveBooks()
      }, error => {
        console.log(error);
      });

  }

  handleNewBook(){
    this.resultTobeShown = true;
  }

}
