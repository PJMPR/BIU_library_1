import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

model2:BooklistComponent = new BooklistComponent();
bookId:number;

  ngOnInit() {
    this.route.params.subscribe(param=>console.log(param.bookid));
    this.route.params.subscribe(x => this.bookId = x.bookid);
  }

}
