import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AxisLabelsFormatterContextObject, FormatterCallbackFunction, SeriesOptionsType, TitleOptions } from 'highcharts';
import { ChartPoint } from '../shared/models/chart-point.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: Chart;
  private _data: ChartPoint[];

  @Input() chartType: 'temperature' | 'humidity' | 'airPollution' = 'temperature';
  @Input() set data(value: ChartPoint[]) {
    this._data = value;

    if (this._data)
      this.setChartData(this._data);
  };

  private get _chartTitleText(): string {
    return this._yAxisName;
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
        return 'Temperature';

      case 'humidity':
        return 'Humidity';

      case 'airPollution':
        return 'Air pollution';
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
          text: 'Time'
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
