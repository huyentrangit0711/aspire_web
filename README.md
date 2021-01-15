# Aspire VUEJS Challenge

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
#Install JSON Server
npm install -g json-server

#simulate API for loans at localhost:3000
json-server --watch db.json

# serve with hot reload at localhost:8080
npm run dev

# Structure application
We have a application for applying form, with fullName, phoneNumber, amount and loanTerms(count by months)
When user submit with full information, data will be saved on db.json - valid on source code.
After submit successful, user will be direct Loan Details - will include table list need to re-pay every week
Admin need to update on DB for purpose with `approved` with correct id - button Repay will be enabled
```

