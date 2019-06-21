import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { AuthService } from 'src/_core/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() phim;

  linkTrailer: string;

  private isPlay: any = {
    status: true,
    idYoutubeURL: '',
  };

  private isLogin: any = {
    status: true,
  };

  idPhim: any;
  tenPhimParam: any;
  subParams: Subscription;
  subDetailMovie: Subscription;

  constructor( private data: ShareDataService, private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getVideoID();
  }

  getVideoID() {
    if (typeof this.phim === 'object') {
      this.linkTrailer = this.phim.Trailer;
      if (this.linkTrailer !== null) {
        this.isPlay.idYoutubeURL = this.linkTrailer.substr(this.linkTrailer.indexOf('=') + 1);
      }
    }
  }

  muaVe(maPhim, tenPhim) {
    if (this._authService.isAuthenticated()) {
      $('.btnMua').removeAttr('data-toggle');
      this.router.navigate(["./home/phim", maPhim + '-' + tenPhim]);
    }
    else {
      this.data.shareDataActionState(this.isLogin);
    }
  }
}
