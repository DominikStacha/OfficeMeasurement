import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AxisLabelsFormatterContextObject, FormatterCallbackFunction, SeriesOptionsType, TitleOptions } from 'highcharts';
import { ChartPoint } from '../shared/models/chart-point.model';
import { Sensor } from '../shared/models/sensor.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private _sensor: Sensor;
  private _data: ChartPoint[];

  chart: Chart;

  @Input() chartType: 'temperature' | 'humidity' | 'airPollution' = 'temperature';
  @Input() set sensor(value: Sensor) {
    this._sensor = value;

    //update title text
    if (!this.chart || !this.chart.ref) return;
    this.chart.ref.setTitle({
      text: this._chartTitleText
    } as TitleOptions);
  }
  @Input() set data(value: ChartPoint[]) {
    this._data = value;

    if (this._data)
      this.setChartData(this._data);
  };


  private get _chartTitleText(): string {
    if (!this._sensor) return "Loading data..";
    return this._sensor.name + " - " + this._yAxisName;
  }

  private get _color(): string {
    switch (this.chartType) {
      case 'temperature':
        return '#2E86C1';

      case 'humidity':
        return '#28B463';

      case 'airPollution':
        return '#F39C12';
    }
  }

  private get _yAxisName(): string {
    switch (this.chartType) {
      case 'temperature':
        return 'Teplota';

      case 'humidity':
        return 'Vlhkost';

      case 'airPollution':
        return 'Znečištění vzduchu';
    }
  }

  private get _yAxisFormatterFunction(): FormatterCallbackFunction<AxisLabelsFormatterContextObject> {
    switch (this.chartType) {
      case 'temperature':
        return function () {
          return this.value + ' °C';
        }

      case 'humidity':
        return function () {
          return this.value + ' %';
        }

      case 'airPollution':
        return function () {
          return this.value + ' PPM';
        }
    }
  }

  constructor() {
    this.initChart();
  }

  ngOnInit(): void {
    this.chart.ref$.subscribe((chart) => {
      this.chart.ref.setTitle({
        text: this._chartTitleText
      } as TitleOptions);
    });
  }

  initChart(): void {
    this.chart = new Chart({
      chart: {
        type: 'area'
      },

      title: {
        text: this._chartTitleText
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
          text: this._yAxisName
        },
        labels: {
          formatter: this._yAxisFormatterFunction
        }
      }
    });
  }

  setChartData(chartData: ChartPoint[]): void {
    //remove previous data serie
    this.chart.removeSeries(0);

    //add new data serie
    this.chart.addSeries({
      name: this._yAxisName,
      showInLegend: false,
      data: chartData,
      color: this._color
    } as SeriesOptionsType, true, true);
  }
}
