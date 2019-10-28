import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AxisLabelsFormatterContextObject, FormatterCallbackFunction, SeriesOptionsType, TitleOptions } from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ChartPoint } from '../shared/models/chart-point';
import { Sensor } from '../shared/models/sensor';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  _sensor: Sensor;
  @Input() set sensor(value: Sensor) {
    this._sensor = value;

    //update title text
    if (!this.chart) return;
    this.chart.ref.setTitle({
      text: this.chartTitleText
    } as TitleOptions);
  }
  @Input() chartType: 'temperature' | 'humidity' | 'airPollution' = 'temperature';
  @Input() dataSubject: BehaviorSubject<ChartPoint[]>;
  get data(): ChartPoint[] {
    return this.dataSubject.value;
  }

  chart: Chart;

  private get chartTitleText(): string {
    if (!this._sensor) return "Loading data..";
    return this._sensor.name + " - " + this.yAxisName;
  }

  private get yAxisName(): string {
    if (this.chartType == 'temperature') {
      return 'Teplota';
    } else if (this.chartType == 'humidity') {
      return 'Vlhkost';
    } else if (this.chartType == 'airPollution') {
      return 'Znečištění vzduchu';
    }
  }

  private get yAxisFormatterFunction(): FormatterCallbackFunction<AxisLabelsFormatterContextObject> {
    if (this.chartType == 'temperature') {
      return function () {
        return this.value + ' °C';
      }
    } else if (this.chartType == 'humidity') {
      return function () {
        return this.value + ' %';
      }
    } else if (this.chartType == 'airPollution') {
      return function () {
        return this.value + ' PPM';
      }
    }
  }

  constructor(
    private measurementService: MeasurementService
  ) {

  }

  ngOnInit(): void {
    this.initChart();
    this.dataSubject.pipe(filter(chartData => !!chartData)).subscribe(chartData => {
      this.setChartData(chartData);
    })
  }

  initChart(): void {
    this.chart = new Chart({
      chart: {
        type: 'area'
      },

      title: {
        text: this.chartTitleText
      },

      tooltip: {
        xDateFormat: "%H:%M:%S  %d.%m.%Y"
      },

      credits: {
        enabled: false
      },

      xAxis: {
        title: {
          text: 'Čas měření'
        },
        type: 'datetime'
      },

      yAxis: {
        title: {
          text: this.yAxisName
        },
        labels: {
          formatter: this.yAxisFormatterFunction
        }
      }
    });
  }

  setChartData(chartData: ChartPoint[]): void {
    //remove previous data serie
    this.chart.removeSeries(0);

    //add new data serie
    this.chart.addSeries({
      name: this.yAxisName,
      showInLegend: false,
      data: chartData
    } as SeriesOptionsType, true, true);
  }
}
