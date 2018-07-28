<template>

  <highmaps :options="smallmap"></highmaps>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.6/proj4.js"></script>
<script src="https://data.jianshukeji.com/geochina/china.js"></script>
<script>
import Proj4 from 'proj4';
window.proj4 = Proj4;

const chinamap = require('../assets/china.json')
var airport_A=  require('./charts/data/Airport_A.json');
var airport_B = require('./charts/data/Airport_B.json');

var mapChina = require("./charts/data/bou_9_2.json")
// var options = {
//   chart: {
//     borderWidth: 1
//   },
//   title: {
//     text: '不稳定进近发生分布图'
//   },
//   subtitle: {
//     text: '日期：1月1日'
//   },
//   legend: {
//     enabled: false
//   },
//   series: [{
//     name: 'Country',
//     mapData: chinamap,
//     data: [
//       ['cn-3664', 0],
//       ['cn-gd', 1],
//       ['cn-sh', 2],
//       ['cn-zj', 3],
//       ['cn-ha', 4],
//       ['cn-xz', 5],
//       ['cn-yn', 6],
//       ['cn-ah', 7],
//       ['cn-hu', 8],
//       ['cn-sa', 9],
//       ['cn-cq', 10],
//       ['cn-gz', 11],
//       ['cn-hn', 12],
//       ['cn-sc', 13],
//       ['cn-sx', 14],
//       ['cn-he', 15],
//       ['cn-jx', 16],
//       ['cn-nm', 17],
//       ['cn-gx', 18],
//       ['cn-hl', 19],
//       ['cn-fj', 20],
//       ['cn-bj', 21],
//       ['cn-hb', 22],
//       ['cn-ln', 23],
//       ['cn-sd', 24],
//       ['cn-tj', 25],
//       ['cn-js', 26],
//       ['cn-qh', 27],
//       ['cn-gs', 28],
//       ['cn-xj', 29],
//       ['cn-jl', 30],
//       ['cn-nx', 31]
//     ],
//     dataLabels: {
//       enabled: true,
//       color: '#FFFFFF',
//       formatter: function () {
//         if (this.point.value) {
//           return this.point.name;
//         }
//       }
//     },
//     tooltip: {
//       headerFormat: '',
//       pointFormat: '{point.name}'
//     }
//   }]
// };
var data = new Array();
for(var i = 0;i<airport_A.length;i++){
     var temp = airport_A[i];
    data[i]={
      lat:parseFloat(temp['lat']),
      lon:parseFloat(temp['lon']),
      color:"#ff9999",
      name:temp['机场名字']

      };
    
    


}

var map ={
  title:{
    text:'不稳定进近每日情况分布图'
  },
  mapNavigation:{
    enabled:true,
    buttonOptions:{
      verticalAlign:'bottom'
      }
  },
  tooltip:{
    useHTML:true,
    formatter:function(){

      return this.point.name;
    }
  },
  plotOptions:{
      series:{
          enabled:false
      },
      marker:{
        radius:3
      }


  },
  series:[{
    mapData:mapChina,
    showInLegend:false
  },
{
  type:'mappoint',
  data:data
}
  ]
};

export default {
   props:{
     
    date: {
      type: Number,
      default: 1

    }
   


  },

  watch:{
    date:function(newValue, oldValue){
        //alert(newValue.toString());
        //this.try(newValue)
        this.initMap(newValue);
        
        
    }
   
    
  },
  methods:{
    initMap(date){


      //十六进制颜色值的正则表达式
		var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		/*RGB颜色转换为16进制*/
		String.prototype.colorHex = function () {
			var that = this;
			if (/^(rgb|RGB)/.test(that)) {
				var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
				var strHex = "#";
				for (var i = 0; i < aColor.length; i++) {
					var hex = Number(aColor[i]).toString(16);
					if (hex === "0") {
						hex += hex;
					}
					strHex += hex;
				}
				if (strHex.length !== 7) {
					strHex = that;
				}
				return strHex;
			} else if (reg.test(that)) {
				var aNum = that.replace(/#/, "").split("");
				if (aNum.length === 6) {
					return that;
				} else if (aNum.length === 3) {
					var numHex = "#";
					for (var i = 0; i < aNum.length; i += 1) {
						numHex += (aNum[i] + aNum[i]);
					}
					return numHex;
				}
			} else {
				return that;
			}
		};

		String.prototype.colorRgb = function () {
			    var sColor = this.toLowerCase();
			    if (sColor && reg.test(sColor)) {
				        if (sColor.length === 4) {
					            var sColorNew = "#";
					            for (var i = 1; i < 4; i += 1) {
						                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
					            }
					            sColor = sColorNew;
				        }
				        //处理六位的颜色值
				        var sColorChange = [];
				        for (var i = 1; i < 7; i += 2) {
					            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
				        }
				return "RGB(" + sColorChange.join(",") + ")";
			} else {
				return sColor;
			}
		};



        var data = new Array();
        var j = 0;
      for(var i = 0;i<airport_A.length;i++){
          var temp = airport_A[i];
          var dateTemp = 20180100+parseInt(date);
          var newTemp = "X"+dateTemp;
          var col = parseInt(temp[newTemp]);
          if (col>15){
              var colTemp = "#FF0000";

          }
          else if(col>10){
              var colTemp = "#FF4500";
          }
          else if(col>5){
              var colTemp = "#ffa8a8";
          }
           else if(col>2){
              var colTemp = "#ffb2b2";
          }
          else{
            var colTemp = "#ffbcbc";
          
          }
        //  alert(parseInt(temp[newTemp]));
        if(col!=0){
          data[j]={
            lat:parseFloat(temp['lat']),
           lon:parseFloat(temp['lon']),
           airport:'不稳定进近数量：'+col,
          // radius:col,
           //size:parseInt(temp[newTemp])
           //color:"RGB(100,100,"+(100-col*10)+")".colorHex()
           name:(temp['机场名字']),
           color:colTemp
           };
           j = j+1;
        }
      }
     map ={
  title:{
    text:'不稳定进近每日情况分布图'
    
  },
  mapNavigation:{
    enabled:true,
    buttonOptions:{
      verticalAlign:'bottom'
      }
  },
  tooltip:{
    useHTML:true,
    // formatter:function(){

    //   return this.point.name;
    // }
    pointFormat: '<b>{point.airport}</b><br>Lat: {point.lat}, Lon: {point.lon}'
  },
  plotOptions:{
      series:{
          enabled:false
      },
      marker:{
        radius:2
      }


  },
  series:[{
    mapData:mapChina,
    //borderColor:'#A0A0A0',
    //nullColor:'rgba(200,200,200,0.3)',
    showInLegend:false
  },
{
  type:'mappoint',
  data:data,
  name :'不稳定进近'
}
  ]
};
this.smallmap = map;
    }

  },

  data() {
    return {
      smallmap: map
    };
  }
};


</script>