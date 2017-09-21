import Vue from 'vue'
import Router from 'vue-router'
import OverAll from '../components/OverAll'
import Industry from '../components/Industry'
import Rank from '../components/Rank'
import Source from '../components/Source'
import echarts from 'echarts'
import '/static/js/mui.min'
import '/static/css/mui.css'
//  import axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/overAll',
      name: 'OverAll',
      component: OverAll
    },
    {
      path: '/industry',
      name: 'Industry',
      component: Industry
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/source',
      name: 'Source',
      component: Source
    }
  ]
})
