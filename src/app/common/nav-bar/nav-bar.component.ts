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


  condition: boolean = false;
  constructor(private shareDataService: ShareDataService, private _authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.shareDataService.shareCheckLoginState.subscribe((res) => {
      this.condition = res.status;
    });
  }

  dangNhap() {
    let objStatus: any = {
      status: true,
    };
    this.shareDataService.shareDataActionState(objStatus);
  }


  dangXuat() {
    this._authService.logout();
    this.condition = false;
  }

}
