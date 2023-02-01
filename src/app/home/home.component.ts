import { Component, OnInit } from '@angular/core';
import { bmi } from '../interfaces/bmi';
import { User } from '../interfaces/user';
import { ClinicalMarkersApiService } from '../services/clinical-markers-api.service';
import { SnackBarMessageService } from '../services/snack-bar-message.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: User | undefined;
  bmi!: Number;
  bmiCharacterisation!: string;
  loadBmi:boolean = false;
  constructor(
    private snackBarMessageService:SnackBarMessageService,
    private userService: UserService,
    private clinicalMarkersApiservice: ClinicalMarkersApiService
  ) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => (this.user = user));
  }

  bmiClick(height: string, weight: string): void {
    this.clinicalMarkersApiservice.getBmi(height, weight).subscribe((res) => {
      const bmi = res as bmi;
      this.bmi = bmi?.bmI_Dubois;
      this.bmiCharacterisation = bmi?.bmI_Dubois_Characterisation;
      if(bmi?.bmI_Dubois) this.loadBmi = true;
      if(!bmi?.bmI_Dubois) this.openSnackBar('Api do not respond')
    });
  }

  openSnackBar(message: string) {
    this.snackBarMessageService.open(message).afterDismissed()    
  }
}
