export default {
    props:{
        display: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        time: {
            type: Number,
            default: 2000
        }
    },
    watch:{
        dispalay(val){
            if(val){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(()=>{
                    this.dispalay = false
                }, this.time);
            }
        }
    }
}