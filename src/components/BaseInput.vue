<template>
  <div>
    <label for="fullName" class="form-label">Full Name</label>
    <input
      type="text"
      class="form-control"
      id="fullName"
      v-model="loanData.fullName"
    >
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
