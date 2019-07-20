import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private formBuilder: FormBuilder, private router: Router) { }

  genaralForm: FormGroup;
  danhSachVeDaDat = [];
  objUser = {
    TaiKhoan: '',
    MatKhau: '',
    Email: '',
    SoDT: '',
    HoTen: '',
    MaLoaiNguoiDung: ''
  };

  ngOnInit() {
    this.createForm();
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
    this.shareDataService.shareLichSu.subscribe((res) => {
      this.danhSachVeDaDat = res.DanhSachVeDaDat;
      this.objUser = res;
    });
    this.getListUser();
  }

  createForm() {
    this.genaralForm = this.formBuilder.group({
      taikhoan: ['', Validators.required],
      matkhau: ['', [Validators.required, Validators.minLength(6)]],
      hoten: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sdt: ['', Validators.required],
      loainguoidung: ['', Validators.required],
    });
  }

  genaralFormHandle() {
    let objUser = {
      TaiKhoan: this.genaralForm.value.taikhoan,
      MatKhau: this.genaralForm.value.matkhau,
      HoTen: this.genaralForm.value.hoten,
      Email: this.genaralForm.value.email,
      SoDT: this.genaralForm.value.sdt,
      MaNhom: 'GP10',
      MaLoaiNguoiDung: 'KhachHang',
    }
    let uri: string = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, objUser).subscribe((res: any) => {
      if (typeof res === 'object') {
        Swal.fire('Thành công !!!');
      }
      else {
        Swal.fire('Oops...', 'Không thành công!', 'error');
      }
    });
  }

  getListUser() {
    this.genaralForm = new FormGroup({
      'taikhoan': new FormControl(this.objUser.TaiKhoan),
      'matkhau': new FormControl(this.objUser.MatKhau),
      'hoten': new FormControl(this.objUser.HoTen),
      'email': new FormControl(this.objUser.Email),
      'sdt': new FormControl(this.objUser.SoDT),
      'loainguoidung': new FormControl(this.objUser.MaLoaiNguoiDung),
    })
  }

  thoat() {
    this.router.navigate(["/home"]);
  }
}
