import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent implements OnInit {

  genaralForm: FormGroup;

  idUser: any;

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.getParams();
    this.resetForm();
  }


  createForm() {
    this.genaralForm = new FormGroup({
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
      loainguoidung: new FormControl('', Validators.required),
    });
  }

  genaralFormHandle() {
    let objUser = {
      TaiKhoan: this.genaralForm.value.taikhoan,
      MatKhau: this.genaralForm.value.matkhau,
      Email: this.genaralForm.value.email,
      SoDT: this.genaralForm.value.sdt,
      MaNhom: 'GP10',
      MaLoaiNguoiDung: this.genaralForm.value.loainguoidung,
    }
    let uri: string = `QuanLyNguoiDung/ThemNguoiDung`
    this.dataService.post(uri, objUser).subscribe((res: any) => {
      if (typeof res === 'object') {
        Swal.fire('Thành công !!!');
        this.resetForm();
      }
      else {
        Swal.fire('Oops...', 'Không thành công!', 'error');
        this.resetForm();
      }
    });
  }

  getParams() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
  }


  getListMovie() {
    this.shareDataService.shareListMovie.subscribe((res: any) => {
      res.map((item) => {
        if (item.MaPhim == this.idPhim) {
          this.genaralForm = new FormGroup({
            'maphim': new FormControl(item.MaPhim),
            'tenphim': new FormControl(item.TenPhim),
            'manhom': new FormControl(item.MaNhom),
            'trailer': new FormControl(item.Trailer),
            'ngaykhoichieu': new FormControl(item.NgayKhoiChieu),
            'mota': new FormControl(item.MoTa),
            'danhgia': new FormControl(item.DanhGia)
          })
        }
      });
    });
  }

  resetForm() {
    this.genaralForm = new FormGroup({
      'taikhoan': new FormControl(null),
      'matkhau': new FormControl(null),
      'email': new FormControl(null),
      'trailer': new FormControl(null),
      'sdt': new FormControl(null),
      'loainguoidung': new FormControl(null),
    });
  }
}
