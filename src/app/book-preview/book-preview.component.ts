import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

model2:BooklistComponent = new BooklistComponent();
bookId:number;

  ngOnInit() {
    this.route.params.subscribe(param=>console.log(param.bookid));
    this.route.params.subscribe(x => this.bookId = x.bookid);
  }

}
