// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Button from '../packages/button/index.js'


Vue.config.productionTip = false

const install = {

}

import ToastPlugin from './plugins/toast/index.js';
Vue.use(ToastPlugin);

export default {
  vaesion: '1.0.0',
  install,
  Button
}


