<template>
  <!--数据管理 -->
  <div class="data" style="min-height:calc(100% - 50px);height:calc(100% - 50px)">
    <div class="activity-form">
      <i class="iconfont icon-sousuo" style="font-size:18px "></i>
      <input type="text" placeholder="请输入要搜索的项目" class="input" style="line-height:2rem " />
    </div>
    <div
      style="display:inline-block;text-align:right;width:calc(100% - 18rem);cursor:pointer"
      @click="$router.push('/partTime')"
    >
      <span style="padding-right:8px;">添加投票队伍</span>
      <i class="iconfont icon-tianjia" style="color:blue;font-size:30px;vertical-align:-4px;"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "jobFair",
  data() {
    return {
      msg: "当前是招聘会页面"
    };
  }
};
</script>
<style scoped>
.data {
  padding-left: 20px;
}
.activity-form {
  line-height: 2rem;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 20px;
}
.activity-form:focus-within {
  box-shadow: 0 0 2px #67afe9;
}
.input {
  color: #666;
  margin-left: 8px;
  width: calc(100% - 35px);
}
</style>
