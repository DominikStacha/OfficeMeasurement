import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationConstant } from './shared/constants/navigation.constant';
import { NavigationItem } from './shared/models/navigation-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public get navItems(): NavigationItem[] {
    return NavigationConstant;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
