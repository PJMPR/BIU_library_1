import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public title : string;
  public author : string;
  public isbn : string;
  public publisher : string;
  public quantity : string;
  public tableOfContents : string[] = [];
  public description : string;
  public tags : string;

  counter = [];

  constructor() { }

  addChapterFunction() {
    this.tableOfContents.push('');
  }

  deleteChapterFunction(){
    if(this.tableOfContents.length > 1){
      this.tableOfContents.pop();      
    }
  }

  ngOnInit() {
    this.tableOfContents.push('');    
  }

}
