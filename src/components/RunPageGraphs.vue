<template>
    <el-row :gutter="20">
        <el-col :span="10">
            <el-card>
                <img :src="imgUrl">
            </el-card>
        </el-col>
        <el-col :span="10">
            <el-card>
                <img :src="imgUrl2">
            </el-card>
        </el-col>
    </el-row>
</template> 


<script>
    export default {
        name : 'RunPageGraphs',
        data () {
            return {
                imgUrl:require("../assets/plot-S-E-I-R.png"),
                imgUrl2:require("../assets/plot-S.png")
            }
        },
        components :{
            
        }
    }
</script>
<style>
    .input_video{
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }
</style>