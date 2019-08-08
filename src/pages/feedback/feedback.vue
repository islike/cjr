<template>
  <div class="feedback">
    <div class="feedstyle common">
      <div>反馈类型:</div>
      <div>
        <select>
          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
    </div>
    <div class="feedcontent common">
      <div>反馈内容:</div>
      <div>
        <textarea cols="80" rows="20" placeholder="写下反馈内容" v-model="content"></textarea>
      </div>
    </div>
    <div class="contact common">
      <div>联系方式：</div>
      <input type="number" maxSize="11" placeholder="请输入联系方式" v-model="meassage" />
    </div>
    <div class="submit">
      <div>提交</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "feedback",
 
  data() {
    return {
      meassage: null,
      content: null
    };
  }
};
</script>
<style lang="less" scoped>
.feedback {
  width: 100%;
  background: #ccc;
  height: 500px;
  padding-left: 20px;

  .common {
    display: flex;
    margin-top: 15px;

    div:nth-child(2) {
      margin-left: 10px;

      border: 1px solid #ccc;

      select {
        width: 150px;
      }

      textarea {
        border-radius: 3px;
      }
    }
  }

  .submit {
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 50px;

    div {
      text-align: center;
      padding: 5px 50px;
      background: orangered;
      border-radius: 5px;
    }
  }
}
</style>
