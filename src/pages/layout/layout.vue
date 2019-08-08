<template>
  <div id="app">
    <!-- 头部 -->
    <holder></holder>
    <!-- body -->
    <router-view class="layout" />
    <!--尾部  -->
    <foot></foot>
  </div>
</template>
<script>
import holder from "@/components/header/header";
import foot from "@/components/footer/footer";
export default {
  name: "layout",
  components: {
    holder,
    foot
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f8fafc;
}
.layout {
  height: calc(100% - 350px);
}
</style>


