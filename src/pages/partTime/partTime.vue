<template>
  <!--创建活动 -->
  <div class="creat" style="min-height:calc(100% - 50px)">
    <img src="../../assets/images/wenxintishi.png" class="img" />
    <div class="tips">
      <div>温馨提示</div>
      <div class="small" style="font-size:85%;color:#666;">请认真填写基本活动信息</div>
    </div>
    <div class="input">
      <label for="activity" style="padding-left:10px;">
        <input type="text" id="activity" placeholder="请输入活动名称" required />
      </label>
    </div>
    <div class="updownload">
      <label style="display:inline-block;cursor:pointer;" for="up">
        <div
          style="width:8rem;height:8rem;background:#FAFAFA;border:1px solid #ccc;
border-radius: 2px;"
        >
          <div style="text-align:center;font-size:1.5rem;color:#ccc">
            <img class="img-add" src="../../assets/images/iconfont707.png" />
          </div>
          <div class="text-center">上传活动封面</div>
        </div>
      </label>
      <input type="file" id="up" style="display:none;" accept="image/png, image/jpg, image/jpeg" />
    </div>
    <div class="updownload" draggable="ture" @drop="drop($event)">
      <label style="display:inline-block;cursor:pointer;" for="drop">
        <div class="drag">
          <img class="db-img-bl" src="../../assets/images/wenjian.png" />
          <p>点击或将文件拖拽这里上传</p>
          <p>支持扩展名: .rar .zip .doc .docx .pdf .jpg</p>
        </div>
      </label>
      <input type="file" id="drop" accep="*" />
    </div>
    <div class="acti-time">
      <input type="text" placeholder="开始时间" required />
      <span>-----</span>
      <input type="text" placeholder="结束时间" required />
    </div>
    <div class="activi-content">
      <textarea class="text-content" placeholder="活动内容"></textarea>
    </div>
    <div class="but">
      <div>提交</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "partTime",

  data() {
    return {
      msg: "当前是兼职页面"
    };
  },
  methods: {
    drop(e) {
      e.preventDefault();
      let length = e.dataTransfer.flies.length;
      if (length > 0) {
        this.$message("上传成功");
      }
    }
  }
};
</script>
<style scoped>
input[type="file"] {
  display: none;
}
input[type="text"] {
  line-height: 2rem;
  border: 1px solid #ccc;
  width: calc(50% - 25px);
}
.creat {
  padding: 2rem;
}
.img {
  width: 2.5rem;
  height: 2.5rem;
  vertical-align: -3px;
}
.text-center {
  text-align: center;
  color: #666;
}
.updownload {
  display: block;
  padding: 0.5rem 0;
}

.img-add {
  width: 4rem;
  height: 4rem;
  padding-top: 1rem;
}
.tips {
  display: inline-block;
  padding-left: 5px;
  padding-bottom: 1rem;
}
.input {
  border: 1px solid #ccc;
  line-height: 2;
  width: 40%;
}
.input input {
  border: none;
  width: calc(100% - 10px);
}
.input:focus-within {
  box-shadow: 0 0 2px #5bc0de;
}
.drag {
  width: 20rem;
  height: 10rem;
  text-align: center;
  border: 1px solid #ccc;
  background: #fafafa;
}
.db-img-bl {
  padding-top: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
}
.drag p {
  padding-top: 0.5rem;
}
.drag p:last-of-type {
  font-size: 85%;
  color: #ccc;
  text-overflow: ellipsis;
}
.acti-time {
  width: 40%;
  padding: 0.5rem 0;
}
.acti-time input:focus {
  box-shadow: 0 0 2px #5bc0de;
}
.activi-content {
  width: 40%;
  height: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 0 0 0.5rem;
  box-sizing: border-box;
  background: #fafafa;
  margin: 1rem 0 0.5rem;
}
.activi-content textarea {
  width: calc(100% - 0.5rem);
  height: calc(100% - 0.5rem);
  background: #fafafa;
}
.activi-content:focus-within {
  box-shadow: 0 0 2px #67afe9;
}
.but {
  padding: 1rem 0;
}
.but div {
  width: 30%;
  text-align: center;
  line-height: 3rem;
  background: #1aad19;
  color: #fff;
  border-radius: 5px;
  opacity: 0.8;
}
.but div:hover {
  opacity: 1;
}
</style>
