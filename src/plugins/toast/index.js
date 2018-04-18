import Vue from 'vue';
import Toast from './toast.vue';

//创建 弹框dom,并绑定到dom
const _$vm =new Vue(Toast).$mount(document.createElement('div'));
document.body.appendChild(_$vm.$el)

//暴露公共方法
const toast = {
    show(options){
        //添加 onShow|onHide事件
        if (options.onShow || options.onHide) {
            _$vm.$watch('display', (val) => {
                val && options.onShow && options.onShow(_$vm);
                val === false && options.onHide && options.onHide(_$vm);
            });
        }
        _$vm.display = true
    },
    hide(){
        _$vm.display = false
    }
}

export default toast