import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongVeComponent } from './phong-ve.component';

describe('PhongVeComponent', () => {
  let component: PhongVeComponent;
  let fixture: ComponentFixture<PhongVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
