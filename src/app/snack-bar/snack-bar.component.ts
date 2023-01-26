import { Component, Inject, ViewEncapsulation } from "@angular/core";
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef
} from "@angular/material/snack-bar";

@Component({
  selector: "snack-bar-component",
  templateUrl: "./snack-bar.component.html",
  styleUrls: ["./snack-bar.component.css"], 
  encapsulation: ViewEncapsulation.None,
})
export class SnackBarComponent {
  progress = 100;
  private currentIntervalId!: any ;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<SnackBarComponent>
  ) {
    this.snackBarRef.afterOpened().subscribe(
      () => {
        this.runProgressBar();
      },
      error => console.error(error)
    );
  }

  dismissWithAction() {
    this.cleanProgressBarInterval();
    this.snackBarRef.dismissWithAction();
  }

  
  runProgressBar() {
    this.progress = 100;
    const step = 0.005;
    this.cleanProgressBarInterval();
    this.currentIntervalId = setInterval(() => {
      this.progress -= 100 * step;
      if (this.progress < 0) {
        this.cleanProgressBarInterval();
      }
    }, 4999 * step);
  }

  cleanProgressBarInterval() {
    clearInterval(this.currentIntervalId);
  }
}
