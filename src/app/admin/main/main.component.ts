import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_core/services/auth.service';
import { ShareDataService } from 'src/_core/services/share-data.service';

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
  constructor(private _authservice: AuthService, private shareDataService: ShareDataService) { }

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

  getUser() {
    let objStatus: any = {
      status: true,
    };
    this.shareDataService.shareDataActionState(objStatus);
  }

  getMovie() {
    let objStatus: any = {
      status: false,
    };
    this.shareDataService.shareDataActionState(objStatus);
  }

  signOut() {
    this._authservice.clear();
    location.replace('/home');
  }
}
