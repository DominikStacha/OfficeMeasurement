import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  _visibleCount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {

  }

  show(): void {
    this._visibleCount.next(this.loadingCount + 1);
  }

  hide(): void {
    if (this.loadingCount == 0) return;
    this._visibleCount.next(this.loadingCount - 1);
  }

  reset(): void {
    this._visibleCount.next(0);
  }

  public get loadingCount(): number {
    return this._visibleCount.value;
  }

  public get isVisible(): boolean {
    return this._visibleCount.value > 0;
  }
}
