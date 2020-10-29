import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Peliculas } from './peliculas';
import { Component, OnInit } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { observable, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpclient: HttpClient) { }
  currentPelicula: Peliculas;
  urlApi = 'http://www.omdbapi.com/?apikey=cde911a0&t=';

  getInfoPelicula(namepelicula: string): Observable<Peliculas> {
  
    return this.httpclient.get<Peliculas>(this.urlApi + namepelicula)
      .pipe(
        retry(3),
        catchError(this.HandlerErrores)
      );
  }


  private HandlerErrores(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
