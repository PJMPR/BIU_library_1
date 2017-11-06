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
  
  model = new BookModel(
  'https://i.imgur.com/bKmWKrZ.jpg',
  'Ruiny Gorlanu','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);

 // model2 = new BookService();
bookId:number;

  ngOnInit() {
    this.route.params.subscribe(
      param=>{
        console.log(param.bookid);
         this.bookId = param.bookid;
      })
  }

}
