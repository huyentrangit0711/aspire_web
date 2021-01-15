<template>
  <div class="loan--form">
    <h1>Loan Application</h1>
    <div class="shadow p-3 mb-5 bg-white rounded">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="fullName" class="form-label">Full Name</label>
        <input
          type="text"
          class="form-control"
          data-testid="fullName-input"
          id="fullName"
          v-model="loanData.fullName"
          :class="{'is-invalid': errors.fullName}"
        >
        <p v-if="errors.fullName" :class="{'invalid-feedback': errors.fullName}">
          {{ errors.fullName.message }}
        </p>
      </div>
      <div class="mb-3">
        <label for="phoneNumber"
               class="form-label"
        >Phone number</label>
        <input type="number"
               class="form-control"
               id="phoneNumber"
               data-testid="phoneNumber-input"
               v-model="loanData.phoneNumber"
               :class="{'is-invalid': errors.phoneNumber}"
        >
        <p v-if="errors.phoneNumber" :class="{'invalid-feedback': errors.phoneNumber}">
          {{ errors.phoneNumber.message }}
        </p>
      </div>
      <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input type="number"
               class="form-control"
               data-testid="amount-input"
               id="amount"
               v-model="loanData.amount"
               :class="{'is-invalid': errors.amount}"
        >
        <p v-if="errors.amount" :class="{'invalid-feedback': errors.amount}">
          {{ errors.amount.message }}
        </p>
      </div>

      <div class="mb-3">
        <label for="loanTerm" class="form-label">Loan term(count by months)</label>
        <input
          type="number"
          class="form-control"
          data-testid="loanTerm-input"
          id="loanTerm"
          v-model="loanData.loanTerm"
          :class="{'is-invalid': errors.loanTerm}"
        >
        <p v-if="errors.loanTerm" :class="{'invalid-feedback': errors.loanTerm}">
          {{ errors.loanTerm.message }}
        </p>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  </div>
</template>
<script>
import LoanServices from '../services/LoanServices'
export default {
  name: 'loan-form',
  data () {
    return {
      loanData: this.createLoanDataObj(),
      errors: {},
      isFormValidation: false
    }
  },

  methods: {
    createLoanDataObj () {
      const randomId = Math.round(Math.random() * 1000000)
      return {
        id: randomId,
        fullName: '',
        phoneNumber: '',
        amount: '',
        loanTerm: '',
        approved: false,
        currency: 'USD',
        date: new Date()
      }
    },
    validationForm () {
      this.errors = {}
      const { fullName, phoneNumber, amount, loanTerm } = this.loanData
      Object.keys({ fullName, phoneNumber, amount, loanTerm }).forEach(key => {
        if (!this.loanData[key].length) {
          this.errors = Object.assign({}, this.errors, {
            [key]: {
              message: 'This field is required'
            }
          })
        }
      })
      this.isFormValidation = Object.keys(this.errors).length === 0
    },
    submitForm () {
      this.validationForm()
      console.log('debug initTest', this.loanData)
      const data = this.loanData
      if (this.isFormValidation) {
        LoanServices.putLoan(data).then(response => {
          if (response.data) {
            this.$router.push({
              name: 'loan-detail',
              params: { id: this.loanData.id }
            })
          }
        })
          .catch(err => {
            console.log('Have an error from call API', err)
          })
      }
    }
  }
}
</script>
