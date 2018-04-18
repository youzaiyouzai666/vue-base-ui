// import './button.scss';
export default {
    name: 'vButton',
    methods:{
        handleClick(evt){
            this.$emit('click',evt);
        }
    },
    props:{
        value: {
            type: String,
            default: '按钮'
        }
    }
}