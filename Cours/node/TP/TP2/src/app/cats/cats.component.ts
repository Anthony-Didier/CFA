import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats = [
    {name : "Coco", color : "Noir", age : 3},
    {name : "Kiki", color : "Blanc", age : 1},
    {name : "Doudou", color : "Roux", age : 6},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(cat : string): void {
    alert(`${cat} miaule`)
  }

}
