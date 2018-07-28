<template>
  <highcharts :options="demo" ref="highcharts"></highcharts>
</template>
<script src = "data/Airport_A.js"></script>
<script src = "data/Airport_B.js"></script>
<script>
//import airport_A from "./data/Airport_A";
//import airport_B from "./data/Airport_B";
//import Airport_A from './data/Airport_A';

//alert(airport_A.length);
//alert(JSON.stringify(airport_A[1]['B']));
var options = {
  chart : {
      type: 'column'
   },
  title : {
      text: '不稳定进近发生情况'   
   },
 subtitle : {
      text: '一月份情况'  
   },
   xAxis :{
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
      crosshair: true
   },
    yAxis : {
      min: 0,
      title: {
         text: '不稳定进近发生次数'         
      }      
   },
    tooltip : {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f} 次</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   },
    plotOptions :{
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
   credits : {
      enabled: false
   },
   
   series : [{
        name: '空客飞机',
            data: [2,3,2,1,2,2,0,2,1,8,1,6,2,1,4,2,5,0,3,0,0,2,1,2,0,1,2,4,3,0,10]
        }, {
            name: '波音飞机',
            data:[2,3,2,1,2,2,0,2,1,8,1,6,2,1,4,2,5,0,3,0,0,2,1,2,0,1,2,4,3,0,10]
        }],    

};

export default {
  props:{
     
    airportNameBar: {
      type: String,
      default: 'ZPJH'

    }
   


  },

  watch:{
    airportNameBar:function(newValue, oldValue){
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
                  date = "X"+date;
                   
                  //alert(temp[date]);
                  Adata[j] = parseInt((temp[date]));
               //alert(Adata);
              }
              
          }

      }
      
       for(var i  = 0;i<airport_B.length;i++){
       // alert(airport_B.length);
         var temp = (airport_B[i]);
         var data= (temp["B"]);
         
          if(data==airport.toString()){
              for(var j = 0 ; j<31 ; j++){
                  var date = 20180101+j;
                  date = "X"+date;
                 Bdata[j] = parseInt((temp[date]));
                 
              }
          }

      }
//alert(Adata);
//alert(Bdata);
    //变量增删
   options = {
  chart : {
      type: 'column'
   },
  title : {
      text: '不稳定进近发生情况'   
   },
 subtitle : {
      text: '一月份情况'  
   },
   xAxis :{
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
      crosshair: true
   },
    yAxis : {
      min: 0,
      title: {
         text: '不稳定进近发生次数'         
      }      
   },
    tooltip : {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f} 次</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   },
    plotOptions :{
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
   credits : {
      enabled: false
   },
   
   series : [{
        name: '空客飞机',
            data: Adata
        }, {
            name: '波音飞机',
            data : Bdata
        }],    

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