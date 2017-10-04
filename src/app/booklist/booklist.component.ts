import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  booklist1=[
    {image:"https://i.imgur.com/bKmWKrZ.jpg", title:"Ruiny Gorlanu"},
    {image:"http://ecsmedia.pl/c/zwiadowcy-ksiega-2-plonacy-most-b-iext41780075.jpg", title:"Płonący Most"},
    {image:"http://ecsmedia.pl/c/zwiadowcy-ksiega-3-ziemia-skuta-lodem-b-iext41780841.jpg",title:"Ziemia Skuta Lodem"},
    {image:"http://ecsmedia.pl/c/zwiadowcy-ksiega-4-bitwa-o-skandie-b-iext41779981.jpg",title:"Bitwa o Skandię"},
    {image:"https://i.imgur.com/2ZFGjDH.jpg",title:"Czarnoksiężnik z Północy"}
  ]
  booklist2=[
    {image:"https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png", title:"Eragon"},
    {image:"http://ksiazki-ktore-czytam.piszecomysle.pl/files/2013/10/Najstarszy-deLux-doRec.jpg", title:"Najstarszy"},
    {image:"https://upload.wikimedia.org/wikipedia/en/7/70/Brisingr_book_cover.png",title:"Brisingr"},
    {image:"https://i.imgur.com/rChEMoB.jpg",title:"Dziedzictwo Tom 1"},
    {image:"https://media.merlin.pl/media/original/000/005/835/56bb7fb292673.jpg",title:"Dziedzictwo Tom 2"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
