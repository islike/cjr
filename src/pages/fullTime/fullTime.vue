<template>
  <div>
    <div class="bi" style="text-align: center;margin:20px 0;font-size:20px;letter-spacing:5px;">全职</div>
    <!--/匪类导航-->
    <div class="nav" style="margin-left:25px;border-bottom:3px solid orangered">
      <div
        v-for="(item, index) in nav"
        :key="index"
        @click="c(index)"
        :class="index == cur ? 'color com' : 'com'"
      >{{item}}</div>
    </div>
    <div class="flex">
      <full
        v-for="(project, index) in projects1.slice((curt-1)*12,12*curt)"
        :project="project"
        :key="index"
      ></full>
    </div>
    <div class="elbottom" style="text-align:center;padding:0 0 15px 0;">
      <el-pagination
        layout="total,sizes,prev, pager, next,jumper"
        background="true"
        :total="projects1.length"
        :current-page="curt"
        :page-sizes="[12]"
        @current-change="handlecurrentchange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import full from "@/components/fullpartime/fulltime";
import { Pagination } from "element-ui";
import { getfulldata } from "@/axios/index";
Vue.use(Pagination);
export default {
  name: "fullTime",
  components: {
    full
  },
  data() {
    return {
      curt: 1,
      cur: 0,
      nav: ["发布时间", "热度"],
      /*
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
      ], */
      projects1: []
    };
  },
  created() {
    getfulldata().then(res => {
      if (res.data.code) {
        console.log(res.data.res);
        for (var detail of res.data.res) {
          detail.detail = detail.detail.split(",");
        }
        this.projects1 = res.data.res;
      }
    });
  },
  methods: {
    c(index) {
      this.cur = index;
    },
    handlecurrentchange(page) {
      this.curt = page;
    }
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>
