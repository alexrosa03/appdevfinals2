<template>
    <div>
        <div id="app">
            <vuehead/>
            <side/>
            <foot/>
        </div>

        <div class="content">
          <div class="row align-items-center justify-content-center">
            <div class="login-form col-md-8">
              <form action="/home" method="GET">
                  <h2 class="text-left">Add Patient</h2>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" id="f_name" class="form-control" placeholder="First Name" required="password" style="margin-right:10px;">
                      <input type="text" id="m_name" class="form-control" placeholder="Middle Name" required="password"  style="margin-right:10px;">
                      <input type="text" id="l_name" class="form-control" placeholder="Last Name" required="password">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="gender-select" style="margin-right:10px;">   
                        <select class="form-control">
                          <option hidden>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>  
                      </div>
                      <div class="datetimepicker">
                        <datepicker style="margin-right:10px;" placeholder="Date of Birth"></datepicker>
                      </div>
                      <input type="text" id="barangay" class="form-control" placeholder="Barangay" required="password"  style="margin-right:10px;" >
                      <input type="text" id="phone_number" class="form-control" placeholder="Phone Number" required="password" style="margin-right:10px;">
                      <input type="text" id="email" class="form-control" placeholder="Email Address" required="password" style="margin-right:10px;">
                      <input type="text" id="nationality" class="form-control" placeholder="Nationality" required="password" style="margin-right:10px;">
                    </div>
                  </div>
                  <br/><br/>
                  <div class="form-group">
                      <button type="submit" class="btn btn-success btn-block">OK</button>
                  </div>
              </form>
            </div>       
          </div>

        <!-- code for the page goes here -->
        </div>
    </div>
</template>

<script>
import header from '../components/header.vue'
import sidebar from '../components/sidebar.vue'
import footer from '../components/footer.vue'
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js"
import * as lang from "vuejs-datepicker/src/locale"

const state = {
  date1: new Date()
}

export default {
  name: 'App',
  components: {
    'vuehead': header,
    'side': sidebar,
    'foot': footer,
    Datepicker
  },
    data() {
    return {
      format: "d MMMM yyyy",
      disabledDates: {},
      disabledFn: {
        customPredictor(date) {
          if (date.getDate() % 3 === 0) {
            return true;
          }
        }
      },
      highlightedFn: {
        customPredictor(date) {
          if (date.getDate() % 4 === 0) {
            return true;
          }
        }
      },
      highlighted: {},
      eventMsg: null,
      state: state,
      language: "en",
      languages: lang,
      vModelExample: null,
      changedMonthLog: []
    };
  },
  methods: {
    highlightTo(val) {
      if (typeof this.highlighted.to === "undefined") {
        this.highlighted = {
          to: null,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: this.highlighted.from
        };
      }
      this.highlighted.to = val;
    },
    highlightFrom(val) {
      if (typeof this.highlighted.from === "undefined") {
        this.highlighted = {
          to: this.highlighted.to,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: null
        };
      }
      this.highlighted.from = val;
    },
    setHighlightedDays(elem) {
      if (elem.target.value === "undefined") {
        return;
      }
      let highlightedDays = elem.target.value
        .split(",")
        .map(day => parseInt(day));
      this.highlighted = {
        from: this.highlighted.from,
        to: this.highlighted.to,
        daysOfMonth: highlightedDays
      };
    },
    setDisabledDays(elem) {
      if (elem.target.value === "undefined") {
        return;
      }
      let disabledDays = elem.target.value.split(",").map(day => parseInt(day));
      this.disabledDates = {
        from: this.disabledDates.from,
        to: this.disabledDates.to,
        daysOfMonth: disabledDays
      };
    },
    disableTo(val) {
      if (typeof this.disabled.to === "undefined") {
        this.disabledDates = {
          to: null,
          daysOfMonth: this.disabledDates.daysOfMonth,
          from: this.disabled.from
        };
      }
      this.disabledDates.to = val;
    },
    disableFrom(val) {
      if (typeof this.disabledDates.from === "undefined") {
        this.disabled = {
          to: this.disabledDates.to,
          daysOfMonth: this.disabled.daysOfMonth,
          from: null
        };
      }
      this.disabledDates.from = val;
    },
    openPicker() {
      this.$refs.programaticOpen.showCalendar();
    },
    logChangedMonth(date) {
      this.changedMonthLog.push(date)
    }
  }
}
</script>

<style>
  .content {
    float: right;
    position: sticky;
    width: 88%;
    padding-left: 20px;
  }

  input,
  select {
  padding: 0.75em 0.5em;
  font-size: 100%;
  border: 1px solid #ced4da;
  width: 100%;
  height: 38px;
}
</style>