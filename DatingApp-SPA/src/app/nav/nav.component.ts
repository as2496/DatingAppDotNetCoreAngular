import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  Login(){
    this.authService.login(this.model).subscribe(next => {
        console.log('Logged in successfully!');
    }, error => {
      console.log(error);
    });
  }
  LoggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  LogOut(){
    localStorage.removeItem('token');
    console.log('Logged out!');
  }
}
