import { Component, OnInit } from '@angular/core';
@Component({
selector: 'content-list',
templateUrl: './content-list.component.html',
styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
constructor() { }
title = 'Spis treści';
public Sections: Array<ContentTreeNode> = [new ContentTreeNode("tytul", [new ContentTreeNode("podtytuly", [new ContentTreeNode("podtytulyLista")])])];
sectionList=[{tytul:"Tom Pierwszy", podtytuly:"Wiosna"},{tytul:"Tom Drugi", podtytuly:"Wschód"},{tytul:"Tom Trzeci", podtytuly:"Empatia"}];

ngOnInit() {
}
}
export class ContentTreeNode{
constructor(
public Section:string,
public SubSection:Array<ContentTreeNode> = [],
){}
}
