import Vue from 'vue'
import Router from 'vue-router'
import LoanDetail from '@/views/LoanDetail'
import Loan from '@/views/Loan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'loan-form',
      component: Loan
    },
    {
      path: '/loan-detail/:id',
      name: 'loan-detail',
      component: LoanDetail,
      props: true
    }
  ]
})
