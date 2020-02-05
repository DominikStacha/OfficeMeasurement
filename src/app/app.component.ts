import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationConstant } from './shared/constants/navigation.constant';
import { NavigationItem } from './shared/models/navigation-item.model';
import { ProgressBarService } from './shared/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public get navItems(): NavigationItem[] {
    return NavigationConstant;
  }

  constructor(
    private _router: Router,
    public _progressBarService: ProgressBarService
  ) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  home(): void {
    this._router.navigate(['']);
  }
}
