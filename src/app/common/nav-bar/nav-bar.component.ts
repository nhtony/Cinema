import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private isLogin: any = {
    status: true,
  };
  private isSignUp: any = {
    status: false,
  };
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
  }
  dangNhap() {
    this.shareDataService.shareDataActionState(this.isLogin);
    this.shareDataService.shareDataPlayState(false);
  }
  dangKy() {
    this.shareDataService.shareDataActionState(this.isSignUp);
    this.shareDataService.shareDataPlayState(false);
  }


}
