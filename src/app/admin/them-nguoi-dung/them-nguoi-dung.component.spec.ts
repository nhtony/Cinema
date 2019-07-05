import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNguoiDungComponent } from './them-nguoi-dung.component';

describe('ThemNguoiDungComponent', () => {
  let component: ThemNguoiDungComponent;
  let fixture: ComponentFixture<ThemNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
