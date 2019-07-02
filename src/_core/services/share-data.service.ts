import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShareDataService {
  
  private listMovie = new BehaviorSubject([] as any);
  shareListMovie = this.listMovie.asObservable();

  private listTime = new BehaviorSubject([] as any);
  shareListTime = this.listTime.asObservable();
  
  private actionState = new BehaviorSubject({} as any);
  shareActionState = this.actionState.asObservable();

  private playState = new BehaviorSubject({} as any);
  sharePlayState = this.playState.asObservable();

  private showState = new BehaviorSubject({} as any);
  shareShowState = this.showState.asObservable();

  private checkLoginState = new BehaviorSubject({} as any);
  shareCheckLoginState = this.checkLoginState.asObservable();

  private account = new BehaviorSubject({} as any);
  shareAccount = this.account.asObservable();

  private listId = new BehaviorSubject({} as any);
  shareListId = this.listId.asObservable();

  private listPhimDangChieu = new BehaviorSubject([] as any);
  shareListPhimDangChieu = this.listPhimDangChieu.asObservable();
  
  private maPhim = new BehaviorSubject({} as any);
  shareMaPhim = this.maPhim.asObservable();


  constructor() { }

  shareDataListMovie(listMovie: any) {
    this.listMovie.next(listMovie);
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

  shareDataAccount(account: any) {
    this.account.next(account);
  }

  shareDataListId(listId: any) {
    this.listId.next(listId);
  }

  shareDataListPhimDangChieu(listPhimDangChieu: any) {
    this.listPhimDangChieu.next(listPhimDangChieu);
  }

  shareDataMaPhim(maPhim: any) {
    this.maPhim.next(maPhim);
  }


}
