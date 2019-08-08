<template>
  <div>
    <img src="../../assets/images/backg.jpg" style="width:100%;height:150px;display:block;" />
    <div class="selfcenter">
      <div class="left">
        <div
          v-for="(item ,index) in feather"
          v-html="item"
          :class=" current == index ? 'redright' : ''"
          @click="current = index"
          :key="index"
        ></div>
      </div>
      <div class="right">
        <div v-if="current == 0">
          <div class="common" style="padding-top:20px;">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div style="display:flex;justify-content:space-around">
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:出生日期</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:最高学历</div>
              <div>
                <select style="border:0;width:120px;outline:none;">
                  <option value disabled selected style="display:none">请选择</option>
                  <option value="本科">本科</option>
                  <option value="研究生">研究生</option>
                  <option value="高中生">高中生</option>
                  <option value="博士生">博士生</option>
                </select>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <select style="border:0;width:120px;outline:none;">
                  <option>本科</option>
                  <option>研究生</option>
                  <option>高中生</option>
                  <option>博士生</option>
                </select>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <select style="border:0;width:120px;outline:none;">
                  <option>本科</option>
                  <option>研究生</option>
                  <option>高中生</option>
                  <option>博士生</option>
                </select>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="common">
            <div class="name sec">
              <div>:姓名</div>
              <div>张三</div>
            </div>
            <div class="sex sec">
              <div>:性别</div>
              <div>
                <input type="radio" id="man" name="ssex" />
                <label for="man">男</label>
                <input type="radio" id="woman" name="ssex" />
                <label for="woman">女</label>
              </div>
            </div>
          </div>
          <div class="save">
            <div>保存</div>
          </div>
        </div>
        <div v-else-if="current == 1">
          <div style="color:black;padding:20px">
            上传附件简历
            <span style="color:#666;">(默认简历)</span>
          </div>
          <div class="j-table">
            <div class="j-zhuti" v-for="(item, index) in zhuti" :key="index">{{item}}</div>
            <div class="jianli item">
              <input
                type="checkbox"
                value="1.我的简历A.pdf"
                style="outline:none;width:15px;height:15px;vertical-align:middle"
              />
              <span
                style="color:blue;padding-left:10px;vertical-align:middle"
                @click="c"
              >1.我的简历A.pdf</span>
            </div>
            <div class="switch item">
              <template>
                <el-switch
                  v-model="value1"
                  active-text="开"
                  inactive-text="关"
                  active-color="orangered"
                  @change="achange"
                ></el-switch>
              </template>
            </div>
            <div class="item">
              <div>上传|删除</div>
            </div>
            <div class="jianli item">
              <input
                type="checkbox"
                value="1.我的简历A.pdf"
                style="outline:none;width:15px;height:15px;vertical-align:middle"
              />
              <span
                style="color:blue;padding-left:10px;vertical-align:middle"
                @click="c"
              >2.我的简历A.pdf</span>
            </div>
            <div class="switch item">
              <template>
                <el-switch
                  v-model="value2"
                  active-text="开"
                  inactive-text="关"
                  active-color="orangered"
                  @change="bchange"
                ></el-switch>
              </template>
            </div>
            <div class="item">
              <div>上传|删除</div>
            </div>
          </div>
          <div
            class="accountsave"
            style="position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 40px;
        color: white;
        background: orangered;
        border-radius: 2px;"
          >保存</div>
        </div>
        <div v-else-if="current == 2" style="padding-left:20px;">
          <div class="collect">
            <div class="collect-header" v-for="(item,) in headitem" :key="item.id">{{item.name}}</div>
          </div>

          <div
            class="collect-item"
            v-for="(item,index) in post.slice((currentpage-

    1)*pagesize,currentpage*pagesize)"
            :key="index"
          >
            <div class="collect-item-div">
              <input type="checkbox" class="postinput" />
              <span style="vertical-align:middle; padding-left: 10px;">{{item.positionname}}</span>
            </div>
            <div class="collect-item-div" style="vertical-align:middle;">{{item.companyname}}</div>
            <div class="collect-item-div" style="vertical-align:middle;">{{item.posttime}}</div>
            <div class="collect-item-div" style="color:blue;vertical-align:middle;">申请|删除</div>
          </div>
          <div class="collect-bottom">
            <el-pagination
              layout="total,sizes,prev, pager, next,jumper"
              background="true"
              :total="post.length"
              :current-page="currentpage"
              :page-sizes="[1,2,3,4,5]"
              :page-size="pagesize"
              @size-change="handlesizepage"
              @current-change="handlecurrentchange"
            ></el-pagination>
          </div>
        </div>
        <div v-else-if="current == 3">
          <div class="collect">
            <div class="collect-header" v-for="(item,) in headitem" :key="item.id">{{item.name}}</div>
          </div>

          <div
            class="collect-item"
            v-for="(item,index) in post.slice((currentpage-
    1)*pagesize,currentpage*pagesize)"
            :key="index"
          >
            <div class="collect-item-div">{{item.positionname}}</div>
            <div class="collect-item-div">{{item.companyname}}</div>
            <div class="collect-item-div">{{item.posttime}}</div>
            <div class="collect-item-div">浏览</div>
          </div>
          <div class="collect-bottom">
            <el-pagination
              layout="total,sizes,prev, pager, next,jumper"
              background="true"
              :total="post.length"
              :current-page="currentpage"
              :page-sizes="[1,2,3,4,5]"
              :page-size="pagesize"
              @size-change="handlesizepage"
              @current-change="handlecurrentchange"
            ></el-pagination>
          </div>
        </div>
        <div v-else class="accountSafe">
          <div class="accountup">
            <div style="padding-bottom:30px">更改邮箱账号</div>
            <div class="Acontent">
              <span>邮件账号:</span>
              <input type="email" placeholder="请输入邮箱账号" />
              <div class="subcode" style="display:inline-block;">发送验证码</div>
            </div>
            <div class="Acontent">
              <span>验证码:</span>
              <input placeholder="请输入验证码" />
            </div>
          </div>
          <div class="accountup">
            <div style="padding-top:30px">更改密码</div>
            <div class="Acontent">
              <span>原始密码:</span>
              <input type="text" placeholder="请输入密码" />
            </div>
            <div class="Acontent">
              <span>新密码:</span>
              <input type="text" placeholder="请输入新密码" />
            </div>
            <div class="Acontent">
              <span>确认密码:</span>
              <input type="text" placeholder="请再输入一次密码" />
            </div>
          </div>
          <div class="accountsave">保存</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import { Checkbox, Switch, Pagination } from "element-ui";
