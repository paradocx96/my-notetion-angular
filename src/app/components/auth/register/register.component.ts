import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AuthRegister} from "../../../models/auth.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRequest: AuthRegister = {
    name: '',
    email: '',
    username: '',
    password: '',
    role: 'user'
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerRequest);

    if (this.registerRequest.name != '' &&
      this.registerRequest.email != '' &&
      this.registerRequest.username != '' &&
      this.registerRequest.password != '') {
      this.authService.authRegister(this.registerRequest).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['auth/login']);
        },
        error: (err) => {
          console.log(err)
        }
      })
    } else {
      alert('Please fill all the fields!');
    }
  }

}
