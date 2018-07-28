<template>
  <div id="cesium-container" style="width: 100%;"></div>
</template>

<script>
import Cesium from "cesium/Cesium";
import widgets from "cesium/Widgets/widgets.css";
export default {
  name: "CesiumViewer",
  data() {
    return {
      viewer: {}
    };
  },
  props: {
    airport: {
      type: String,
      default: "北京国际机场"
    }
  },

  watch: {
    airport: function(newValue, oldValue) {
      //alert(newValue.toString());
      //this.try(newValue)
      this.initAirport(newValue);
    }
  },
  methods: {
    initAirport(airport) {
    //   if(airport=="ZBAA"){
    //   var lonlat = new Array();
    //   var airport_A = require("./charts/data/Airport_A.json");
    //   for (var i = 0; i < airport_A.length; i++) {
    //     var temp = airport_A[i];
    //     var data = temp["B"];
    //     if (data == airport.toString()) {
    //       //  alert(airport);
    //       lonlat[0] = temp["lon"] * 1;
    //       lonlat[1] = temp["lat"] * 1;
    //       lonlat[2] = temp["机场名字"];
    //     }
    //   }
    //   //  alert(lonlat);
    //   var airline = require("./charts/data/temp_pchip.json");
    //   var temp = airline[0];
    //   var newtime = temp["UTC_MIN_SEC"].split(":");
    //   var start = Cesium.JulianDate.fromDate(
    //     new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
    //   );
    //   // this.viewer = new Cesium.Viewer('cesium-container');
    //   var ekb = this.viewer.entities.add({
    //     name: lonlat[2],
    //     // Lon, Lat coordinates
    //     position: Cesium.Cartesian3.fromDegrees(lonlat[0], lonlat[1], 3000),
    //     // Styled geometry
    //     point: {
    //       pixelSize: 5,
    //       color: Cesium.Color.RED
    //     },
    //     // Labeling
    //     label: {
    //       text: lonlat[2],
    //       font: "16pt monospace",
    //       style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    //       outlineWidth: 2,
    //       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    //       pixelOffset: new Cesium.Cartesian2(0, -9)
    //     }
    //   });
    //   var initialPosition = Cesium.Cartesian3.fromDegrees(
    //     temp["LONPC"] * 1,
    //     temp["LATPC"] * 1,
    //     2000
    //   );

    //   this.viewer.scene.camera.setView({
    //     destination: initialPosition
    //   });
    //   // How to place camera around point
    //   var heading = Cesium.Math.toRadians(0);
    //   var pitch = Cesium.Math.toRadians(-30);
    //   //this.viewer.zoomTo(ekb, new Cesium.HeadingPitchRange(heading, pitch, 10000));

    //   var unstable = new Cesium.SampledPositionProperty();
    //   //var tempTime = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
    //   var max = 0;
    //   for (var i = 0; i < airline.length; i++) {
    //     var temp = airline[i];
    //     var newtime = temp["UTC_MIN_SEC"].split(":");
    //     if (temp["RALT1"] > 0) {
    //       if (i > max) {
    //         max = i;
    //       }
    //       var timePoint = Cesium.JulianDate.fromDate(
    //         new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
    //       );
    //       var position = Cesium.Cartesian3.fromDegrees(
    //         temp["LONPC"] * 1,
    //         temp["LATPC"] * 1,
    //         temp["RALT1"] * 1.5 + 5
    //       );

    //       unstable.addSample(timePoint, position);
    //     }
    //   }

    //   //alert(newtime);
    //   var temp = airline[max];
    //   var newtime = temp["UTC_MIN_SEC"].split(":");
    //   var stop = Cesium.JulianDate.fromDate(
    //     new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
    //   );
    //   // alert(newtime);
    //   ////Make sure viewer is at the desired time.
    //   this.viewer.clock.startTime = start.clone();
    //   this.viewer.clock.stopTime = stop.clone();
    //   this.viewer.clock.currentTime = start.clone();
    //   this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
    //   this.viewer.clock.multiplier = 1;

    //   this.viewer.timeline.zoomTo(start, stop);

    //   var entity_new = this.viewer.entities.add({
    //     //Set the entity availability to the same interval as the simulation time.
    //     availability: new Cesium.TimeIntervalCollection([
    //       new Cesium.TimeInterval({
    //         start: start,
    //         stop: stop
    //       })
    //     ]),

    //     //计算出每一个点的位置
    //     position: unstable,

    //     //自动跟着运动调整机型位置
    //     //但是飞机的头摆不过来

    //     // orientation : new Cesium.VelocityOrientationProperty(unstable),
    //     //orientation:orientation_aircraft,
    //     //Load the Cesium plane model to represent the entity
    //     model: {
    //       uri: "/static/model/airplane.gltf",
    //       //heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
    //       scale: 0.001
    //       // color:Cesium.Color.WHITE

    //       //minimumPixelSize : 64
    //     },
    //     //Show the path as a pink line sampled in 1 second increments.
    //     path: {
    //       resolution: 1,
    //       material: new Cesium.PolylineGlowMaterialProperty({
    //         glowPower: 0.1,
    //         color: Cesium.Color.WHITE
    //       }),
    //       width: 5
    //     }
    //   });
    //   entity_new.position.setInterpolationOptions({
    //     interpolationDegree: 5,
    //     interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
    //   });
    // }


   
      var lonlat = new Array();
      var airport_A = require("./charts/data/Airport_A.json");
      for (var i = 0; i < airport_A.length; i++) {
        var temp = airport_A[i];
        var data = temp["B"];
        if (data == airport.toString()) {
          //  alert(airport);
          lonlat[0] = temp["lon"] * 1;
          lonlat[1] = temp["lat"] * 1;
          lonlat[2] = temp["机场名字"];
        }
      }
       if(airport=="ZBAA"){
      //  alert(lonlat);
      var airline = require("./charts/data/temp_pchip.json");
       }
       else if(airport=="ZHHH") {

        var airline  = require("./charts/data/temp2.json")
       }
      var temp = airline[0];
      var newtime = temp["UTC_MIN_SEC"].split(":");
      var start = Cesium.JulianDate.fromDate(
        new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
      );
      // this.viewer = new Cesium.Viewer('cesium-container');
      var ekb = this.viewer.entities.add({
        name: lonlat[2],
        // Lon, Lat coordinates
        position: Cesium.Cartesian3.fromDegrees(lonlat[0], lonlat[1], 3000),
        // Styled geometry
        point: {
          pixelSize: 5,
          color: Cesium.Color.RED
        },
        // Labeling
        label: {
          text: lonlat[2],
          font: "16pt monospace",
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -9)
        }
      });
      var initialPosition = Cesium.Cartesian3.fromDegrees(
        temp["LONPC"] * 1,
        temp["LATPC"] * 1,
        2000
      );

      this.viewer.scene.camera.setView({
        destination: initialPosition
      });
      // How to place camera around point
      var heading = Cesium.Math.toRadians(0);
      var pitch = Cesium.Math.toRadians(-30);
      //this.viewer.zoomTo(ekb, new Cesium.HeadingPitchRange(heading, pitch, 10000));

      var unstable = new Cesium.SampledPositionProperty();
      //var tempTime = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
      var max = 0;
      for (var i = 0; i < airline.length; i++) {
        var temp = airline[i];
        var newtime = temp["UTC_MIN_SEC"].split(":");
        if (temp["RALT1"] > 0) {
          if (i > max) {
            max = i;
          }
          var timePoint = Cesium.JulianDate.fromDate(
            new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
          );
          var position = Cesium.Cartesian3.fromDegrees(
            temp["LONPC"] * 1,
            temp["LATPC"] * 1,
            temp["RALT1"] * 1.5 + 5
          );

          unstable.addSample(timePoint, position);
        }
      }

      //alert(newtime);
      var temp = airline[max];
      var newtime = temp["UTC_MIN_SEC"].split(":");
      var stop = Cesium.JulianDate.fromDate(
        new Date(2018, 0, 1, 21, newtime[1] * 1, newtime[2] * 1)
      );
      // alert(newtime);
      ////Make sure viewer is at the desired time.
      this.viewer.clock.startTime = start.clone();
      this.viewer.clock.stopTime = stop.clone();
      this.viewer.clock.currentTime = start.clone();
      this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
      this.viewer.clock.multiplier = 1;

      this.viewer.timeline.zoomTo(start, stop);

      var entity_new = this.viewer.entities.add({
        //Set the entity availability to the same interval as the simulation time.
        availability: new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            start: start,
            stop: stop
          })
        ]),

        //计算出每一个点的位置
        position: unstable,

        //自动跟着运动调整机型位置
        //但是飞机的头摆不过来

        // orientation : new Cesium.VelocityOrientationProperty(unstable),
        //orientation:orientation_aircraft,
        //Load the Cesium plane model to represent the entity
        model: {
          uri: "/static/model/airplane.gltf",
          //heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          scale: 0.001
          // color:Cesium.Color.WHITE

          //minimumPixelSize : 64
        },
        //Show the path as a pink line sampled in 1 second increments.
        path: {
          resolution: 1,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            color: Cesium.Color.WHITE
          }),
          width: 5
        }
      });
      entity_new.position.setInterpolationOptions({
        interpolationDegree: 5,
        interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
      });
    

    
    
    }
  },
  mounted() {
    this.viewer = new Cesium.Viewer("cesium-container", {
      infoBox: false, //Disable InfoBox widget
      selectionIndicator: false, //Disable selection indicator
      shouldAnimate: true, // Enable animations
      terrainExaggeration: 1.5,
      terrainProvider: Cesium.createWorldTerrain()
    });
  }
};
</script>
