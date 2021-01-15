<template>
  <div class="icon">
    <img :src="iconURL" />
  </div>
</template>
<script>
export default {
  name: 'base-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconURL () {
      return require(`../assets/${this.icon}.svg`)
    }
  }
}
</script>
