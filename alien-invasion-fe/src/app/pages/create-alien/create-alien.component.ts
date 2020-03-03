import { Component, OnInit } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alien',
  templateUrl: './create-alien.component.html',
  styleUrls: ['./create-alien.component.scss']
})
export class CreateAlienComponent implements OnInit {
  
  //weapons, vehicles, cards & types are hardcoded per project specifications, though for a more maintainable 
  //project they would be prime candidates to be grabbed as schema from a database.
  weapons = ['Water gun', 'Pepper spray', 'Chopsticks'];
  membership_cards = ['Shufersal', 'Hever', 'Hitech zone'];
  vehicles = ['Bird scooter', 'Merkava tank'];
  alienTypes = ['Warrior', 'Commander', 'Commander Chief'];
  parentDictionary = {
    "Warrior": 'Commander',
    "Commander": 'Commander Chief',
    "Commander Chief": null
  }
  //Default value - this property is two-way bound to the form "type" property, and will alter the form based on its' state.
  type = "Warrior";
  aliens: any;
  public set Type(value) {
    console.log(this.type);
    this.type = value;
  }
  constructor(private alienService: AlienService, private router: Router) {
    alienService.getAliens().subscribe(res => {
      this.aliens = res;
    })
  }
  getParent(type) {
    return this.parentDictionary[type];
  }

  create (alien) {
    this.alienService.createAlien(alien).subscribe(result => {
      this.router.navigate(["members", "dashboard"]);
    })
  }

  ngOnInit(): void {
  }

}
