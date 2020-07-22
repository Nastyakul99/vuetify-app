import Vue from 'vue'
import Router from 'vue-router'
import ListDateStatistics from "../components/dateStatistics/List";
import ComboboxDateStatistics from "../components/dateStatistics/Combobox";

import ListWorkerStatistics from "../components/workerStatistics/List";
import ComboboxWorkerStatistics from "../components/workerStatistics/Combobox";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      meta: {
        layout: 'mainLayout',
      }
    },
    {
      path: '/date-statistics',
      name: 'list-dateStatistics',
      components: {ListDateStatistics,ComboboxDateStatistics},
      meta: {
        layout: 'mainLayout',
      }
    },
    {
      path: '/worker-statistics',
      name: 'list-workerStatistics',
      components: {ListWorkerStatistics,ComboboxWorkerStatistics},
      meta: {
        layout: 'mainLayout',
      }
    },	
  ]
});