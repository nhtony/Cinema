import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/_core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suat-item',
  templateUrl: './suat-item.component.html',
  styleUrls: ['./suat-item.component.scss']
})
export class SuatItemComponent implements OnInit {

  @Input() suatChieu;
  constructor(private _authService: AuthService,private router: Router) { }

  ngOnInit() {

  }

  vaoPhongVe() {
    if (this._authService.isAuthenticated()) {
      $('#btnTime').removeAttr('data-toggle');
      this.router.navigate(["/home/phong-ve/",this.suatChieu.MaLichChieu]);
    }
    // else {
    //   this.data.shareDataActionState(this.isLogin);
    // }
  }

}
