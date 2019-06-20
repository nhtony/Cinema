import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {


  videoUrl: SafeResourceUrl;

  constructor(private data: ShareDataService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.data.sharePlayState.subscribe((res) => {
      let id = res.idYoutubeURL;
      let url = 'https://www.youtube.com/embed/' + id;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }

}
