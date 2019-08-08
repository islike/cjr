<template>
  <div style="height:100%;">
    <!--规则设置-->
    <div style="min-height:calc(100% - 50px);height:calc(100% - 50px);width:100%;">
      <div class="rule flex-col justify-around">
        <div class="base-set rule-flex-33">
          <div class="header">基本设置</div>
        </div>
        <div class="card-set rule-flex-33">
          <div class="header">卡别设置</div>
        </div>
        <div class="whitelist-set rule-flex-33">
          <div class="header">白名单设置</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "community",
  data() {
    return {
      msg: "当前是社区页面"
    };
  }
};
</script>
<style scoped>
.rule {
  padding-left: 20px;
  height: 100%;
}
.flex-col {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.rule-flex-33 {
  max-height: 33%;
  height: 33%;
  width: 100%;
}
.justify-around {
  justify-content: space-around;
}
.header {
  line-height: 1.5rem;
  border-bottom: 3px solid #ccc;
  width: 100%;
}
</style>
