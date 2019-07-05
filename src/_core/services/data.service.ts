import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "./../../environments/environment";

let urlAPI = ``;

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    urlAPI = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlAPI + '/' + uri).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  post(uri: string, data?: object, httpOption?: object): Observable<any> {
    return this.http.post(urlAPI + '/' + uri, data, httpOption).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  delete(uri: string): Observable<any> {
    return this.http.delete(urlAPI + '/' + uri).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  handleError(err) {
    console.log(err);
    return err;
  }
}
