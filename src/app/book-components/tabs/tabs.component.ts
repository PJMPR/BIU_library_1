import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() public bookid:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      param=>{
        console.log(param.bookid);
         this.bookid = param.bookid;
      })
  }

}
