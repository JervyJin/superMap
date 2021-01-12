// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import { mapState } from "vuex";
import utils from './utils/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from 'vue-touch';



import '@supermap/iclient-leaflet'
import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css'

import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

import Pagination from "@/components/Pagination";

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(ElementUI);

Vue.use(VueTouch, {
  name: 'v-touch'
});
VueTouch.config.swipe = {
  threshold: 10 //手指左右滑动触发事件距离
}

//全局混入
// Vue.mixin({
//   data() {
//     return {};
//   },
//   computed: {
//     ...mapState(["themeColor"])
//   },
//   mounted() {},

//   methods: {}
// });

// 全局组件挂载
Vue.component('Pagination', Pagination)

Vue.prototype.$utils = utils;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
