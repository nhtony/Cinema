import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { AuthService } from 'src/_core/services/auth.service';
import { Router } from '@angular/router';
import { Gallery } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  @Input() phim;
  private listStar = [];

  private isLogin: any = {
    status: true,
  };


  constructor(private data: ShareDataService, private _authService: AuthService, private router: Router, public gallery: Gallery, public lightbox: Lightbox) { }



  ngOnInit() {
    this.getStar();
  }

  xemChiTiet() {
    if (this._authService.isAuthenticated()) {
      $('.btnMua').removeAttr('data-toggle');
      this.router.navigate(["./home/phim", this.phim.MaPhim], { queryParams: { name: this.phim.TenPhim } });
    }
    else {
      this.data.shareDataActionState(this.isLogin);
    }
  }

  getStar() {
    let length = parseInt(this.phim.DanhGia);
    if (length > 5) {
      length = 5;
    }
    for (let index = 0; index < length; index++) {
      this.listStar.push(index);
    }
  }

  open(Trailer) {
    let videoUrl: string = '';
    const lightboxRef = this.gallery.ref('lightbox');
    if (typeof this.phim === 'object') {
      if (Trailer !== null) {
        videoUrl = Trailer.substr(Trailer.indexOf('=') + 1);
      }
    }
    lightboxRef.reset();
    lightboxRef.addYoutube({ src: videoUrl });
    this.lightbox.open(0);
  }
}
