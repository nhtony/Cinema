import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMovieComponent } from './table-movie.component';

describe('TableMovieComponent', () => {
  let component: TableMovieComponent;
  let fixture: ComponentFixture<TableMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
