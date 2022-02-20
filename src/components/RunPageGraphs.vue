<template>
    <el-scrollbar ref="scrollbar" height="800px" style="width:100%"  always @scroll="scroll">
        <el-row :gutter="30">
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl">
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl2">
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="30">
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl3">
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl4">
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="30">
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl5">
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl6">
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="30">
            <el-col :span="10">
                <el-card shadow="hover">
                    <img :src="imgUrl7">
                </el-card>
            </el-col>

        </el-row>
    </el-scrollbar>
    
</template> 


<script>
    export default {
        name : 'RunPageGraphs',
        data () {
            return {
                imgUrl:require("../assets/plot-S-E-I-R.png"),
                imgUrl2:require("../assets/plot-Cs.png"),
                imgUrl3:require("../assets/plot-ARs.png"),
                imgUrl4:require("../assets/plot-Is.png"),
                imgUrl5:require("../assets/plot-M.png"),
                imgUrl6:require("../assets/plot-N.png"),
                imgUrl7:require("../assets/plot-P.png"),
                imgUrl8:require("../assets/plot-S.png"),
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