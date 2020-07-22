import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from "../api/api";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const store = new Vuex.Store({
  state: {
	year: '',
	quarter: '',
	name: '',
	surname: '',
	statisticsByWorker: '',
	workers: '',
	times: '',
	statisticsByDate: '',
  },
  getters: {
	getStatisticsByDate(state){
      return state.statisticsByDate
    },	  
	getYear(state){
      return state.year
    },
	getQuarter(state){
      return state.quarter
    },
	getName(state){
      return state.name
    },
	getSurname(state){
      return state.surname
    },
	getStatisticsByWorker(state){
      return state.statisticsByWorker
    },
	getWorkers(state){
      return state.workers
    },
	getTimes(state){
      return state.times
    },	
  },
  mutations: {
	retrieveYear(state, data) {
      state.year = data
    },
	retrieveQuarter(state, data) {
      state.quarter = data
    },	
	retrieveName(state, data) {
      state.name = data
    },
	retrieveSurname(state, data) {
      state.surname = data
    },
	retrieveStatisticsByWorker(state, data) {
      state.statisticsByWorker = data
    },
	retrieveWorkers(state, data) {
      state.workers = data
    },
	retrieveTimes(state, data) {
      state.times = data
    },
	retrieveStatisticsByDate(state, data) {
      state.statisticsByDate = data
    },	
  },
  actions: {
    getWorkers() {
		api.getWorkers().then(response => {
           this.state.workers=response;
          })	
	},		  
    getTimes() {
		api.getTimes().then(response => {
           this.state.times=response;
          })	
	},	  
    getStatisticsByDate() {
		api.getStatisticsByDate(this.state.year, this.state.quarter).then(response => {
           this.state.statisticsByDate=response;
          })	
	},
    getStatisticsByWorker() {
		api.getStatisticsByWorker(this.state.name, this.state.surname).then(response => {
           this.state.statisticsByWorker=response;
          })
	},	
    getLocrs() {
      return new Promise((resolve, reject) => {
        axios.get('/locrs?include=worker')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })	
	},

  }
})