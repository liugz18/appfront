<template>
  <el-scrollbar
    ref="scrollbar"
    height="800px"
    style="width: 100%"
    always
    @scroll="scroll"
     v-if="done"
  >
    <el-row v-for="(img, idx) in imgs" :gutter="20" :key="idx">
      <el-col :span="20">
        <el-card shadow="hover">
          <img :src="proxy.$backend+img.imgpath" />
        </el-card>
      </el-col>
    </el-row>
    <el-button type="primary"  @click="dialogFormVisible = true"
      >New Graph +<i class="el-icon-upload el-icon-right"></i
    ></el-button>
    <add-graph-dialog ref="confirmRef" v-model="dialogFormVisible" ></add-graph-dialog>
  </el-scrollbar>
</template> 


<script>
import {getCurrentInstance, ref} from "vue";
import AddGraphDialog from './AddGraphDialog.vue'
export default {
  name: "MainPageMain",
  setup () {
    // 拿到confirm的dom
    const confirmRef = ref(null)
    // 唤起confirm
    function showConfirm () {
      confirmRef.value.show()
    }
    // 点击确认按钮后的事件处理
    function confirm () {
      // 事件处理完后记得关闭confirm组件
      confirmRef.value.hide()
    }

    return {
      confirmRef,
      showConfirm,
      confirm
    }
  },
  data() {
    const { proxy } = getCurrentInstance() 
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
      dialogFormVisible: false,
      proxy,
      imgs: [],
      done: false,
    };
  },
  mounted() {
    
    this.proxy.$axios.get(this.proxy.$backend +'/imgs/').then(response => (this.imgs = response.data))  
    this.done = true
    },
  components: {AddGraphDialog},
};
</script>
<style>
.input_video {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>