Vue.use(Checkbox);
Vue.use(Switch);
Vue.use(Pagination);

export default {
  name: "selfCenter",
  data() {
    return {
      feather: ["个人信息", "我的简历", "已收藏", "已投递", "账号安全"],
      current: 0,
      zhuti: ["简历名称", "默认设置", "操作"],
      checked: false,
      value2: false,
      value1: true,
      headitem: [
        {
          name: "职位名称",
          id: 0
        },
        {
          name: "公司名称",
          id: 1
        },
        {
          name: "收藏时间",
          id: 2
        },
        {
          name: "操作",
          id: 3
        }
      ],
      post: [
        {
          positionname: "缝纫机操作工111",
          companyname: "温州皮鞋厂",
          posttime: "2018-09-19"
        },
        {
          positionname: "缝纫机操作工222",
          companyname: "温州皮鞋厂",
          posttime: "2018-09-19"
        },
        {
          positionname: "缝纫机操作工333",
          companyname: "温州皮鞋厂",
          posttime: "2018-09-19"
        },
        {
          positionname: "缝纫机操作工444",
          companyname: "温州皮鞋厂",
          posttime: "2018-09-19"
        }
      ],
      pagesize: 1,
      currentpage: 1
    };
  },
  methods: {
    c() {
      console.log(111);
    },
    achange(val) {
      if (this.value2) {
        this.value2 = !val;
      } else {
        this.value2 = false;
      }
    },
    bchange(val) {
      if (this.value1) {
        this.value1 = !val;
      } else {
        this.value1 = false;
      }
    },
    handlesizepage(size) {
      this.pagesize = size;
    },
    handlecurrentchange(page) {
      this.currentpage = page;
    }
  }
};
</script>
<style lang="less" scoped>
.selfcenter {
  background: #ccc;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  padding: 40px 20px 0;
  font-size: 14px;

  .left {
    width: 200px;
    height: 100px;

    .redright {
      border-left: 2px solid red;
    }

    div {
      padding: 5px 0px 5px 10px;
      background: white;
      margin-top: 1px;
    }
  }

  .right {
    flex: auto;
    position: relative;
    margin-left: 30px;
    margin-bottom: 30px;
    background: white;

    .save {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      div {
        padding: 5px 40px;
        color: white;
        background: orangered;
        text-align: center;
        border-radius: 5px;
      }
    }

    .common {
      display: flex;
      justify-content: space-around;
      padding: 5px 40px 0;

      .sec {
        display: flex;

        div:nth-child(1) {
          width: 120px;
          direction: rtl;
          padding: 3px 15px 3px 0;
        }

        div:nth-child(2) {
          width: 120px;
          border: 1px solid #ccc;
          padding: 3px 0px 3px 10px;
          border-radius: 5px;
        }
      }
    }

    .j-table {
      padding: 30px 0 0 20px;
      display: flex;
      flex-wrap: wrap;
      margin-left: 50px;
      margin-right: 10px;

      .j-zhuti {
        max-width: 33.33%;
        width: 33.33%;
        text-align: center;
        background: #ccc;
        padding: 10px 0;
      }
      .item {
        max-width: 33.33%;
        width: 33.33%;
        text-align: center;
        padding: 10px 0;
      }
    }

    .collect {
      display: flex;
      flex-wrap: wrap;
      padding-top: 40px;
      .collect-header {
        max-width: 25%;
        width: 25%;
        text-align: center;
        background: #ccc;
        padding: 10px 0;
      }
    }
    .collect-item {
      display: flex;
      flex-wrap: wrap;

      .collect-item-div {
        max-width: 25%;
        width: 25%;
        text-align: center;
        padding: 10px 0;

        .postinput {
          outline: none;
          vertical-align: middle;
          width: 15px;
          height: 15px;
        }
      }
    }
    .collect-bottom {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    .accountSafe {
      padding: 30px 0 0 20px;

      .accountup {
        color: black;

        .Acontent {
          padding-left: 100px;
          color: #666;
          padding-top: 10px;
          span {
            display: inline-block;
            width: 65px;
            text-align: right;
            padding-right: 10px;
          }
          input {
            padding: 5px 5px;
            border: 1px solid #666;
            outline: none;
            width: 200px;
          }
          .subcode {
            padding: 3px 2px;
            margin-left: 30px;
            border-radius: 2px;
            border: 1px solid #666;
          }
        }
      }
      .accountsave {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 40px;
        color: white;
        background: orangered;
        border-radius: 2px;
      }
    }
  }
}
</style>
