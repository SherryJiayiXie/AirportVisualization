<template>
  <el-container class="flex-column">
    <el-header style="padding: 0px;">
      <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">柱状图</el-menu-item>
        <el-menu-item index="2" >散点图</el-menu-item>
        <el-menu-item index="3" disabled></el-menu-item>
      </el-menu> -->
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="整体分布"  name="first">
           <el-main style="padding: 0px;" class="flex-item-fill">
              <div style="height: 100%;" id = "barChart">
                 <bar-charts
                 id = "bar-charts"
                 :airportNameBar = "airport"
                  :date = "date"
                 ></bar-charts>
              </div>
           </el-main>
        </el-tab-pane>
        <el-tab-pane label="AQI指数与风力"  name="second">
          <el-main style="padding: 0px;" class="flex-item-fill">
              <div style="height: 100%;" id = "barChart" class="flex-column">
                  <bubble-charts
                  id = "bubble-charts"
                   :airportNameBub = "airport"
                   :date = "date"></bubble-charts>
              </div>
           </el-main>
        </el-tab-pane>
         <el-tab-pane label="时序热力图"  name="third">
          <el-main style="padding: 0px;" class="flex-item-fill">
              <div style="height: 100%;" id = "hotChart" class="flex-column">
                  <hot-charts
                    id = "hot-charts"
                   :airportNameHot = "airport"
                 :date = "date"></hot-charts>
              </div>
           </el-main>
        </el-tab-pane>
        <el-tab-pane label="Airbus诊断单"  name="fourth">
          <el-main style="padding: 0px;" class="flex-item-fill">
              <div style="height: 100%;" id = "barChart" class="flex-column">
                  <pie-charts
                    id = "pie-charts"
                   :airportNamePieA = "airport"
                 :date = "date"></pie-charts>
              </div>
           </el-main>
        </el-tab-pane>
          <el-tab-pane label="Boeing诊断单"  name="fifth">
          <el-main style="padding: 0px;" class="flex-item-fill">
              <div style="height: 100%;" id = "barChart" class="flex-column">
                  <demo-charts
                    id = "pie-charts"
                   :airportNamePieB = "airport"
                 :date = "date"></demo-charts>
              </div>
           </el-main>
        </el-tab-pane>
      </el-tabs>
    </el-header>
   

    <!-- <el-main style="padding: 0px;" class="flex-item-fill">
      <div style="height: 100%;" id = "barChart" class="flex-column">
        <demo-charts></demo-charts>
      </div>
    </el-main> -->
  </el-container>
  
</template>

<script>
import DemoChart from "./charts/DemoCharts";
import BarChart from "./charts/BarCharts";
import PieChart from "./charts/PieCharts";
import BubbleChart from "./charts/BubbleCharts";
import Hotchart from"./charts/HotCharts"
 export default {
   data(){
      return{

        activeName:"first"
         //airport:"北京"
      };
   } ,
    methods:{
      
    },
     props:{
      date:{
        type:Number,
        default:1
      }
      ,
      airport: {
      type: String,
      default: '北京'

       }

  },
  
 
   components: {
     "demo-charts": DemoChart,
     "bar-charts":BarChart,
     "pie-charts":PieChart,
     "bubble-charts":BubbleChart,
     "hot-charts":Hotchart
   }
 };


</script>

<style scoped>

</style>
