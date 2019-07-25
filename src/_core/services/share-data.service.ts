import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShareDataService {

  // danh sach phim
  private listMovie = new BehaviorSubject([] as any);
  shareListMovie = this.listMovie.asObservable();

  // danh sach user
  private listUser = new BehaviorSubject([] as any);
  shareListUser = this.listUser.asObservable();

  // danh sach lich chieu
  private listTime = new BehaviorSubject([] as any);
  shareListTime = this.listTime.asObservable();

  // các trạng thái hành động (đăng nhập - đăng ký...)
  private actionState = new BehaviorSubject({} as any);
  shareActionState = this.actionState.asObservable();

  private playState = new BehaviorSubject({} as any);
  sharePlayState = this.playState.asObservable();

  private showState = new BehaviorSubject({} as any);
  shareShowState = this.showState.asObservable();

  private checkLoginState = new BehaviorSubject({} as any);
  shareCheckLoginState = this.checkLoginState.asObservable();

  private listPhimDangChieu = new BehaviorSubject([] as any);
  shareListPhimDangChieu = this.listPhimDangChieu.asObservable();

  private maPhim = new BehaviorSubject([] as any);
  shareMaPhim = this.maPhim.asObservable();

  private hinhRap = new BehaviorSubject({} as any);
  shareHinhRap = this.hinhRap.asObservable();


  private LichSu = new BehaviorSubject({} as any);
  shareLichSu = this.LichSu.asObservable();

  constructor() { }

  shareDataListMovie(listMovie: any) {
    this.listMovie.next(listMovie);
  }

  shareDataListUser(listUser: any) {
    this.listUser.next(listUser);
  }

  shareDataListTime(listTime: any) {
    this.listTime.next(listTime);
  }

  shareDataActionState(actionState: any) {
    this.actionState.next(actionState);
  }

  shareDataPlayState(playState: any) {
    this.playState.next(playState);
  }

  shareDataShowState(showState: any) {
    this.showState.next(showState);
  }

  shareDataCheckLoginState(checkLoginState: any) {
    this.checkLoginState.next(checkLoginState);
  }

  shareDataListPhimDangChieu(listPhimDangChieu: any) {
    this.listPhimDangChieu.next(listPhimDangChieu);
  }

  shareDataMaPhim(maPhim: any) {
    this.maPhim.next(maPhim);
  }

  shareDataHinhRap(hinhRap: any) {
    this.hinhRap.next(hinhRap);
  }

  shareDataLichSu(LichSu: any) {
    this.LichSu.next(LichSu);
  }
}
