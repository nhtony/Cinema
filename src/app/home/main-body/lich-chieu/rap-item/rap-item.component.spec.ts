import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapItemComponent } from './rap-item.component';

describe('RapItemComponent', () => {
  let component: RapItemComponent;
  let fixture: ComponentFixture<RapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
