import Vue from 'vue';
import Toast from './toast.vue';

console.log(Toast);
export default {
    install(vue, options) {
        debugger;
        console.log('123123');
        const _$vm =new Vue(Toast).$mount(document.createElement('div'));
        document.body.appendChild(_$vm.$el);

        const toast = {
            show(options){
                _$vm.display = true;
            },
            hode(){
                _$vm.display = false;
            }
        }
        if (!vue.prototype.$_vux) {
            vue.prototype.$_vux = {
                toast
            };
        } else {
            vue.prototype.$_vux.toast = toast;
        }

    }

}