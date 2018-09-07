<template>
  <div>
   <div class="header">
      <p>关于我们</p>
   </div>
   <div class="content">
       <p>棒棒团是由许多志同道合、热情洋溢的小伙伴们组成。成员分布在中国的各个角落，是一个热心公益、以服务社会为宗旨的线上团队。棒棒团从创队初期就十分注重对社会的无偿奉献。在毕业生技能培训、残疾人求职等公共领域，始终坚持免费服务。</p>
   </div>
  </div>
</template>

<script>
export default {
	name: 'AboutUs'
}
</script>

<style lang="less" scoped>
   .header{
     width: 928px;
     height: 50px;
     line-height: 50px;
     border-bottom: 1px solid #eeeeee;
     padding-left: 20px;
     margin-left: -20px;
     p{
       margin-top: -20px;
     }
   }
   .content{
      padding-top: 30px;
      line-height: 26px;
   }
</style>