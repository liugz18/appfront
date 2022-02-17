<template>
    <el-row :gutter="20">
        <el-col :span="20">
            <el-card shadow="hover">
                <img :src="imgUrl">
            </el-card>
        </el-col>

    </el-row>
</template> 


<script>
    export default {
        name : 'MainPageMain',
        data () {
            return {
                imgUrl:require("../assets/plot-AR.png"),
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