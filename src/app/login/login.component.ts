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
  loginClick(login : string,password:string) :void{
    login = login.trim()
    password = password.trim()
    if(!login || !password) return
    this.userService.getUsers().subscribe((users) => {
      const user = users.find(
        (x) => x.login === login && x.password === password
      );
      if (!user) return
      if(user){
      this.userService.setUserValue(user)   
      this.router.navigate(['/home']);
      localStorage.setItem('user',JSON.stringify(user))
      }    
  });
  }
}
