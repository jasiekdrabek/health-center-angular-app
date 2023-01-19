import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.user = this.userService.userValue
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  title = 'health-center-angular-app';  
  user!: User | undefined

}
