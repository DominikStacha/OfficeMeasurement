import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'area'
    },

    title: {
      text: 'Senzor 1 - teplota'
    },

    tooltip: {
      //formatter: this.formatDateLabelTooltip,
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
        text: 'Teplota'
      },
      labels: {
        formatter: function () {
          return this.value + ' °C';
        }
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
}
