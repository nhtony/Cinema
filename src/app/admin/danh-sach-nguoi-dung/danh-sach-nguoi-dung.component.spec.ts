import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung.component';

describe('DanhSachNguoiDungComponent', () => {
  let component: DanhSachNguoiDungComponent;
  let fixture: ComponentFixture<DanhSachNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
