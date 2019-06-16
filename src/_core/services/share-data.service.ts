import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShareDataService {
  private listMovie = new BehaviorSubject([] as any);
  shareListMovie = this.listMovie.asObservable();
  
  private actionState = new BehaviorSubject({} as any);
  shareActionState = this.actionState.asObservable();

  constructor() { }

  shareDataListMovie(listMovie: any) {
    this.listMovie.next(listMovie);
  }

  shareDataActionState(actionState: any) {
    this.actionState.next(actionState);
  }

}
