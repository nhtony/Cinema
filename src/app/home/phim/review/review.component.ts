import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { CommentService } from 'src/_core/services/comment.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  constructor(private shareDataService: ShareDataService,private cmtService: CommentService) { }

  isNotNull: boolean = false;

  ischeck = [false, false, false, false, false];

  myUserName: string = '';

  numOfStar: number = 0;

  listComment = this.cmtService.getDanhSachBinhLuan();


  ngOnInit() {
    this.shareDataService.shareCheckLoginState.subscribe((res) => {
      this.myUserName = res.username;
    });
  }

  vote(rating) {
    for (let index = 0; index < rating; index++) {
      this.ischeck[index] = true;
      this.ischeck[rating] = false;
      this.ischeck[rating + index + 1] = false;
      if (rating === 1) {
        this.ischeck[index] = true;
        this.ischeck[rating + index + 2] = false;
        this.ischeck[rating + index + 3] = false;
      }
    }
    this.numOfStar = rating;
  }

  Dang() {
    let reviewObj = {
      username: '',
      comment: '',
      rating: []
    }
    let val = $('#cmtInput').val();
    reviewObj.comment = val.toString();
    reviewObj.username = this.myUserName;
    for (let index = 0; index < this.numOfStar; index++) {
      reviewObj.rating.push(index);
      // Nếu không đánh giá mặc định cho 1 sao
      if (reviewObj.rating.length < 1) {
        reviewObj.rating.push(1);
      }
    }

    if (reviewObj.comment.length !== 0) {
      this.listComment.push(reviewObj);
      this.isNotNull = false;
    }
    else {
      this.isNotNull = true;
    }

    $('#cmtInput').val('');
  }
}
