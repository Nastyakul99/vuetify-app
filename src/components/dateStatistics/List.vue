<template>
    <v-container fluid>
      <v-row dense>
        <v-col cols="12"
        v-for="(item,i) in getStatisticsByDate"
        :key="i"
        >
          <v-card>
           <v-card-title
                  class="headline"
                >{{item['name']}} {{item['surname']}}
				</v-card-title>
				<v-card-subtitle>Statistics: {{item['statistics']}}
         Mark: {{item['mark']}}</v-card-subtitle>
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
    getYear: function () {
      this.$store.dispatch('getStatisticsByDate');
    },
    getQuarter: function () {
      this.$store.dispatch('getStatisticsByDate');
    }	
	},
    computed: {
     getStatisticsByDate: {
      get() {
        return this.$store.getters.getStatisticsByDate
       },
      set (value) {
       this.$store.commit('retrieveStatisticsByDate', value)
    }
     },	
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
  },

    methods: {

  },
  mounted() {

  }
  }

  
</script>

<style scoped>

</style>