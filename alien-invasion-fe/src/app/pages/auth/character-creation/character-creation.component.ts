import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {

  user;
  
  codeNames = [
    {
      value: "Gunslinger", 
      description: "Name's Arthur Morgan. Men like me, they ain't welcome anymore.",
    },
    {
      value: "Witcher",
      description: "Geralt Of Rivia, The White Wolf.",

    },
    {
      value: "CyberneticNinja",
      description: "Kenshi Hidaki, Ninja from the future",
    },
    {
      value: "SuperUser",
      description: "Master Of The Universe!",
    },
    {
      value: "Programmer",
      description: "Eh... I'm a programmer.."

    }
  ]
  constructor(private router: Router, private userService: UserService) { }
  initialize(characterData) {
    this.router.navigate(['members']);
  }

  ngOnInit(): void {
    this.user = this.userService.Profile
  }

}
