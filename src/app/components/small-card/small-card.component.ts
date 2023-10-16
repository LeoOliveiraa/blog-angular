<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css',
    './small-card-responsive.component.css'
  ]
})
<<<<<<< HEAD
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  id:string="0"


  constructor (){ }
  ngOnInit(): void {

  }
=======
export class SmallCardComponent {

>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9
}
