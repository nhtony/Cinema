import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { AuthService } from 'src/_core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';


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

  condition: boolean = false;
  constructor(private shareDataService: ShareDataService, private _authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.shareDataService.shareCheckLoginState.subscribe((res) => {
      this.condition = res.status;
    });

  }

  dangNhap() {
    this.shareDataService.shareDataActionState(this.isLogin);
    this.shareDataService.shareDataPlayState(false);
  }
  
  dangKy() {
    this.shareDataService.shareDataActionState(this.isSignUp);
    this.shareDataService.shareDataPlayState(false);
  }

  dangXuat() {
    this._authService.logout();
    this.condition = false;
  }
}
