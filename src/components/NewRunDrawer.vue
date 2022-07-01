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
      <h3>Create New Run</h3>
      <el-tabs v-model="activeName">
    <el-tab-pane label="Beginner" name="first">
      <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value="42003"></el-option>
            <el-option label="Akhiok County, CA" value="beijing"></el-option>
            <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Enable Masks">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Enable Isolation">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
      </el-form>
        </el-tab-pane>
        <el-tab-pane label="Advanced" name="second">
          <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value="42003"></el-option>
            <!-- <el-option label="Akhiok County, CA" value="beijing"></el-option>
            <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="School Closure Policies">
          <el-radio-group v-model="form.closure_policy">
            <el-radio label="none"></el-radio>
            <el-radio label="global"></el-radio>
            <el-radio label="individual"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="School Closure Duration"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.closure_duration"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Isolation">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Isolation Cover Rate" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Masks">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Masks Protection Rate" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
          
        </el-form-item>
        <el-form-item label="Masked Type">
          <el-radio-group v-model="form.masked_type">
            <el-radio label="infector"></el-radio>
            <el-radio label="infectee"></el-radio>
            <el-radio label="both"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Isolation Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="7"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Isolation Delay" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Mask Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="7"
            autocomplete="off"
          ></el-input>
        </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Master" name="third">
        <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value="42003"></el-option>
            <!-- <el-option label="Akhiok County, CA" value="beijing"></el-option>
            <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="School Closure Policies">
          <el-radio-group v-model="form.closure_policy">
            <el-radio label="none"></el-radio>
            <el-radio label="global"></el-radio>
            <el-radio label="individual"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="School Closure Duration"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.closure_duration"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Sick Stay Home Prob" :label-width="formLabelWidth">
          <el-input
            v-model="form.sick_day_prob"
            placeholder="0.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Enable Hospital" >
        <el-switch v-model="value1"> </el-switch>
        </el-form-item> -->
        <el-form-item label="Enable School Summer Break">
          <el-switch v-model="form.school_summer_schedule"> </el-switch>
        </el-form-item>
        <el-form-item label="Office Size" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.office_size"
            @change="handleChange"
            :min="5"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Travel">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Travel Distance Min" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Vaccine">
          <el-switch v-model="form.school_summer_schedule"> </el-switch>
        </el-form-item>
        <el-form-item label="Vaccine Num" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.office_size"
            @change="handleChange"
            :min="5"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Isolation">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Isolation Cover Rate" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Masks">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item label="Masks Protection Rate" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Masked Type">
          <el-radio-group v-model="form.masked_type">
            <el-radio label="infector"></el-radio>
            <el-radio label="infectee"></el-radio>
            <el-radio label="both"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Isolation Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="7"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Isolation Delay" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Mask Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.closure_duration"
            placeholder="7"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      
      </el-tab-pane>
    </el-tabs>
    <div class="demo-drawer__footer">
        <!-- <el-button @click="cancelForm">Cancel</el-button> -->
        <el-button type="primary" @click="submit" :loading="loading">{{
          loading ? "Submitting ..." : "Submit"
        }}</el-button>
      </div>
    </div>
    
  </el-drawer>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "NewRunDrawer",
  props: {
    // 标题
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    const { proxy } = getCurrentInstance();
    return {
      // 是否打开
      drawer: false,
      loading: false,
      form: {
        key: "",
        fips: "",
        days: 100,
        influenza_transmissibility: 1.0,
        closure_policy: "none",
        closure_duration: 1,
        sick_day_prob: 0.5,
        school_summer_schedule: 0,
        office_size: 50,
        enable_travel: 0,
        min_travel_distance: 100,
        masked_type: "infector",
      },
      formLabelWidth: "80px",
      timer: null,
      proxy,
      runs_listed: [],
      activeName: "first",
    };
  },
  mounted() {
    this.proxy.$axios
      .get(this.proxy.$backend + "/runs/listed")
      .then((response) => (this.runs_listed = response.data));
  },
  methods: {
    cancelForm() {
      this.loading = false;
      this.drawer = false;
      clearTimeout(this.timer);
    },
    notDuplicated() {
      for (var key in this.runs_listed) {
        var item = this.runs_listed[key]["key"];
        if (item == this.form.key) {
          return false;
        }
      }
      return true;
    },
    submit() {
      if (this.form.key != "" && this.form.fips != "" && this.notDuplicated()) {
        console.log(this.form);
        this.proxy.$axios
          .post(this.proxy.$backend + "/addrun/", this.form)
          .then((response) => console.log(response));
      } else {
        console.log("Parameters incorrect!");
      }
    },
  },
};
</script>