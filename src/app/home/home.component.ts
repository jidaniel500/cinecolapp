import { Component, OnInit } from '@angular/core';
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

  
  constructor(private peliculaService: PeliculasService) { }
  peliactual: Peliculas

  ngOnInit() {
    debugger;
    debounceTime(300),
      distinctUntilChanged()
  }

  
  search(expression: string): void {
    this.peliculaService.getInfoPelicula(expression).subscribe(peli => {
      this.peliactual = peli;
    })
  }

}
