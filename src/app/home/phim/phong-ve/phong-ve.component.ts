import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {

  maLichChieu: any;
  seatMaps: any = [];
  hangGhe = ['A', 'B', 'C', 'D', 'E', 'F'];
  tenGhe: string;
  openCombo: boolean = false;
  hideCombo: boolean = false;

  danhSachGheDangChon: any = [];
  tienGhe: number = 0;
  tienCombo: number = 0;
  tongTien: number = 0;
  account: any;
  danhDachVe: any = [];

  comboMenu: any = [
    { tenCombo: 'Combo 1', gia: 75000, soLuong: 0, hinhAnh: '../../../../assets/img/combo1.jpg' },
    { tenCombo: 'Combo 2', gia: 85000, soLuong: 0, hinhAnh: '../../../../assets/img/combo2.jpg' },
  ];


  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private data: ShareDataService) {

  }

  ngOnInit() {
    this.getParams();
    this.getDanhSachGhe();
    this.getAccount();
  }

  getParams() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getDanhSachGhe() {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.dataService.get(uri).subscribe((res) => {
      this.seatMaps = res.DanhSachGhe;
      this.doiTenGhe();
    })
    console.log(this.maLichChieu);

  }

  doiTenGhe() {
    let item = 0;
    this.seatMaps.map((res, index) => {
      if (index % 10 === 0) {
        item = index / 10;
      }
      if (index >= 10) {
        index = index % 10;
        if (index < 9)
          this.tenGhe = this.hangGhe[item] + '0' + parseInt(index + 1);
        else {
          this.tenGhe = this.hangGhe[item] + parseInt(index + 1);
        }
      }
      else {
        if (index < 9)
          this.tenGhe = this.hangGhe[item] + '0' + parseInt(index + 1);
        else {
          this.tenGhe = this.hangGhe[item] + parseInt(index + 1);
        }
      }
      res.TenGhe = this.tenGhe;
    })
  }

  chonGhe(objGhe) {
    let objVe = {
      MaGhe: '',
      GiaVe: ''
    }
    if (objGhe.dangChon) {
      this.danhSachGheDangChon.push(objGhe.ghe);
      this.tienGhe += parseInt(objGhe.ghe.GiaVe);
      this.tinhTongTien(); 
      objVe.MaGhe = objGhe.ghe.MaGhe;
      objVe.GiaVe = objGhe.ghe.GiaVe;
      this.danhDachVe.push(objVe);
    }
    else {
      this.danhSachGheDangChon.map((item, index) => {
        if (item.STT === objGhe.ghe.STT) {
          this.danhSachGheDangChon.splice(index, 1);
          this.danhDachVe.splice(index, 1);
          this.tienGhe -= parseInt(item.GiaVe);
          this.tinhTongTien();
        }
      });
    }
  }

  tinhTienCombo(tien) {
    this.tienCombo = tien;
    this.tinhTongTien();
  }

  tinhTongTien() {
    this.tongTien = this.tienGhe + this.tienCombo;
  }

  openComboBox() {
    this.openCombo = true;
    this.hideCombo = false;
  }

  thoat() {
    this.hideCombo = true;
    this.openCombo = false;
  }

  datVe() {
    const uri = `QuanLyDatVe/DatVe`;
    let ve = {
      MaLichChieu: this.maLichChieu,
      TaiKhoanNguoiDung: this.account,
      DanhSachVe: this.danhDachVe
    }
    this.dataService.post(uri,ve).subscribe((res) => {
      alert(res);
    });
  }


  getAccount() {
    this.data.shareAccount.subscribe((res) => {
      this.account = res.TaiKhoan;
    });
  }



}
