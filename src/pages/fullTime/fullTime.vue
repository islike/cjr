<template>
  <div>
    <holder></holder>
    <full-time
        v-for="(project ,index) in projects"
        :name="project.name"
        :key="index">
      <div slot="detail" class="padding-l">
       <span
        v-for="(item,index1) in project.detail"
         :key="index1"
         class="detail"
         >{{item}}</span>
      </div>
      <div slot="company" class="padding-l">{{project.company}}</div>
      <div slot="fee" class="padding-l">
        <span>{{project.fee}}</span>
        <span>{{project.time}}</span>
      </div>
    </full-time>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import fullTime from '@/components/fulltime/fulltime'
export default {
  name: 'fullTime',
  components: {
    foot,
    holder,
    fullTime
  },
  data () {
    return {
      projects: [
        {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }, {
          name: '资深高级动画师',
          detail: ['北京', '经验1-3年', '包吃', '包住', '五险', '一金'],
          company: '年高管公司',
          fee: '15k-30k',
          time: '2018-01-02'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import 'index.scss';
</style>
