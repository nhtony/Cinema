import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit() {

  }
  mySlideImages = ['01', '02', '03'].map((i) => `/assets/img/header/${i}.jpg`);


  mySlideOptions = {center:true, items: 1, dots: true, nav: false ,autoplay:true};
}