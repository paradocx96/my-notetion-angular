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

    if (this.loginRequest.username != '' && this.loginRequest.password != '') {
      this.authService.authLogin(this.loginRequest).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username);
          this.router.navigateByUrl('/');
          this.authService.authLoginRedirect();
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      alert('Please fill all the fields!')
    }
  }
}
