import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlienService } from 'src/app/services/alien.service';

@Component({
  selector: 'app-alien-portal',
  templateUrl: './alien-portal.component.html',
  styleUrls: ['./alien-portal.component.scss']
})
export class AlienPortalComponent implements OnInit {
  alien;
  id;
  children;
  propKeys: string[];

  constructor(private router: Router, private route: ActivatedRoute, private alienService: AlienService) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadCurrentAlien();
    this.loadChildren();
  }
  private set Alien (value) {
    this.alien = value;
    this.propKeys = Object.keys(value);
  }
  loadCurrentAlien() {
    let navData = this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras; 
    if (navData && navData.state && navData.state.data) {
      this.Alien = navData.state.data;
    } else {
      this.alienService.getBy('id', this.id).subscribe(alien => {
       this.Alien = alien;
      })
    }
   }
   loadChildren() {
    this.alienService.getBy('parent', this.id).subscribe(children => {
      if(children && children['length'] > 0) {
        this.children = children;
      }
      console.log(this.children);
    })
  }
  getColumns(type) {
    type = type.toLowerCase();
      let colType = type === "commander" ? "warrior" : "commander";
      return this.alienService.getListColumns(colType);
    }
  ngOnInit(): void {
  }

}
