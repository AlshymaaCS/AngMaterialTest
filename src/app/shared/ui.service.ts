import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message, action?, duration?) {
    if (!duration) {
      duration = 3000;
    }
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
}
