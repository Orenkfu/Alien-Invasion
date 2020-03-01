import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-alien',
  templateUrl: './create-alien.component.html',
  styleUrls: ['./create-alien.component.scss']
})
export class CreateAlienComponent implements OnInit {
  alienTypes = ['Warrior', 'Commander', 'Commander Chief']
  type = "Warrior";
  constructor() { }
  typeChanged (type) {
    console.log("Type Changed.. ", type);
  }

  create (alien) {
    console.log("Creating alien ", alien);
  }

  ngOnInit(): void {
  }

}
