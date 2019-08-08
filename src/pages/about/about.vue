<template>
  <div class="about">
    <div class="left">
      <div
        v-for="(item ,index) in feather"
        v-html="item"
        :class=" current == index ? 'redright' : ''"
        @click="current = index"
        :key="index"
      ></div>
    </div>
    <div class="right">
      <div class="header" v-html="feather[current]"></div>
      <div class="content">很棒棒团</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      feather: ["关于我们", "加入我们", "网站声明"],
      current: 0
    };
  }
};
</script>
<style lang=less scoped>
.about {
  background: #ccc;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .left {
    width: 100px;
    height: 100px;
    font-size: 14px;

    .redright {
      border-left: 2px solid red;
    }

    div {
      padding: 5px 0px 5px 10px;
      background: white;
      margin-top: 1px;
    }
  }

  .right {
    flex: 1;
    background: white;
    margin: 0px 10px;
    font-size: 14px;

    .header {
      padding: 5px 10px;
      border-bottom: 1px solid #ccc;
    }
    .content {
      padding-left: 10px;
    }
  }
}
</style>
