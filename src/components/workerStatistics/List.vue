<template>
    <v-container fluid>	
      <v-row dense>
        <v-col cols="12"
        v-for="(item,i) in getStatisticsByWorker"
        :key="i"
        >
          <v-card>
           <v-card-title
                  class="headline"
                > Year: {{item['year']}} quarter: {{item['quarter']}}
				</v-card-title>
				<v-card-subtitle>Statistics: {{item['statistics']}} 
         Mark: {{item['mark']}} </v-card-subtitle>
          </v-card>		  
        </v-col>
      </v-row> 	   
    </v-container>
</template>

<script>
  export default {
    name: "List",
	data: () => ({
      drawer: null,
    }),
    watch: {
    getName: function () {
      this.$store.dispatch('getStatisticsByWorker');
    },
    getSurname: function () {
      this.$store.dispatch('getStatisticsByWorker');
    }	
	},
    computed: {
	getStatisticsByWorker: {
      get() {
        return this.$store.getters.getStatisticsByWorker
       },
      set (value) {
       this.$store.commit('retrieveStatisticsByWorker', value)
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
  }
 
</script>

<style scoped>

</style>