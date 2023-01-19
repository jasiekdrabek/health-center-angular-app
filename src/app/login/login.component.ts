import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private userService : UserService){}
  async loginClick(login : string,password:string): Promise<void>{
    login = login.trim()
    password = password.trim()
    if(!login || !password) return
    this.userService.getUsers().subscribe((users) => {
      const user = users.find(
        (x) => x.login === login && x.password === password
      );
      console.log(user)
      if (!user) return
      if(user){
      this.userService.setUserValue(user)
      console.log(this.userService.userValue)     
      this.router.navigate(['/']);
      }    
  });
  }
}
