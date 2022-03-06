
<template>
  <el-dialog title="Create New Graph" v-model="dialogFormVisible">
    <el-form :model="form" >
      <el-form-item label="Requested Runs" :label-width="formLabelWidth">
        <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
        <el-select-v2
          v-model="value"
          filterable
          :options="options"
          placeholder="Please select"
          style="width: 400px"
          multiple
          clearable 
        />
      </el-form-item>
      <el-form-item label="Variables" :label-width="formLabelWidth">
        <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
        <el-select-v2
          v-model="value2"
          filterable
          :options="options2"
          placeholder="Please select"
          style="width: 400px"
          multiple
          clearable 
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button @click="hide">Cancel</el-button> -->
        <el-button type="primary" @click="confirm">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {getCurrentInstance} from "vue";
export default {
  name: "AddGraphDialog",
  // props: {
  //   runs_listed:Array,
  // },
  data() {
    const { proxy } = getCurrentInstance() 
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      options:[], 
      value: [],
      runs_listed: [],
      proxy,
      options2:[
        {value:'S', label:'Suspected'},
        {value:'E', label:'Exposed'},
        {value:'I', label:'Infected'},
        {value:'R', label:'Recovered'},
        {value:'AR', label:'Attack Rate'},
        {value:'ARs', label:'Symptomatic Attack Rate'},
        {value:'C', label:'Incidence'},
        {value:'Cs', label:'Symptomatic Incidence'},
        {value:'Is', label:'Symptomatics'},
        {value:'M', label:'Immune'},
        {value:'N', label:'Pop Size'},
        {value:'P', label:'Prevalence'},
        {value:'RR', label:'Reproductive Rate'},
      ], 
      value2: [],
    };
  },
  mounted() {
    this.proxy.$axios.get(this.proxy.$backend +'/runs/listed').then(response => (this.runs_listed = response.data))
    setTimeout(() => {this.prepare();}, 1000)
    
  }, 
  methods: {
    confirm() {
      if (this.value.length!=0 && this.value2.length!=0) {
        let graph_property = [this.value, this.value2]
      this.proxy.$axios.post(this.proxy.$backend +'/addgraph/', graph_property).then(response => (console.log(response)))
        console.log(graph_property);
      }
      else{
        console.log("Please specify properties for graph to add!");
      }
      // 
    },
    prepare() {
      for (var key in this.runs_listed) {
        var item = this.runs_listed[key]["key"]
        this.options.push({value: item, label: item})
    }
  },
},
}
</script>

