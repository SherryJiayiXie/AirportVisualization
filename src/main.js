// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import './theme/index.css';
import './styles/style.css'
import './styles/flex.css'
import App from './App'
import router from './router'

import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadMap from 'highcharts/modules/map';
loadMap(Highcharts);

Vue.use(ElementUI, { size: 'small' });
Vue.use(VueHighcharts, { Highcharts: Highcharts });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
