<template>
	<div id="header-container" class="flex-row">
		<div class="flex-item-fill">
			<h3 id="page-title"><i class="el-icon-menu icon-left"></i>不稳定进近三维可视化系统</h3>
		</div>
		<div class="flex-row">
			<el-form :inline="true" style="margin: auto;padding-right: 24px;">
				<el-form-item>
          <span class="color-white" slot="label">机场</span>
					<el-cascader :options="airportsOption" v-model="selected.airport"></el-cascader>
				</el-form-item>
				<el-form-item>
          <span class="color-white" slot="label">日期</span>
					<el-date-picker v-model="selected.date" type="date" placeholder="选择日期"></el-date-picker>
				</el-form-item>
        <el-form-item>
          <span class="color-white" slot="label">时间</span>
          <el-time-select placeholder="起始时间" :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '24:00'
          }"
          ></el-time-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">查询</el-button>
        </el-form-item>
        
			</el-form>
		</div>
	</div>
</template>

<style scoped>
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
export default {
  data() {
    return {
      selected: {
        date: {},
        airport: []
      },
      airportsOption: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
