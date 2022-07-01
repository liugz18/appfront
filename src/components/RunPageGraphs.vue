<template>
    <el-scrollbar ref="scrollbar" height="800px" style="width:100%"  always @scroll="scroll">

        <el-space
        fill
        wrap
        :fillRatio="fillRatio"
        :direction="direction"
        style=" width: 100%"
        >
        <el-card v-for="(img, idx) in imgs" :key=idx shadow="hover">
            <img :src="proxy.$backend + img.imgpath">
        </el-card>
        </el-space>

    </el-scrollbar>
    
</template> 


<script>
import {getCurrentInstance} from "vue";
    export default {
        name : 'RunPageGraphs',
        props: {
            RunName:String
        },
        data () {      
            const { proxy } = getCurrentInstance() 
            return {
                direction: 'horizontal', fillRatio: 30,
                imgs:[],
                proxy,
            }
        },
        components :{ 
        },
        mounted() {
        
        this.proxy.$axios.get(this.proxy.$backend +'/imgs/'+this.RunName).then(response => (this.imgs = response.data))//))  console.log(response.data[0])
        },   
    }
</script>
<style>
    .input_video{
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }
</style>