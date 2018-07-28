<template>
  <highcharts :options="demo" ref="highcharts"></highcharts>
   

</template>
<script src = "data/Airport_A.js"></script>
<script src = "data/Airport_B.js"></script>

<script>
import Highcharts from "highcharts";
//import airport_A from "./data/Airport_A";
//import airport_B from "./data/Airport_B";
//import Airport_A from './data/Airport_A';

//alert(airport_A.length);
//alert(JSON.stringify(airport_A[1]['B']));
var options = {
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },
  title: {
    text: "不稳定进近发生热力图"
  },

  xAxis: {
    categories: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
    crosshair: true,
    text: "日期"
  },
  yAxis: {
    categories: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],

    title: {
      text: "小时"
    }
  },
  // xAxis: {
  // 		categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
  // },
  // yAxis: {
  // 		categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  // 		title: null
  // },

  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} 次</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  credits: {
    enabled: false
  },

  series: [
    {
     
      // data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
    }
  ]
};

export default {
  props: {
    airportNameHot: {
      type: String,
      default: "ZPJH"
    }
  },

  watch: {
    airportNameHot: function(newValue, oldValue) {
      //alert(newValue.toString());
      //this.try(newValue)
      this.initChart(newValue);
    }
  },
  methods: {
    //    try(temp){
    //        alert(temp)
    //    },
    initChart(airport) {
      var airport_A = require("./data/Airport_A.json");
      var airport_B = require("./data/Airport_B.json");
      var plane_B = require("./data/B_3D_Addtu_date.json");
      var plane_A = require("./data/A_3D_Addtu_date.json")
      var Adata = new Array();
      var Bdata = new Array();
      var HotB = new Array(31);
      var HotA = new Array();
      for (var k = 0; k < 31; k++) {
        HotB[k] = new Array(24);
      }

      for (var j = 0; j < 31; j++) {
        for (var hour = 0; hour <= 23; hour++) {
          HotB[j][hour] = 0;
        }
      }
      for (var i = 0; i < plane_B.length; i++) {
        var temp = plane_B[i];
        var data = temp["B"];

        if (data == airport.toString()) {
          // alert(data);
          for (var j = 0; j < 31; j++) {
            for (var hour = 0; hour <= 23; hour++) {
              if (
                parseInt(temp["UTC_HOUR"]) == hour &&
                parseInt(temp["day"]) == j + 1
              ) {
                HotB[j][hour] = HotB[j][hour] + 1;
              }
            }
          }
        }
      }

      for (var i = 0; i < plane_A.length; i++) {
        var temp = plane_A[i];
        var data = temp["B"];

        if (data == airport.toString()) {
          // alert(data);
          for (var j = 0; j < 31; j++) {
            for (var hour = 0; hour <= 23; hour++) {
              if (
                parseInt(temp["UTC_HOUR"]) == hour &&
                parseInt(temp["day"]) == j + 1
              ) {
                HotB[j][hour] = HotB[j][hour] + 1;
              }
            }
          }
        }
      }



      //  for(var i  = 0;i<airport_B.length;i++){
      //  // alert(airport_B.length);
      //    var temp = (airport_B[i]);
      //    var data= (temp["B"]);

      //     if(data==airport.toString()){
      //         for(var j = 0 ; j<31 ; j++){
      //             var date = 20180101+j;
      //             date = "X"+date;
      //            Bdata[j] = parseInt((temp[date]));

      //         }
      //     }

      // }
      //alert(Adata);
      //alert(Bdata);
      //变量增删
      console.log("HotB", HotB)
      var tempHotB = []
      for (i = 0; i < 31; i++) {
        for (j = 0; j < 24; j++) {
          tempHotB.push([i + 1, j + 1, HotB[i][j]])
        }
      }
      options = {
        chart: {
          type: "heatmap",
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
        },
        title: {
          text: "不稳定进近发生热力图"
        },

        xAxis: {
          categories: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
          crosshair: true,
          title: {
            text: "日期"
          }
        },
        yAxis: {
          categories: [ "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6", "7"],

          title: {
            text: "小时"
          }
        },
        // xAxis: {
        // 		categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        // },
        // yAxis: {
        // 		categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        // 		title: null
        // },

        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} 次</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        credits: {
          enabled: false
        },
        
        colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
        },
        legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
          y: 25,
          symbolHeight: 280,
          reversed: true
        },

        series: [
          {
            
            data: tempHotB,

          }
        ]
      };
      this.demo = options;
    }
  },

  data() {
    return {
      demo: options
    };
  }
};
</script>