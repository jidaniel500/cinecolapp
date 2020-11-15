import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Usuario } from './models/UsuarioModel';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario;
  mensajeError: string;
  formLogin = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl('')

  });

  constructor(private router: Router, private loginservice: LoginService) {
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    debugger;
    let response = this.loginservice.getUser()
      .subscribe((res) => {
        if (res) {
          let email = res.email
          let password = res.password
          if (email == 'jidaniel500@gmail.com' && password == 'daniel')
            this.router.navigate(['/home']);
          else
            this.router.navigate(['/'])
        }
      })
  }
}

