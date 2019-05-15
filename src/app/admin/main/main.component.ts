import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sidebarWidth: string = '';
  mainMar: string = '';
  isOpen: boolean = false;
  content: string = 'Menu';
  constructor() { }

  ngOnInit() {
    
  }
  openNav() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.content = 'Close';
      this.sidebarWidth = '250px';
      this.mainMar = '250px';

    }
    else {
      this.content = 'Menu';
      this.sidebarWidth = '0';
      this.mainMar = '0';

    }
  }
}
