import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShareDataService {
  private listMovie = new BehaviorSubject([] as any);
  shareListMovie = this.listMovie.asObservable();

  constructor() { }

  shareDataListMovie(listMovie: any) {
    this.listMovie.next(listMovie);
  }

}
