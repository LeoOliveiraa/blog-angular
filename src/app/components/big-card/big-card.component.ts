<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css',
    './big-card-responsive.component.css'
  ]
})
<<<<<<< HEAD
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  id:string="0"


  constructor() { }
  ngOnInit(): void {

  }
=======
export class BigCardComponent {

>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9
}
