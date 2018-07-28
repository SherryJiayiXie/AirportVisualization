<template>
  <highcharts :options="demo" ref="highcharts"></highcharts>
</template>

<script>
// var options = {
//  chart : {
//       type: 'bubble',
//       zoomType: 'xy'
//    },
//   title :{
//       text: 'Highcharts Bubbles'   
//    },   
//  series : [{
//             data: [[97, 36, 79], [94, 74, 60], [68, 76, 58], [64, 87, 56], [68, 27, 73], [74, 99, 42], [7, 93, 87], [51, 69, 40], [38, 23, 33], [57, 86, 31]]
//         }, {
//             data: [[25, 10, 87], [2, 75, 59], [11, 54, 8], [86, 55, 93], [5, 3, 58], [90, 63, 44], [91, 33, 17], [97, 3, 56], [15, 67, 48], [54, 25, 81]]
//         }, {
//             data: [[47, 47, 21], [20, 12, 4], [6, 76, 91], [38, 30, 60], [57, 98, 64], [61, 17, 80], [83, 60, 13], [67, 78, 75], [64, 12, 10], [30, 77, 82]]
//       }
//    ],   

// };
var options = {
  title: {
    text: "天气情况折线图",
    x: -20 //center
  },
  subtitle: {
    text: "数据来源: 天气网",
    x: -20
  },
  xAxis: {
   categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      
  },
  yAxis: {
    title: {
      text: "风力等级"
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080"
      }
    ]
  },
  tooltip: {
    valueSuffix: ""
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0
  },
  series: [
    {
      name: "风力等级",
      data: [2,3,2,1,2,2,1,2,1,2,1,3,2,1,4,2,5,0,3,1,1,2,1,2,0,1,2,4,3,1,3]
    },
    {
      name: "AQI等级",
      data: [1,2,1,0,1,1,3,2,1,2,1,2,1,1,2,2,5,0,3,1,1,1,1,3,0,1,1,3,1,1,1]
    }
  ]
};
export default {
  props:{
     
    airportNameBub: {
      type: String,
      default: 'ZPJH'
}
    },

    watch:{
    airportNameBub:function(newValue, oldValue){
        //alert(newValue.toString());
        //this.try(newValue)
        this.initChart(newValue);
        
    }
    },
    methods:{

//    try(temp){
//        alert(temp)
//    },
    initChart(airport){
     var airport_A=  require('./data/Airport_A.json');
    var airport_B = require('./data/Airport_B.json');
     var Adata= new Array();
     var Bdata =new Array();
  
      for(var i  = 0;i<airport_A.length;i++){
          var temp = (airport_A[i]);
          var data= (temp["B"]);
          //alert(data);
          if(data==airport.toString()){
            //alert("good");
              for(var j = 0 ; j<31 ; j++){

                  var date = 20180101+j;
                  var fengli = "风力"+date;
                   
                  //alert(temp[date]);
                  Adata[j] = parseInt((temp[fengli]));

                  var aqiLevel = "aqiLevel"+date;
                  Bdata[j]= parseInt((temp[aqiLevel]));
               //alert(Adata);
              }
              
          }

      }
      
      


      var options = {
  title: {
    text: "大风天气情况折线图",
    x: -20 //center
  },
  subtitle: {
    text: "数据来源: 天气网",
    x: -20
  },
  xAxis: {
   categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      
  },
  yAxis: {
    title: {
      text: "等级"
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080"
      }
    ]
  },
  tooltip: {
    valueSuffix: ""
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0
  },
  series: [
    {
      name: "风力等级",
      data: Adata
    },
     {
      name: "AQI等级",
      data: Bdata
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