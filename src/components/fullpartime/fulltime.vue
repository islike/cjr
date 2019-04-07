<template>
  <div class="fulltime">
    <div class="f-header">{{name}}</div>
    <slot name="detail"/>
    <slot name="company"/>
    <slot name="fee"/>
  </div>
</template>
<script>
export default {
  name: 'fulltime',
  props: {
    name: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.fulltime {
  max-width: 33.33%;
  width: 33.33%;
}
</style>
