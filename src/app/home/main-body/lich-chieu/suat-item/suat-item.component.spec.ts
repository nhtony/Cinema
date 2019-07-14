import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuatItemComponent } from './suat-item.component';

describe('SuatItemComponent', () => {
  let component: SuatItemComponent;
  let fixture: ComponentFixture<SuatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
