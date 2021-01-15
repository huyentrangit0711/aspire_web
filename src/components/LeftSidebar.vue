<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-wrapper__logo">
      <img src="../assets/aspire-logo.svg" />
    </div>
    <div>
      <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
    </div>
    <navigation-menu />
  </div>
</template>
<script>
import NavigationMenu from '@/components/NavigationMenu'
export default {
  name: 'left-sidebar',
  components: {
    NavigationMenu
  }
}
</script>
