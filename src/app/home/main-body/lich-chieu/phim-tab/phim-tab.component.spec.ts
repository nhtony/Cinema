import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimTabComponent } from './phim-tab.component';

describe('PhimTabComponent', () => {
  let component: PhimTabComponent;
  let fixture: ComponentFixture<PhimTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
