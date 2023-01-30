import {Component, OnInit} from '@angular/core';
import {AuthLogin} from "../../../models/auth.model";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: AuthLogin = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginRequest);

    this.authService.authLogin(this.loginRequest).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
