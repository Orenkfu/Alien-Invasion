import { Component, OnInit } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';

@Component({
  selector: 'app-alien-dashboard',
  templateUrl: './alien-dashboard.component.html',
  styleUrls: ['./alien-dashboard.component.scss']
})
export class AlienDashboardComponent implements OnInit {
  

  aliens;

  constructor(private alienService: AlienService) { }
  ngOnInit(): void {
    this.alienService.getAliens().subscribe(res => {
      this.aliens = res;
      console.log(this.aliens);
    });
  }
  getCol (type) {
    return this.alienService.getListColumns(type);
  }
}
