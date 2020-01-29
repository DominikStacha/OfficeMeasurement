import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorPreviewComponent } from './sensor-preview.component';

describe('SensorPreviewComponent', () => {
  let component: SensorPreviewComponent;
  let fixture: ComponentFixture<SensorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
