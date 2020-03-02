import { Component, OnInit } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';

@Component({
  selector: 'app-alien-dashboard',
  templateUrl: './alien-dashboard.component.html',
  styleUrls: ['./alien-dashboard.component.scss']
})
export class AlienDashboardComponent implements OnInit {
  
  columns = {
    chiefs: ['name', 'vehicle', 'membership_card'],
    warriors: ['name', 'weapon', ],
    commanders: ['name', 'vehicle'],
  }
  aliens;
  constructor(private alienService: AlienService) { }
  ngOnInit(): void {
    this.alienService.getAliens().subscribe(res => {
      this.aliens = res;
      console.log(this.aliens);
    });
  }

}
