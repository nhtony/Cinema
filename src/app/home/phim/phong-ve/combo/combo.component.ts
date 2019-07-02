import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {

  @Input() combo;
  @Output() eventTinhTien = new EventEmitter();
  comboPrice = 0;
  constructor() { }

  ngOnInit() {

  }

  tangGiamSoLuong(tang) { // true = tăng, false = giảm
    if (tang) {
      this.combo.soLuong += 1;
    }
    else {
      if (this.combo.soLuong > 0) {
        this.combo.soLuong -= 1;
      }
    }
    this.comboPrice = this.combo.soLuong * this.combo.gia;
    this.eventTinhTien.emit(this.comboPrice);
  }

}
