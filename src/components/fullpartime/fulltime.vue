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
  box-sizing: content-box;
  border: 1px dashed #6c6c6c;
  max-width: 33.33%;
  width: 33.33%;
  margin-bottom:.825rem;

  .f-header{
    padding-left: 10px;
    color: #000;
  }
}
</style>
