import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RegistrationComponent,    
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class RegistrationModule {}
