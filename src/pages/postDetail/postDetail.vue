<template>
  <!--活动管理 -->
  <div class="activity">
    <div class="activity-form">
      <i class="iconfont icon-sousuo" style="font-size:18px "></i>
      <input type="text" placeholder="请输入要搜索的项目" class="input" style="line-height:2rem " />
    </div>
    <div
      style="display:inline-block;text-align:right;width:calc(100% - 18rem);cursor:pointer"
      @click="$router.push('/partTime')"
    >
      <span style="padding-right:8px;">创建活动</span>
      <i class="iconfont icon-tianjia" style="color:blue;font-size:30px;vertical-align:-4px;"></i>
    </div>
    <div class="list">
      <div class="list-item">
        <div class="list-items" v-for="(item, index) in activitydata" :key="index">
          <img class="db-block fl" :src="item.imgurl" />
          <div class="content-right flex">
            <div class="div le flex-col">
              <div class="title">{{item.title}}</div>
              <div class="des">{{item.des}}</div>
              <div class="time">开始时间:{{item.starttime}}结束时间:{{item.endtime}}</div>
              <div v-if="item.state == 1">
                <span>参赛数量：{{item.joinmount}}</span>
                <span>总投票数量：{{item.vote}}</span>
              </div>
            </div>
            <div class="cen div" v-html="item.state == 0 ? '未发布':'已发布' "></div>
            <div class="rig div" v-if="item.state == 1">
              <ul>
                <li @click="$router.push('/community')">规则设置</li>
                <li>白名单</li>
                <li>编辑</li>
                <li>删除</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "postDetail",
  data() {
    return {
      activitydata: [
        {
          imgurl: "../../assets/images/backg.png",
          title: "标题1",
          des: "这是介绍项目的描述",
          starttime: "2019-08-01",
          endtime: "2019-09-01",
          state: 0, // 0代表未发布   1代表已发布
          joinmount: 100,
          vote: 100
        },
        {
          imgurl: "../../assets/images/backg.png",
          title: "标题2",
          des: "这是介绍项目的描述",
          starttime: "2019-08-01",
          endtime: "2019-09-01",
          state: 1, // 0代表未发布   1代表已发布
          joinmount: 100,
          vote: 100
        },
        {
          imgurl: "../../assets/images/backg.png",
          title: "标题3",
          des: "这是介绍项目的描述",
          starttime: "2019-08-01",
          endtime: "2019-09-01",
          state: 0, // 0代表未发布   1代表已发布
          joinmount: 100,
          vote: 100
        },
        {
          imgurl: "../../assets/images/backg.png",
          title: "标题4",
          des: "这是介绍项目的描述这是介绍项目的描述这是介绍项目的描述",
          starttime: "2019-08-01",
          endtime: "2019-09-01",
          state: 0, // 0代表未发布   1代表已发布
          joinmount: 100,
          vote: 100
        }
      ]
    };
  }
};
</script>
<style scoped>
.activity {
  background: #fff;
  min-height: calc(100% - 350px);
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
.content-right {
  height: 100%;
}
.flex {
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.list {
  padding-top: 20px;
}
.list-items {
  height: 200px;
  overflow: hidden;
  border-top: 15px solid #ccc;
}
.db-block {
  display: block;
  height: 90%;
  width: 150px;
  padding-top: 20px;
}
.fl {
  float: left;
  padding-right: 25px;
}

.content-right .div:first-child:nth-last-child(2) {
  max-width: 43%;
  width: 43%;
}
.content-right .div:first-child:nth-last-child(3) {
  max-width: 43%;
  width: 43%;
}
.content-right .div:first-child:nth-last-child(3) ~ .rig {
  flex: 1;
  text-align: right;
}
.cen,
.rig {
  align-self: center;
}
ul > li {
  display: inline-block;
  text-align: center;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  border: 2px solid transparent;
  background-clip: content-box;
  border-radius: 5px;
  cursor: pointer;
}
ul li:nth-child(1) {
  background: gray;
  color: #fff;
}
ul li:nth-child(2) {
  background: gray;
  color: #fff;
}
ul li:nth-child(3) {
  background: green;
  color: #fff;
}
ul li:nth-child(4) {
  background: red;
  color: #fff;
}
</style>
