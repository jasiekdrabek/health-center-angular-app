import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  user : User | undefined
  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => this.user = user)
  }

}
