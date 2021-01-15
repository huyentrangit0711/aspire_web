import axios from 'axios'
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  putLoan (loanData) {
    return apiClient.post('/loans', loanData)
  },
  getLoans () {
    return apiClient.get('/loans')
  },
  getLoan (id) {
    return apiClient.get('/loans/' + id)
  }
}
