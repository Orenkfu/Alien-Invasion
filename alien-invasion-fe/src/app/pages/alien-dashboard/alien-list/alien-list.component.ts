import { Component, OnInit, Input } from '@angular/core';
import { AlienService } from 'src/app/services/alien.service';

@Component({
  selector: 'alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.scss']
})
export class AlienListComponent implements OnInit {
  @Input('columns') columns;
  @Input('aliens') aliens;
  @Input('l-title') title;  
  ngOnInit(): void {

  }

}
