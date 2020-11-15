import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from './models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  urlApi: string = 'http://localhost:4200/assets/storageusers.json';
  constructor(private httpclient: HttpClient) {
    
  }

  public getUser(): Observable<Usuario> {
    // const opciones = emailUser ? { params: new HttpParams().set('email', emailUser) } : {};
    return this.httpclient.get<Usuario>(this.urlApi)
      .pipe(
        catchError(this.manejadorErrores)
      )
  }

  public manejadorErrores(tipoerror: HttpErrorResponse) {
    
    if (tipoerror.error instanceof ErrorEvent) {
      console.error('An error occurred:', tipoerror.error.message);
    }
    else {
      console.error(
        `Backend returned code ${tipoerror.status}, ` +
        `body was: ${tipoerror.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');

  }
}
