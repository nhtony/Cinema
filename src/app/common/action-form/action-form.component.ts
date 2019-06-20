import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { AuthService } from '../../../_core/services/auth.service';
@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit {
  
  private condition: boolean;

  actionForm: FormGroup;

  constructor(private dataService: DataService, private shareDataService: ShareDataService,private _authService: AuthService) { }

  ngOnInit() {
    this.actionForm = new FormGroup({
      taikhoan: new FormControl(),
      matkhau: new FormControl(),
      email: new FormControl(),
      sdt: new FormControl(),
    });
    this.shareDataService.shareActionState.subscribe((res: any) => {
      this.condition = res.status;
    })
  }

  actionFormHandle(user?: any) {

    let objUser = {
      TaiKhoan: this.actionForm.value.taikhoan,
      MatKhau: this.actionForm.value.matkhau,
      Email: this.actionForm.value.email,
      SoDT: this.actionForm.value.sdt,
      MaNhom: 'GP10',
      MaLoaiNguoiDung: 'KhachHang',
    }

    let uri: string = (this.condition) ? `QuanLyNguoiDung/DangNhap?TaiKhoan=${user.taikhoan}&MatKhau=${user.matkhau}` : `QuanLyNguoiDung/ThemNguoiDung`;

    this.dataService.post(uri, objUser).subscribe((res: any) => {
      $("#btnDong").trigger("click");
      if (this.condition) {
        if (res === "Tài khoản hoặc mật khẩu không đúng !") {
          alert(res);
        } else {
          alert("Login Success");
          this._authService.loginAdmin();
        }
      }
      else {
        if (typeof res === 'object') {
          Swal.fire('Thành công !!!')
        }
        else {
          Swal.fire('Oops...', 'Không thành công!', 'error')
        }
      }
    })
  }
}
