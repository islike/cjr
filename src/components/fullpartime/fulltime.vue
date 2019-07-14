<template>
  <div class="fulltime">
      <div class="header">{{project.name}}</div>
      <div style="padding-left:10px;">
       <span
        v-for="(item, index1) in project.detail"
         :key="index1"
         class="detail"
         >{{item}}<span class="vertical-line"></span></span>
         </div>
         <div class="company">{{project.company}}</div>
         <div class="flex1">
            <span>{{project.fee}}</span>
            <span style="color:#666;">发布于{{project.time}}</span>
         </div>
  </div>
</template>
<script>
export default {
  name: 'fulltime',
  props: {
    project: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.fulltime {
  box-sizing: border-box;
  border: 1px dashed #6c6c6c;
  max-width: 30%;
  width: 30%;
  margin-bottom:.825rem;
  flex-shrink: 0;
  padding-left:1.25rem;
  margin-left:1.6%;
  margin-right:1.6%;
  height:8.75rem;

  .header{
    padding: .56rem 0;
    color: #000;
    font-size:18px;
  }
  .detail{
    color: #666;
  }
  .company{
    padding-top: .625rem;
    padding-left: .625rem;
    color:#666;
  }
  .flex1{
    display: flex;
    justify-content: space-between;
    padding: 1.125rem .625rem 0;
  }
  .vertical-line{
    display:inline-block;
    background:#6c6c6c;
    width:2px;
    height:12px;
    margin: 0 4px ;
  }
}
</style>
