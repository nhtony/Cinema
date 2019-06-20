import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() phim;
  linkTrailer:string;
  private isPlay: any = {
    status: true,
    idYoutubeURL: '',
  };

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    if (typeof this.phim === 'object') {
      this.linkTrailer = this.phim.Trailer;
      if(this.linkTrailer !== null){
        this.isPlay.idYoutubeURL = this.linkTrailer.substr(this.linkTrailer.indexOf('=')+1);
      }
    }
  }

  playVideo() {
    this.data.shareDataPlayState(this.isPlay);
  }



}
