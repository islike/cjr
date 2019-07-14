<template>
<transition :name="whatfunction">
    <router-view/>
</transition>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      whatfunction: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/login') this.whatfunction = 'slide-right'
      else {
        this.whatfunction = 'slide-left'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.v-slide-left-enter, .v-slide-left-leave-to{
       opacity: 0;
}
.v-slide-left-active, .v-slide-left-leave-active{
      transition: opacity .8s;
}
.v-slide-left-enter-to, .v-slide-left-leave{
      opacity: 1;
}
html,body{
  height:100%;
}
</style>
