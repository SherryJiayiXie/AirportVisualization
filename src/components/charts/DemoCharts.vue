<template>
 <div>
   <el-button plain="true" @click="openHTML(airportNamePieB) ">波音飞机诊断单</el-button>
  <highcharts :options="demo" ref="highcharts">
   
  </highcharts>
  
  </div>
</template>
<script src = "data/Airport_A.js"></script>
<script src = "data/Airport_B.js"></script>
<script>
var options = {
chart :{
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
   },
  title : {
      text: '不稳定进近（波音飞机）'   
   },    
   tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
 plotOptions :{
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
            style: {
               color: 'black'
            }
         }
      }
   },
  series : [{
      type: 'pie',
      name: '不同风力等级不稳定进近',
      data: [
         ['微风',   5],
         ['1~2级风',       3],
          ['3~4级风',      10],
         ['4~5级风',    3],
         ['5~6级风',     10],
         ['6~7级风',   0]
      ]
   }],     
      


};
export default {
 props:{
     
    airportNamePieB: {
      type: String,
      default: 'ZPJH'

    }
  },
 watch:{
    airportNamePieB:function(newValue, oldValue){
        //alert(newValue.toString());
        //this.try(newValue)
        this.initChart(newValue);
      //  this.openHTML(newValue);
        
    }  
  },
methods:{
    openHTML(airportNamePieB) {

        var detail_A = require("./data/一月份机场数据_Baddreason.json");
        for(var i = 0;i<detail_A.length;i++){
            var temp= detail_A[i];
            var data= (temp["B"]);
          //alert(data);
          if(data==airportNamePieB.toString()){
            var ias_overrun = temp['ias_overrun'];
            var ivv_overrun = temp['ivv_overrun'];
            var ldg_overrun = temp['ldg_overrun'];
            var glide_overrun = temp['glide_overrun'];
            var flap_overrun = temp['flap_overrun'];
            var spoil_overrun = temp['spoil_overrun'];
            var roll_overrun = temp['roll_overrun'];
            var n11_overrun = temp['n11_overrun'];

          }

      
        }


       this.$alert('<strong>空速超速频次：'+ias_overrun+'</strong><br /><strong>惯性垂直速度超速频次：'+ivv_overrun+'</strong><br /><strong>着陆形态错误频次：'+ldg_overrun+'</strong><br /><strong>坡度超限频次：'+glide_overrun+'</strong><br /><strong>减速板未收回频次：'+flap_overrun+'</strong><br /><strong>减速板角度超限频次：'+spoil_overrun+'</strong><br /><strong>滚角超限频次：'+roll_overrun+'</strong><br /><strong>推力偏差超过基准曲线标准超限频次：'+n11_overrun+'</strong><br />', 
       '波音飞机不稳定进近诊断单', {
         dangerouslyUseHTMLString: true,

          
        });
 
      


        
      },
//    try(temp){
//        alert(temp)
//    },
    initChart(airport){
     var airport_A=  require('./data/Airport_A.json');
    var airport_B = require('./data/Airport_B.json');
     var Adata= [
         ['微风',   5],
         ['1~2级风',       3],
          ['3~4级风',      10],
         ['4~5级风',    3],
         ['5~6级风',     10],
         ['6~7级风',   0]
      ];
     var Bdata =new Array();
  
      for(var i  = 0;i<airport_B.length;i++){
          var temp = (airport_B[i]);
          var data= (temp["B"]);
          //alert(data);
          if(data==airport.toString()){
            //alert("good");
              // for(var j = 0 ; j<31 ; j++){

              //     var date = 20180101+j;
              //     date = "X"+date;
                   
              //     //alert(temp[date]);
              //     Adata[j] = parseInt((temp[date]));
               //alert(Adata);
               Adata[0][1] = parseInt(temp["fenglione"]);
               Adata[1][1]= parseInt(temp["fenglitwo"]);
               Adata[2][1]= parseInt(temp["fenglithree"]);
               Adata[3][1] = parseInt(temp["fenglifour"]);
               Adata[4][1]= parseInt(temp["fenglifive"]);
               Adata[5][1] = parseInt(temp["fenglisix"]);
              }
              
          }
  //alert(Adata);
 options = {
chart :{
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
   },
  title : {
      text: '不稳定进近（波音飞机）'   
   },    
   tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
 plotOptions :{
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
            style: {
               color: 'black'
            }
         }
      }
   },
  series : [{
      type: 'pie',
      name: '不同风力等级不稳定进近',
      data:[
         ['微风',   Adata[0][1]],
         ['1~2级风',  Adata[1][1]],
         ['3~4级风', Adata[2][1]],
         ['4~5级风', Adata[3][1]],
         ['5~6级风', Adata[4][1]],
         ['6~7级风', Adata[5][1]]
      ]
   }],     
    
};   
this.demo = options;

      }

    } ,

  data() {
    return {
      demo: options
    };
  }
};
</script>