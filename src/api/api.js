import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default {
getStatisticsByWorker(name, surname){
      return new Promise((resolve, reject) => {
        axios.get('/locrs?worker.name='+name+'&worker.surname='+surname+'&include=time')
          .then(response => {
		let items=[];
        response.data.included.forEach((element,i) => {
		let item=[];
		item['year']=element['attributes']['year'];
		item['quarter']=element['attributes']['quarter'];
		item['statistics']=response.data.data[i]['attributes']['statistics'];
		item['mark']=response.data.data[i]['attributes']['mark'];
        items[i]=item;
        });			  
            resolve(items)
          })
          .catch(error => {
            reject(error)
          })
      })
  },

getStatisticsByDate(year, quarter){
      return new Promise((resolve, reject) => {
        axios.get('/locrs?time.year='+year+'&time.quarter='+quarter+'&include=worker')
          .then(response => {
		let items=[];
        response.data.included.forEach((element,i) => {
		let item=[];
		item['name']=element['attributes']['name'];
		item['surname']=element['attributes']['surname'];
		item['file']=element['attributes']['file'];
		item['statistics']=response.data.data[i]['attributes']['statistics'];
		item['mark']=response.data.data[i]['attributes']['mark'];
        items[i]=item;
        });			  
            resolve(items)
          })
          .catch(error => {
            reject(error)
          })
      })
  },
  
getWorkers(){
      return new Promise((resolve, reject) => {
        axios.get('/workers')
          .then(response => {
	let names=[];
	let surnames=[];
        response.data.data.forEach((element,i) => {
        names[i]=element['attributes']['name'];
        surnames[i]=element['attributes']['surname'];
       });
       let a=[];
       a['names']=names;
       a['surnames']=surnames;	  
            resolve(a)
          })
          .catch(error => {
            reject(error)
          })
      })
  }, 
 getTimes(){
      return new Promise((resolve, reject) => {
        axios.get('/times')
          .then(response => {
	let years=[];
	let quarters=[];
        response.data.data.forEach((element,i) => {
        years[i]=element['attributes']['year'];
        quarters[i]=element['attributes']['quarter'];
       });
       let a=[];
       a['quarters']=quarters;
       a['years']=years;	  
            resolve(a)
          })
          .catch(error => {
            reject(error)
          })
      })
  }, 

}


