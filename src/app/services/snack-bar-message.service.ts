import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Injectable()
export class SnackBarMessageService {

  constructor(private snackBar: MatSnackBar) {}


  open(message: string) {
    const action= 'ok'
    return this.snackBar.openFromComponent(SnackBarComponent, {
       data: {message, action },
      duration: 5 * 1000
    });
  }
}
