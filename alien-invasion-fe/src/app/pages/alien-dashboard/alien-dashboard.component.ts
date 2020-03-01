import { Component, OnInit } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';

@Component({
  selector: 'app-alien-dashboard',
  templateUrl: './alien-dashboard.component.html',
  styleUrls: ['./alien-dashboard.component.scss']
})
export class AlienDashboardComponent implements OnInit {
  
  columns = {
    chiefs: ['id', 'name', 'vehicle'],
    warriors: ['id', 'name', 'weapon', ],
    commanders: ['id', 'name', 'vehicle', 'membership-card'],
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
