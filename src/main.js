// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// reset.css 保持各个浏览器样式一致
// border.css 1像素边框的解决方案
// 解决移动端点击事件延迟3s npm install fastclick --save 引入库 --save 表示生产环境打包的时候也带上
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
