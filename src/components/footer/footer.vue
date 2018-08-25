<template>
  <footer>
      <div class="footer clearfix">
        <div>
          <h3 class="title">有情链接</h3>
          <ul>
            <li><a href="/" target="_blank">中国残疾人联合协会</a></li>
            <li><a href="/" target="_blank">中国残疾人互助委员会</a></li>
            <li><a href="/" target="_blank">中国残疾人就业招聘网</a></li>
            <li><a href="/" target="_blank">棒棒团公益平台</a></li>
            <li><a href="/" target="_blank">棒棒团残疾人互助论坛</a></li>
          </ul>
        </div>
        <div class="about">
          <h3 class="title">关于棒棒团</h3>
          <ul class="clearfix">
            <li>
              <a href="/" target="_blank">关于我们</a>
            </li>
            <li>
              <a href="/" target="_blank">加入我们</a>
            </li>
            <li>
              <a href="/" target="_blank">网站说明</a>
            </li>
          </ul>
          <h3 class="title">服务中心</h3>
          <ul class="clearfix">
            <li>
              <a href="/" target="_blank">残友互助社区</a>
            </li>
            <li>
              <a href="/" target="_blank">问题反馈</a>
            </li>
            <li>
              <a href="/" target="_blank">帮助中心</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3 class="title">联系我们</h3>
          <ul>
            <li>邮箱： bangbangtuan.sina.com</li>
            <li>QQ交流群： 12345678</li>
          </ul>
          <ul class="code clearfix">
            <li>
              <img src="../../../src/assets/images/hero.png" alt="">
            </li>
            <li>
              <img src="../../../src/assets/images/hero.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <span>版权信息</span>
    </footer>
</template>
<script>
export default {
  name: 'foot'
}
</script>
<style lang="less" scoped>
footer{
  background-color: #303a40;
  height: 300px;
  color: #fff;
  font-size: 14px;
  .footer{
    padding-top: 40px;
    width: 1200px;
    height: 230px;
    margin: 0 auto;
    border-bottom: 1px solid #666;
    div{
      padding-left: 50px;
      box-sizing: border-box;
      width: 400px;
      float: left;
      /* border-right: 1px solid #666; */
      .title{
        font-size: 18px;
        font-weight: 600;
        /* padding-bottom: 18px; */
      }
      ul{
        li{
          /* margin-top: 17px; */
          margin-top: 15px;
          a{
            color: #fff;
          }
        }
      }
    }
    .about{
      position: relative;
      ul{
        margin: 20px 0 30px 0;
        li{
          float: left;
          margin-top: 0;
          margin-right: 20px;
        }
      }
    }
    .about::before{
        content: "";
        height: 200px;
        width: 1px;
        background-color: #666;
        position: absolute;
        top:0;
        left: 0;
      }
    .about::after{
      content: "";
      height: 200px;
      width: 1px;
      background-color: #666;
      position: absolute;
      top:0;
      right: 0;
    }
    .contact{
      .code{
        li{
          float: left;
          width: 100px;
          height: 100px;
          margin: 20px 30px 0 0;
          img{
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
  span{
    display: block;
    line-height: 30px;
    text-align: center;
  }
}
</style>
