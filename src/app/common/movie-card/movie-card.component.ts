import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { AuthService } from 'src/_core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  @Input() phim;

  linkTrailer: string;

  private listStar = [];

  private isPlay: any = {
    status: true,
    idYoutubeURL: '',
  };

  private isLogin: any = {
    status: true,
  };


  constructor( private data: ShareDataService, private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getVideoID();
    this.getStar();
  }

  getVideoID() {
    if (typeof this.phim === 'object') {
      this.linkTrailer = this.phim.Trailer;
      if (this.linkTrailer !== null) {
        this.isPlay.idYoutubeURL = this.linkTrailer.substr(this.linkTrailer.indexOf('=') + 1);
      }
    }
  }

  xemChiTiet() {
    if (this._authService.isAuthenticated()) {
      $('.btnMua').removeAttr('data-toggle');
      this.router.navigate(["./home/phim",this.phim.MaPhim],{queryParams:{name:this.phim.TenPhim}});
    }
    else {
      this.data.shareDataActionState(this.isLogin);
    }
  }

  getStar(){
    let length =  parseInt(this.phim.DanhGia);
    for (let index = 0; index < length; index++) {
        this.listStar.push(index);
    }
  }

  playVideo() {
    this.data.shareDataPlayState(this.isPlay);
  }
}
