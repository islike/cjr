<template>
  <div>
    <holder></holder>
    <img src="../../assets/images/backg.jpg" style="width:1200px;height:100px;display:block;">
    <div class="selfcenter">
      <div class="left">
          <div v-for="(item ,index) in feather" v-html="item" :class=" current == index ? 'redright' : ''" @click="current = index">
        </div>
      </div>
      <div class="right">
        <div class="common" style="padding-top:20px;">
          <div class="name sec">
            <div>:姓名</div>
            <div>张三</div>
            </div>
          <div class="sex sec">
            <div>:性别</div>
            <div style="display:flex;justify-content:space-around">
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
                <option value='' disabled selected style="display:none">请选择</option>
                <option value='本科'>本科</option>
                <option value='研究生'>研究生</option>
                <option value='高中生'>高中生</option>
                <option value='博士生'>博士生</option>
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
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
              <input type="radio" id="man" name="ssex">
              <label for="man">男</label>
              <input type="radio" id="woman" name="ssex">
              <label for="woman">女</label>
            </div>
          </div>
          </div>
          <div class="save">
            <div>保存</div>
          </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'selfCenter',
  components: {
    holder,
    foot
  },
  data () {
    return {
      feather:['个人信息','我的简历','已收藏','已投递','账号安全'],
      current:0,
    }
  }
}
</script>
<style lang="less" scoped>
      .selfcenter{
          background:#ccc;
          width:100%;
          height:500px;
          display:flex;
          justify-content:space-between;
          padding:40px 20px 0;
          font-size:14px;
          

           .left{
         width:150px;
         height:100px;
        
          
          .redright{
            border-left:2px solid red;
          }
           
           div{
             padding:5px 0px 5px 10px ;
             background:white;
             margin-top:1px;
           }
       }

       .right{
         flex:1;
         margin-left:30px;
         margin-bottom:30px;
         background:white;
            

            .save{
              display:flex;
              justify-content:center;
              margin-top:40px;

                div{
                  padding:5px 40px;
                  color:white;
                  background:orangered;
                  text-align:center;
                  border-radius:5px;
                }
            }

            .common{
              display:flex;
              justify-content:space-between;
              padding: 5px 40px 0;

              .sec{
                display:flex;

                div:nth-child(1){
                  width:120px;
                  direction:rtl;
                  padding:3px 15px 3px 0;
                }

                div:nth-child(2){
                  width:120px;
                  border:1px solid #ccc;
                  padding:3px 0px 3px 10px;
                  border-radius:5px;
                }
              }
            }
       }
          }
</style>
