import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  // Properties
  userLoggedIn: boolean = false;
  userUsername: any = '';

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.userLoggedIn = true;
      this.userUsername = localStorage.getItem('username');
  }

  logoutUser() {
    this.router.navigateByUrl('/');
    this.authService.authLogoutRedirect();
  }
}
