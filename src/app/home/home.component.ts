import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Peliculas } from '../peliculas';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PeliculasService } from '../peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private searchTems = new Subject<string>();
  constructor(private peliculaService: PeliculasService) { }
  peliactual: Peliculas

  ngOnInit() {
    debounceTime(300),
      distinctUntilChanged()

  }
  


  search(expression: string): void {
 
    this.peliculaService.getInfoPelicula(expression).subscribe(peli => {
        this.peliactual = peli;
    })
    
  }

}
