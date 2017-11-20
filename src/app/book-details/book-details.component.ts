import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  

  bookList = new BookService().model;
  model: BookModel;
  bookId:number;

  ngOnInit() {
    this.route.params.subscribe(
      param=>{
        console.log(param.bookid);
         this.bookId = param.bookid;
        this.model = this.bookList.find(x=> x.id == this.bookId);
      })
  }

}
