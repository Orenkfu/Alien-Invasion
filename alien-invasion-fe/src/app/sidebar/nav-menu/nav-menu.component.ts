import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  routes = [
    {
      path: "/members/create",
      text: "Create Aliens"
    },
    {
      path: "/members/dashboard",
      text: "Alien Dashboard"
    },
    {
      path: "/members/readme",
      text: "Readme"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
