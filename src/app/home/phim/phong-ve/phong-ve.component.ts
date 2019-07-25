import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { DynamicScriptLoaderServiceService } from 'src/_core/services/dynamic-script-loader-service.service';
import { Subscription } from "rxjs";
import swal from 'sweetalert2';



@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {

  subParams: Subscription;
  subCineDetail: Subscription;

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

  objRap = {
    src: '',
    cinename: '',
    filmname: ''
  }

  comboMenu: any = [
    { tenCombo: 'Combo 1', gia: 75000, soLuong: 0, hinhAnh: '../../../../assets/img/combo1.jpg' },
    { tenCombo: 'Combo 2', gia: 85000, soLuong: 0, hinhAnh: '../../../../assets/img/combo2.jpg' },
  ];

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private data: ShareDataService, private _router: Router, private dynamicScriptLoader: DynamicScriptLoaderServiceService) { }

  ngOnInit() {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
    this.getDanhSachGhe();
    this.getAccount();
    this.getHinhRap();
    this.loadScripts();
  }

  getParams() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('id');
    this.subParams = this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        this.objRap.cinename = params.tenrap;
        this.objRap.filmname = params.tenphim;

      }
    );
  }

  getDanhSachGhe() {
    this.getParams();
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.subCineDetail = this.dataService.get(uri).subscribe((res) => {
      this.seatMaps = res.DanhSachGhe;
      this.doiTenGhe();
    })
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
      objVe.MaGhe = objGhe.ghe.MaGhe;
      objVe.GiaVe = objGhe.ghe.GiaVe;
      this.danhDachVe.push(objVe);
      this.tienGhe += parseInt(objGhe.ghe.GiaVe);
      this.tinhTongTien();
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
    this.dataService.post(uri, ve).subscribe((res) => {
      swal.fire({
        title: res,
        text: "Bạn có muốn có đặt thêm không?",
        showConfirmButton: true,
        showCancelButton: true
      })
        .then((willContinute) => {
          if (willContinute.value) {
            location.reload();
          } else {
            this._router.navigate(['/home']);
          }
        });
    });
  }

  getAccount() {
    let userLogin = JSON.parse(sessionStorage.getItem('authLogin'));
    this.account = userLogin.taikhoan;
    console.log(userLogin);

    console.log(this.account);

  }

  getHinhRap() {
    this.data.shareHinhRap.subscribe((res) => {
      this.objRap.src = res.src;
    });
  }

  canDeactivate() {
    window.onhashchange = function () {
      alert(1234);
    }
  }


  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('flip-clock', 'clock').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subCineDetail.unsubscribe();
    this.subParams.unsubscribe();
  }
}