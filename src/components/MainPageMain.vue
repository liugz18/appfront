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
          <img :src="'http://127.0.0.1:8000'+img.imgpath" />
        </el-card>
      </el-col>
    </el-row>
    <el-button type="primary"
      >New Graph +<i class="el-icon-upload el-icon-right"></i
    ></el-button>
  </el-scrollbar>
</template> 


<script>
import axios from 'axios'
export default {
  name: "MainPageMain",
  data() {
    return {
      // imgs: [
      //   { imgUrl: "http://127.0.0.1:8000/media/plot-ARs.png" },
      //   { imgUrl: require("../assets/plot-AR.png") },
      //   { imgUrl: require("../assets/plot-S.png") },
      //   { imgUrl: require("../assets/FRED_Quick_Start_figure4.png") },
      //   { imgUrl: require("../assets/FRED_Quick_Start_figure5.png") },
      //   { imgUrl: require("../assets/FRED_Quick_Start_figure6.png") },
      //   { imgUrl: require("../assets/FRED_Quick_Start_figure7.png") },
      // ],
      imgs: []
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/imgs/').then(response => (this.imgs = response.data))
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