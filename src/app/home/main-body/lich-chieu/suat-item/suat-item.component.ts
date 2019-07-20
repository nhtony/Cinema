import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/_core/services/auth.service';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/_core/services/share-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-suat-item',
  templateUrl: './suat-item.component.html',
  styleUrls: ['./suat-item.component.scss']
})
export class SuatItemComponent implements OnInit {

  @Input() suatChieu;

  tenRap: string = '';
  constructor(private _authService: AuthService, private router: Router, private data: ShareDataService) { }

  ngOnInit() {
    this.data.shareHinhRap.subscribe((res) => {
      this.tenRap = res.name;
    });
  }

  vaoPhongVe() {
    if (this._authService.isAuthenticated()) {
      this.router.navigate(["/home/phong-ve/", this.suatChieu.MaLichChieu], { queryParams: { tenrap: this.tenRap } });
    }
    else {
      Swal.fire('Vui lòng đăng nhập');
    }
  }
}
