<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="3">
        <v-combobox
          v-model="getYear"
          :items="getTimes['years']"
          label="year"
          outlined
          dense
          v-on:change="select"
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="3">
        <v-combobox
          v-model="getQuarter"
          :items="getTimes['quarters']"
          label="quarter"
          outlined
          dense
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
  export default {
  data: () => ({
    }),
    computed: {
     getYear: {
      get() {
        return this.$store.getters.getYear
       },
      set (value) {
       this.$store.commit('retrieveYear', value)
    }
     },
     getQuarter: {
      get() {
        return this.$store.getters.getQuarter
       },
      set (value) {
       this.$store.commit('retrieveQuarter', value)
    }
     },	
     getTimes: {
      get() {
        return this.$store.getters.getTimes
       },
      set (value) {
       this.$store.commit('retrieveTimes', value)
    }
     },	 
  },
  mounted() {
    this.$store.dispatch('getTimes');
        }   
  }  
  
</script>