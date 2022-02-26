<template>
  <el-scrollbar
    ref="scrollbar"
    height="800px"
    style="width: 100%"
    always
    @scroll="scroll"
  >
    <el-row v-for="(img, idx) in imgs" :gutter="20" :key="idx">
      <el-col :span="20">
        <el-card shadow="hover">
          <img :src="img.imgUrl" />
        </el-card>
      </el-col>
    </el-row>
    <el-button type="primary"
      >New Graph +<i class="el-icon-upload el-icon-right"></i
    ></el-button>
  </el-scrollbar>
</template> 


<script>
export default {
  name: "MainPageMain",
  data() {
    return {
      imgs: [
        { imgUrl: require("../assets/plot-AR.png") },
        { imgUrl: require("../assets/plot-S.png") },
        { imgUrl: require("../assets/FRED_Quick_Start_figure4.png") },
        { imgUrl: require("../assets/FRED_Quick_Start_figure5.png") },
        { imgUrl: require("../assets/FRED_Quick_Start_figure6.png") },
        { imgUrl: require("../assets/FRED_Quick_Start_figure7.png") },
      ],
    };
  },
  components: {},
};
</script>
<style>
.input_video {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>