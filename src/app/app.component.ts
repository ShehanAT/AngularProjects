import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animalWikiApp';
  currentUser: User;

  constructor(
  	private router: Router,
  	private authenticationService: AuthenticationService
  ){
  	//assigning current user to currentUser var(assuming)
  	this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(){
  	this.authenticationService.logout();
  	this.router.navigate(['/login']);
  }


}
