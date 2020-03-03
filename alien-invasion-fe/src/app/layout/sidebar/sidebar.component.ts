import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public window: Window, registry: MatIconRegistry, sanitizer: DomSanitizer) {
    registry.addSvgIcon("hamburger",
    sanitizer.bypassSecurityTrustResourceUrl('../../../assets/hamburger.svg'));
  }
  isMobile() {
    return this.window.innerWidth <= 767;
  }
  ngOnInit(): void {
  }

}
