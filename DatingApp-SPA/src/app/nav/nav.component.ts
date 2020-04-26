import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  Login(){
    this.authService.login(this.model).subscribe(next => {
        this.alertify.success('Logged in successfully!');
    }, error => {
      this.alertify.error(error);
    });
  }
  LoggedIn(){
    return this.authService.LoggedIn();
  }
  LogOut(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out!');
  }
}
