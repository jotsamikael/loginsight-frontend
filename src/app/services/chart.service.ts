import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class ChartService {
//graph
  public canvas: any;
  public ctx: any;

  public MONTH_LABELS: any = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  constructor() { }


  /************ create line chart *********/
  public createLineChart(chartId, data) {
    this.canvas = document.getElementById(chartId)
    this.ctx = this.canvas.getContext('2d')



    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.MONTH_LABELS,

        datasets: [{
          label: '',
          data: data,
          backgroundColor: this.getRandomColor(),
          borderColor: "#ffa026",
          fill: false,
          borderWidth: 2,





        }]

      },
      options: {
        legend: {
          display: false
        },

        title: {
          display: false,
          text: '',
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },

        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              min: 0,

              stepSize: 200
            }
          }]
        }
      },




    })





  }

  /*********** Pie chart distribution of transactions */

  public createPieChart(chartId, data) {


    this.canvas = document.getElementById(chartId)
    this.ctx = this.canvas.getContext('2d')

    let chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(data),//Object.keys allows me to extract only text/key values

        datasets: [{
          label: 'Operation Types',
          data: Object.values(data),//Object.values allows me to extract only numerical values
          backgroundColor: Object.values(data).map(this.getRandomColor), //use the function to generate random colors,
          borderColor: "#cecece",
          fill: false,
          borderWidth: 1,

        }]

      },
      options: {
        title: {
          display: true,
          text: '',
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }



    })


  }



/*********************************** CREATE BAR CHART***********************************/
  public createBarChart(chartId, data, labels, stepSize) {
    this.canvas = document.getElementById(chartId)
    this.ctx = this.canvas.getContext('2d')



    let chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,

        datasets: [{
          label: '',
          data: data,
          backgroundColor: this.getRandomColor(),
          borderColor: "#cecece",
          fill: false,
          borderWidth: 1,





        }]

      },
      options: {
        legend: {
          display: false
        },

        title: {
          display: false,
          text: '',
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },

        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              min: 0,

              stepSize: stepSize
            }
          }]
        }
      },




    })





  }




  /****************************************** HELPER FUNCTIONS***********************************************/
  downloadChart(id, ChartName) {
    const imageLink = document.createElement('a')
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    imageLink.download = '' + ChartName + '.jpeg';
    imageLink.href = canvas.toDataURL('image/jpeg', 1)

    imageLink.click();

  }

  /*Format large numbers*/
  formatLargeNumber(number: number): string {
    // check if the number is valid
    if (isNaN(number) || number < 0) {
      return "Invalid number";
    }
    // check if the number is less than a thousand
    if (number < 1000) {
      return number.toString();
    }
    // check if the number is less than a million
    if (number < 1000000) {
      // divide by 1000 and round to one decimal place
      let thousands = Math.round(number / 100) / 10;
      return thousands.toString() + "K";
    } else if (number > 1000000 && number < 1000000000) {
      // divide by 1000000 and round to one decimal place
      let millions = Math.round(number / 10000) / 100;
      return millions.toString() + "M";
    }
    else {
      // divide by 1000000000 and round to one decimal place
      let millions = Math.round(number / 1000000) / 1000;
      return millions.toString() + "B";


    }


  }

  /* REDUCE LONG NUMBERS*/
  reduceDecimal(number: number) {
    return number.toFixed(2);
  }

  /*GENERATE RANDOM COLORS*/
  getRandomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  }
}
