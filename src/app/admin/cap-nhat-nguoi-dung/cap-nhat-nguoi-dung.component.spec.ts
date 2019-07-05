import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung.component';

describe('CapNhatNguoiDungComponent', () => {
  let component: CapNhatNguoiDungComponent;
  let fixture: ComponentFixture<CapNhatNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
