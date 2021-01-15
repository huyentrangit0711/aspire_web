<template>
  <div class="loan--detail">
    <h1>The weekly loan repayments</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date need to re-pay</th>
        <th scope="col">Amount need re-pay</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="time in loan.loanTerm * 4" :key="time">
        <th scope="row">{{ time }}</th>
        <td></td>
        <td>{{ amountData }} {{ loan.currency }}</td>
        <td><button type="button" class="btn btn-primary" :disabled="!loan.approved">Repay</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import LoanServices from '../services/LoanServices'
export default {
  name: 'loan-detail',
  props: ['id'],
  data () {
    return {
      loan: {}
    }
  },
  created () {
    LoanServices.getLoans(this.id).then(response => {
      this.loan = response.data.find(loanData => loanData.id === parseInt(this.id))
    }).catch(err => console.log('err', err))
  },
  computed: {
    amountData () {
      const { amount, loanTerm } = this.loan
      return Math.round(amount / (loanTerm * 4))
    }
  }
}
</script>
