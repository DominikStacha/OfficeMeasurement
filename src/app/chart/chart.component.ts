import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AxisLabelsFormatterContextObject, FormatterCallbackFunction, SeriesOptionsType } from 'highcharts';
import { ChartData } from '../shared/models/chart-data';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartType: 'temperature' | 'humidity' | 'airPollution' = 'temperature';

  private get chartTitleText(): string {
    return 'Senzor 1 - teplota';
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

  chart = new Chart({
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


  constructor(
    private measurementService: MeasurementService
  ) {

  }

  ngOnInit(): void {
    this.measurementService.testTemperatureData().subscribe(data => {
      console.log(data);
      this.chart.addSeries({
        name: 'Teplota',
        showInLegend: false,
        data: data
      } as SeriesOptionsType, true, true);
    });
    //console.log(this.chartElement);
  }

  setChartData(chartData: ChartData): void {

  }
}
