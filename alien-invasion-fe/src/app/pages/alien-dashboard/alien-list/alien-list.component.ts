import { Component, OnInit, Input } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.scss']
})
export class AlienListComponent implements OnInit {
  @Input('items') items;
  @Input('l-title') title;
  @Input('columns') columns;
  constructor(private router: Router) {}
  ngOnInit(): void {

  }

  navigateTo(alien) {
    this.router.navigate(["members", "aliens", alien._id], { state: { data: alien } });
  }

}
