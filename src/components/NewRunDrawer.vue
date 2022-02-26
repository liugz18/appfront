<template>
    <el-drawer 
    title="I am the title" 
    :with-header="false"
    direction="ltr"
    custom-class="demo-drawer"
    v-model="drawer"
    ref="drawer"
    >
        <div class="demo-drawer__content">
        <h3>Create New Run </h3>
        <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
            <el-select
            v-model="form.region"
            placeholder="Please select simulation area"
            >
            <el-option label="Allegheny County, PA" value="shanghai"></el-option>
            <el-option label="Akhiok County, CA" value="beijing"></el-option>
            <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Duration"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="365" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number>
        </el-form-item>
        <el-form-item label="Transmissibility"   :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="1.0" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="School Closure Policies" >
        <el-checkbox-group v-model="checkList" :max="1">
            <el-checkbox label="None"></el-checkbox>
            <el-checkbox label="Global"></el-checkbox>
            <el-checkbox label="Individual"></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <el-form-item label="School Closure Duration"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num2"
                @change="handleChange"
                :min="1"
                :max="100"
            ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Hospital" >
        <el-switch v-model="value1"> </el-switch>
        </el-form-item>
        <el-form-item label="Enable Travel" >
        <el-switch v-model="value2"> </el-switch>
        </el-form-item>
        <el-form-item label="Enable Insurance" >
        <el-switch v-model="value3"> </el-switch>
        </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? 'Submitting ...' : 'Submit' }}</el-button
        >
            </div>
        </div>
    </el-drawer>
</template>

<script>
  export default {
    name: 'NewRunDrawer',
    props: {
            // 标题
            title: {
            type: String,
            default: '标题'
            },
        },
    data() {
      return {
        // 是否打开
        drawer: false,
        loading: false,
        form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        },
        formLabelWidth: '80px',
        timer: null,

        checkList: ["None"],
        num: 1,
        num2: 10,
        value1: 0,
        value2: 0,
        value3: 0,
      }
    },
    methods: {
      cancelForm() {
        this.loading = false
        this.drawer = false
        clearTimeout(this.timer)
      },
    },
  }
</script>