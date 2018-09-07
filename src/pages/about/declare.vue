<template>
  <div>
     <div class="header">
        <p>网站声明</p>
     </div>
     <div class="content">
        <p>特殊人才就业平台是棒棒团设计并推出的公益项目，本项目不以盈利为目的。因此，若本站出现的内容因为版权问题而对您造成困扰，请私下与我们联系，我们会及时处理。</p>
        <p>感谢您的体谅与支持。</p>
     </div>
  </div>
</template>

<script>
export default {
	name: 'WebDeclare'
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