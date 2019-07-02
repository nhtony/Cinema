import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichPhimComponent } from './lich-phim.component';

describe('LichPhimComponent', () => {
  let component: LichPhimComponent;
  let fixture: ComponentFixture<LichPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
