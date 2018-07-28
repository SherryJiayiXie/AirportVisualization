<template>
    <el-container class="flex-column">
        <el-header id="page-header" class="color-primary">
            <div id="header-container" class="flex-row">
		<div class="flex-item-fill">
			<h3 id="page-title"><i class="el-icon-menu icon-left"></i>不稳定进近三维可视化系统</h3>
		</div>
		<div class="flex-row">
			<el-form :inline="true" style="margin: auto;padding-right: 24px;">
				<el-form-item>
          <span class="color-white" slot="label">机场</span>
					<el-cascader :options="airportsOption" :show-all-levels="false"  v-model="selectedAirport" ></el-cascader>
				</el-form-item>
				<el-form-item>
          <span class="color-white" slot="label">日期</span>
					<el-date-picker v-model="selectedDate"  type="date" placeholder="选择日期" ></el-date-picker>
				</el-form-item>
        <el-form-item>
          <span class="color-white" slot="label">时间</span>
          <el-time-select  v-model="selectedTime" placeholder="起始时间" :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '24:00'
          }"
          ></el-time-select>
        </el-form-item>
        <el-form-item>
          <el-button>查询</el-button>
        </el-form-item>
			</el-form>
		</div>
	</div>
        </el-header>
        <el-main style="padding: 0px;" class="flex-row">
          <el-row class="flex-item-fill flex-row">
            <el-col :span="8" class="flex-column">
              <el-row class="flex-item-1 flex-row">
                <my-statistics
                  id = "statistics"
                  :airport = "airportName"
                  :date = "daySelected"
                ></my-statistics>
              </el-row>
              <el-row class="flex-item-1 flex-row">
                <my-smallmap
                  id = "smallmap"
                  :airport = "airportName"
                  :date = "daySelected"></my-smallmap> 
              </el-row>
            </el-col>
            <el-col :span="16" class="flex-row">
              <my-cesium-viewer
                :airport = "airportName"
                :date = "daySelected"
              ></my-cesium-viewer>
            </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #343e48;
}
#header-container {
  align-content: space-between;
}

#page-title {
  color: white;
}

.icon-left {
  margin-right: 10px;
}

.el-form-item {
  margin: 0px;
}

.color-white {
  color: white;
}
</style>


<script>
import Header from "./Header";
import Statistics from "./Statistics";
import SmallMap from "./SmallMap";
import CesiumViewer from "./CesiumViewer";
export default {
  components: {
    // "my-header": Header,
    "my-statistics": Statistics,
    "my-smallmap": SmallMap,
    "my-cesium-viewer": CesiumViewer
  },

  data() {
    return {
      selectedAirport: [],

      selectedDate: new Date(2018, 0, 1),
      selectedTime: "",
      airportsOption: [
        {
          value: "Wuhan",
          label: "武汉",
          children: [
            {
              value: "ZHHH",
              label: "武汉天河机场"
            }
          ]
        },
        {
          value: "Beijing",
          label: "北京",
          children: [
            { value: "ZBAA", label: "北京首都机场" },
            { value: "ZBNY", label: "北京南苑机场" }
          ]
        },
        {
          value: "Shenzhen",
          label: "深圳",
          children: [{ value: "ZGSZ", label: "深圳宝安机场" }]
        },
        {
          value: "Shanghai",
          label: "上海",
          children: [
            { value: "ZSSS", label: "上海虹桥机场" },
            { value: "ZSPD", label: "上海浦东机场" }
          ]
        },
        {
          value: "shanxi",
          label: "山西",
          children: [{ value: "ZBYN", label: "太原武宿机场" }]
        },
        {
          value: "guangdong",
          label: "广东",
          children: [{ value: "ZGGG", label: "广州白云机场" }]
        },
        {
          value: "henan",
          label: "河南",
          children: [{ value: "ZHCC", label: "郑州新郑机场" }]
        },
        {
          value: "liaoning",
          label: "辽宁",
          children: [{ value: "ZYTL", label: "大连国际机场" }]
        }
      ]
    };
  },

  computed: {
    yearSelected: function() {
      return this.selectedDate ? this.selectedDate.getYear() : 2018;
    },

    monthSelected: function() {
      return this.selectedDate ? this.selectedDate.getMonth() + 1 : 1;
    },

    daySelected: function() {
      return this.selectedDate ? this.selectedDate.getDate() : 1;
    },
    airportName: function() {
      //alert(JSON.stringify(this.selectedAirport[1]))

      return this.selectedAirport[1];
    }
  }
};
</script>
