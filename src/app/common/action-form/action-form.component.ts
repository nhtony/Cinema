import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { AuthService } from '../../../_core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit {

  private condition: boolean;

  actionForm: FormGroup;

  private isLoggedIn: any = {
    status: true,
  };

  btnTitle = '';

  private formLoginObj = {
    taikhoan: new FormControl('', Validators.required),
    matkhau: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  }

  private formRegisObj = {
    taikhoan: new FormControl('', Validators.required),
    matkhau: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    sdt: new FormControl('', Validators.required),
  }

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private _authService: AuthService, private spinner: NgxSpinnerService) { }


  ngOnInit() {

    this.shareDataService.shareActionState.subscribe((res: any) => {
      this.condition = res.status;
      this.actionForm = (this.condition) ? new FormGroup(this.formLoginObj) : new FormGroup(this.formRegisObj);
      this.btnTitle = (this.condition) ? 'Đăng nhập' : "Đăng ký";
    });

    this.shareDataService.shareActionState.subscribe((res) => {
      if (typeof (res) === 'object') {
        this.resetForm();
      }
    });
    
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
        }
        else {
          this._authService.login();
          if (this._authService.isAuthenticated()) {
            this.shareDataService.shareDataCheckLoginState(this.isLoggedIn);
            this.shareDataService.shareDataAccount(objUser);
          }
        }
      }
      else {
        if (typeof res === 'object') {
          Swal.fire('Thành công !!!');
        }
        else {
          Swal.fire('Oops...', 'Không thành công!', 'error');
        }
      }
    })
  }


  resetForm() {
    this.actionForm = new FormGroup({
      taikhoan: new FormControl(null),
      matkhau: new FormControl(null),
      email: new FormControl(null),
      sdt: new FormControl(null),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.actionForm.controls[controlName].hasError(errorName);
  }

}
