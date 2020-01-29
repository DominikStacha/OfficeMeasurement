import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private _snackBar: MatSnackBar) {

  }

  public open(message: string, duration: number = 2000) {
    this._snackBar.open(message, 'OK', {
      duration: duration
    });
  }
}
