export default {
    data:function(){
        return {}
    },
    props:{
        display: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: 'toast'
        },
        time: {
            type: Number,
            default: 2000
        }
    },
    watch:{
        display(val){
            if(val){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(()=>{
                    this.display = false
                }, this.time);
            }
        }
    }
}