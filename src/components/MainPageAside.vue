<template>
    <!-- <el-row class="tac">
        <el-col :span="18"> -->
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            el-menu-border-color="#545c64"
            >
                <h3>Runs</h3>
                <el-sub-menu v-for="item in isSweep" :index="item.key" :key="item.key" style="text-align: left; padding-left: 0px">
                    <template #title>
                    <i :class=" 'el-icon-' + item.key "></i>
                    <span>{{item.key}}</span>
                    </template>

                    <router-link v-for="child in item.children" :key="child.key" :to="'/RunPage/' + child.key">
                        <el-menu-item :index="child.key"  style="text-align: left; padding-left: 0px">
                        <i :class=" 'el-icon-' + child.key "></i>
                        <span>{{child.key}}</span>
                        </el-menu-item>
                    </router-link>
                </el-sub-menu>

                <router-link v-for="item in notSweep" :key="item.key" :to="'/RunPage/' + item.key">
                    <el-menu-item  :index="item.key"  style="text-align: left; padding-left: 0px">
                        <i :class=" 'el-icon-' + item.key "></i>
                        <span>{{item.key}}</span>
                    </el-menu-item>
                </router-link>

                
                <!-- <el-menu-item :index="plus" @click="drawer = true">
                    <i :class="plus"></i>
                    <span>New Run +</span>
                </el-menu-item> -->

            </el-menu>
        <!-- </el-col>
    
    </el-row>  -->
    <el-affix position="bottom" :offset="20" style="float:right">
        <el-button type="primary" @click="drawer = true" circle>+</el-button>                
    </el-affix>
    <new-run-drawer v-model="drawer"></new-run-drawer>
</template>

<script>
import NewRunDrawer from './NewRunDrawer.vue'
import {getCurrentInstance} from "vue";
  export default {
    components: {NewRunDrawer},
    data() {
        return {
            drawer : false,
            isCollapse: false,
            menu: [
                {
                    path: 'runs/run1',
                    name: 'run1',
                    label: 'run1',
                    url: 'runs/run1'
                },
                {
                    path: 'runs/run2',
                    name: 'run2',
                    label: 'run2',
                    url: 'runs/run2'
                },
                {
                    path: 'runs/run3',
                    name: 'run3',
                    label: 'run3',
                    url: 'runs/run3'
                },
                {
                    label: 'sweep1',
                    children: [
                        {
                            path: 'sweep1/sweep1-1',
                            name: 'sweep1-1',
                            label: 'sweep1-1',
                            url: 'sweep1/sweep1-1'
                        },
                        {
                            path: 'sweep1/sweep1-2',
                            name: 'sweep1-2',
                            label: 'sweep1-2',
                            url: 'sweep1/sweep1-2'
                        },
                    ]
                },
            ],
        }
    },
    mounted() {
    const { proxy } = getCurrentInstance() 
    proxy.$axios.get(proxy.$backend +'/runs/').then(response => (this.menu = response.data))
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
    },
    computed: {
        notSweep() {
            return this.menu.filter(item => !item.children)
        },
        isSweep() {
            return this.menu.filter(item => item.children)
        }
    },
  }
</script>

<style scoped>
    .h3 {
      color :"#fff";  
    }
    .el-menu-vertical-demo {
      width :"100%";
      border-style: "none"
    }

</style>