<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="left-sidebar col-sm-3">
          <LeftSidebar />
        </div>
        <div class="main-content col-sm-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import LeftSidebar from '@/components/LeftSidebar'
import Loan from '@/views/Loan.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    LeftSidebar,
    Loan
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;600&display=swap');
@import './_style.scss';
</style>
