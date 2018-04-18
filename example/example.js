import Vue from 'vue';
import app from '../src/app'

Vue.use(app.Button);

new Vue({
    el: '#app',
    data:{},
    methods:{
        open(){
            this.$_vux.toast.show({
                text: 'Hello World',
                time: 1500,
                onShow () {
                    console.log('toast show');
                },
                onHide () {
                    console.log('toast hide');
                }
            });
        }
    }
});