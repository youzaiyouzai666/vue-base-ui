// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Button from '../packages/button/index.js'

// 组件包公共的样式
import '../packages/base/common.scss'

Vue.config.productionTip = false

//注入 toast组件
import ToastPlugin from './plugins/toast/index.js'


const install = function(Vue, opts={}){
  Vue.prototype.$_vux = {
    toast : ToastPlugin
  }
}

export default {
  vaesion: '1.0.0',
  install,
  Button
}


