<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="3">
        <v-combobox
          v-model="getName"
          :items="getWorkers['names']"
          label="name"
          outlined
          dense
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="3">
        <v-combobox
          v-model="getSurname"
          :items="getWorkers['surnames']"
          label="surname"
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
     getWorkers: {
      get() {
        return this.$store.getters.getWorkers
       },
      set (value) {
       this.$store.commit('retrieveWorkers', value)
    }
     },	
     getName: {
      get() {
        return this.$store.getters.getName
       },
      set (value) {
       this.$store.commit('retrieveName', value)
    }
     },
     getSurname: {
      get() {
        return this.$store.getters.getSurname
       },
      set (value) {
       this.$store.commit('retrieveSurname', value)
    }
     },	
  },
  mounted() {
    this.$store.dispatch('getWorkers');
        }
        
  }  
  
</script>