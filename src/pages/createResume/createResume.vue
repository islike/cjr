<template>
  <div>
    <!--<holder></holder>-->



    <div id="createResume">

      <!--<div class="logo">-->
        <!--<img src="../../assets/images/logo.png"/>-->
      <!--</div>-->

      <div id="content">
        <div class="title">创建简历</div>

        <el-form class="from" @submit.prevent="submitResume"  >

        	<div id="" style="border: 1px solid #ff9500; overflow: hidden; padding-top: 10px">

        		<div class="from_left">
              <div class="img">
                <img src="./images/头像1.png" width="104px" height="104px" style="transform: translateX(-10px)" />
              </div>
              <el-upload
                class="upload-demo"
                action="https://locahlost:8082/"
                :multiple=false
                :show-file-list="false"
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <button type="primary">点击上传</button>
              </el-upload>
	        	</div>

            <div class="from_right">
              <div class="input_left padding_bottom_50 clearfloat" >
                <el-form label-position="right" size="mini" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">

                  <el-form-item label="姓名" prop="name" class="margin_bottom_10">
                    <el-input class="el-input" v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
                  </el-form-item>

                  <el-form-item label="出生日期" prop="date" class="margin_bottom_10">
                    <el-col :span="22">
                        <el-date-picker :clearable="false" :align="right" type="date" placeholder="选择日期" v-model="ruleForm.date"></el-date-picker>
                    </el-col>
                  </el-form-item>


                  <el-form-item label="最高学历" prop="educationTop" class="margin_bottom_10">
                    <el-select v-model="ruleForm.educationTop" placeholder="请选择">
                      <el-option v-for="(education,index) in Educations" :key="index" :label="education.label" :value="education.value"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="期望职业" prop="Occupation" class="margin_bottom_10">
                    <el-input class="el-input" v-model="ruleForm.Occupation" placeholder="请输入期望职业"></el-input>
                  </el-form-item>

                  <el-form-item label="手机号码" prop="phone" class="margin_bottom_10">
                    <el-input class="el-input" v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
                  </el-form-item>

                  <el-form-item label="残疾类别" prop="Disability" class="margin_bottom_10">
                    <el-select v-model="ruleForm.Disability" placeholder="请选择">
                      <el-option v-for="(Disability,index) in Disabilitys" :key="index" :label="Disability.label" :value="Disability.value"></el-option>
                    </el-select>
                  </el-form-item>

                </el-form>


              </div>

              <div class="input_right clearfloat">
                <el-form label-position="right" size="mini" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">

                  <el-form-item label="性别" prop="sex" class="margin_bottom_10">
                    <el-radio-group v-model="ruleForm.sex" style="width: 200px" fill="#ff9500">
                      <el-radio-button  label="男" class="sexSelect" style="width: 100px;" ></el-radio-button>
                      <el-radio-button label="女" class="sexSelect" style="width: 100px" ></el-radio-button>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="现居住地" prop="address" class="margin_bottom_10">
                    <el-input v-model="ruleForm.address" placeholder="请输入居住地"></el-input>
                  </el-form-item>

                  <el-form-item label="工作经验" prop="workExperience" class="margin_bottom_10">
                    <el-input v-model="ruleForm.workExperience" placeholder="请输入工作经验"></el-input>
                  </el-form-item>

                  <el-form-item label="期望城市" prop="workCity" class="margin_bottom_10">
                    <el-input v-model="ruleForm.workCity" placeholder="输入期望城市"></el-input>
                  </el-form-item>

                  <el-form-item label="电子邮箱" prop="email" class="margin_bottom_10">
                    <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱"></el-input>
                  </el-form-item>

                  <div class="showSurplus" v-if="showSurplus" @click="showSurplus=!showSurplus"> <span>展开更多<i class="showSurplusIcon"></i></span> </div>
                  <div class="showSurplus" v-else @click="showSurplus=!showSurplus"> <span>收起更多<i class="showSurplusIcon collect"></i></span> </div>

                </el-form>
              </div>

              <div style="clear: both"></div>

              <div v-show="!showSurplus" class="input_buttom padding_bottom_50 clearfloat">
                <div class="input_left">

                  <el-form label-position="right" size="mini" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">

                    <el-form-item label="工作类型" class="margin_bottom_10">
                      <el-select v-model="ruleForm.workType" placeholder="请选择工作类型">
                        <el-option v-for="(workType,index) in workTypes" :key="index" :label="workType.label" :value="workType.value"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="期望薪资" class="margin_bottom_10">
                      <el-input class="el-input" v-model="ruleForm.salary" placeholder="请输入期望薪资"></el-input>
                    </el-form-item>

                    <el-form-item label="求职状态" class="margin_bottom_10">
                      <el-select v-model="ruleForm.JobType" placeholder="请选择">
                        <el-option v-for="(JobType , index) in JobTypes" :key="index" :label="JobType.label" :value="JobType.value"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="民族" class="margin_bottom_10">
                      <el-select v-model="ruleForm.Nation" placeholder="请选择民族">
                        <el-option v-for="(Nation,index) in Nations" :key="index" :label="Nation.label" :value="Nation.value"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="婚姻情况" class="margin_bottom_10">
                      <el-select v-model="ruleForm.Marriage" placeholder="请选择婚姻情况">
                        <el-option v-for="(Marriage,index) in Marriages" :key="index" :label="Marriage.label" :value="Marriage.value"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="户籍地区" class="margin_bottom_10">
                      <el-input v-model="ruleForm.HouseholdRegister" placeholder="请输入户籍地区"></el-input>
                    </el-form-item>

                    <el-form-item label="毕业时间" class="margin_bottom_10" prop="GraduationTime">
                      <el-col :span="22">
                        <el-date-picker :clearable="false" :align="right" type="date" placeholder="选择毕业日期" v-model="ruleForm.GraduationTime"></el-date-picker>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="QQ号码" class="margin_bottom_10" prop="QQNumber">
                      <el-input v-model="ruleForm.QQNumber" placeholder="请输入QQ号码"></el-input>
                    </el-form-item>

                  </el-form>


                </div>

                <div class="input_right ">
                  <el-form label-position="right" size="mini" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">

                    <el-form-item label="期望行业" class="margin_bottom_10">
                      <el-input v-model="ruleForm.ExpectedIndustry" placeholder="请输入期望行业"></el-input>
                    </el-form-item>

                    <el-form-item label="求职岗位" class="margin_bottom_10">
                      <el-input v-model="ruleForm.JobPost" placeholder="请填写求职岗位"></el-input>
                    </el-form-item>

                    <el-form-item label="到岗时间" class="margin_bottom_10" prop="JobDate">
                      <el-col :span="22">
                        <el-date-picker :clearable="false" :align="right" type="date" placeholder="选择到岗日期" v-model="ruleForm.JobDate"></el-date-picker>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="身高" class="margin_bottom_10">
                      <el-input v-model="ruleForm.UserHeight" placeholder="请填入身高"></el-input>
                    </el-form-item>

                    <el-form-item label="政治面貌" class="margin_bottom_10">
                      <el-select v-model="ruleForm.PoliticsFace" placeholder="请选择政治面貌">
                        <el-option v-for="(PoliticsFace,index) in PoliticsFaces" :key="index" :value="PoliticsFace.value" :label="PoliticsFace.label"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="身份证号" class="margin_bottom_10" prop="IDNumber">
                      <el-input v-model="ruleForm.IDNumber" placeholder="请填写身份证号"></el-input>
                    </el-form-item>

                    <el-form-item label="家庭电话" class="margin_bottom_10">
                      <el-input v-model="ruleForm.HomePhone" placeholder="请填写家庭电话"></el-input>
                    </el-form-item>

                    <el-form-item label="通讯地址" class="margin_bottom_10">
                      <el-input v-model="ruleForm.PostalAddress" placeholder="请填写通讯地址"></el-input>
                    </el-form-item>

                  </el-form>
                </div>
              </div>
            </div>


        	</div>

        	<div style="clear: both;"></div>
          <el-button type="danger" class="submit">确认保存</el-button>
        </el-form>
        
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import {
  Button,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Option,
  OptionGroup,
  Form,
  FormItem,
  Upload,
  DatePicker,
  Col,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name,InputNumber);
Vue.component(Radio.name,Radio);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(RadioButton.name,RadioButton);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
Vue.component(OptionGroup.name,OptionGroup);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Upload.name,Upload);
Vue.component(DatePicker.name,DatePicker);
Vue.component(Col.name,Col);
Vue.component(Checkbox.name,Checkbox);
Vue.component(CheckboxButton.name,CheckboxButton);
Vue.component(CheckboxGroup.name,CheckboxGroup);

export default {
  name: 'createResume',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是创建简历页面',
      false:'false',
      true:'true',
      right:'right',
      left:'left',
      fill:'#ff9500',
      //上传头像路径
      fileList: [{name: '头像1.png', url: './images/头像1.png'}],
      radio3:'',

      //上传内容
      ruleForm: {
        name:'张三',
        date:'',
        educationTop:'',
        Occupation:'',
        phone:'',
        Disability:'',
        sex:'男',
        address:'',
        workExperience:'',
        workCity:'',
        email:'',
        workType:'',      //工作类型
        salary:'',        //薪资
        JobType:'',       //求职状态
        Nation:'',        //民族
        Marriage:'',      //婚姻情况
        HouseholdRegister:'',   //户籍地
        GraduationTime:'',      //毕业时间
        QQNumber:'',      //QQ号码
        ExpectedIndustry:'',    //期望行业
        JobPost:'',       //求职岗位
        JobDate:'',       //到岗时间
        UserHeight: '',   //身高
        PoliticsFace:'',  //政治面貌
        IDNumber:'',      //身份证号码
        HomePhone:'',     //家庭电话
        PostalAddress:'', //通讯地址
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        date: [
          { required: true, message: '请选择日期', trigger: 'blur' ,type:"date" }
        ],
        educationTop:[
          { required: true, message: '请选择学历', trigger: 'blur' }
        ],
        Occupation:[
          { required: true, message: '请输入职业', trigger: 'blur' }
        ],
        phone:[
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min:11,max:11,  message: '请正确输入手机号', trigger: 'change',type:'number'}
        ],
        Disability:[
          { required: true, message: '请选择残疾类型', trigger: 'blur' }
        ],
        sex:[
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        address:[
          { required: true, message: '请填写地址', trigger: 'blur' }
        ],
        workExperience:[
          { required: true, message: '请工作经验', trigger: 'blur' }
        ],
        workCity:[
          { required: true, message: '请填写期望城市', trigger: 'blur' }
        ],
        email:[
          { required: true, message: '请正确填写邮件', trigger: 'change' ,type:'email'}
        ],
        GraduationTime:[    //毕业时间
          {  message: '请填写正确的时间', trigger: 'change' ,type:'date' }
        ],
        QQNumber:[
          { min:11,max:11,  message: '请正确输入手机号', trigger: 'change',type:'number'}
        ],
        IDNumber:[
          { message: '请填写正确的身份证号' ,trigger:'change' , min:18,max:18}
        ]

      },
      //对齐方式
      labelPosition:'right',

      //学历
      Educations:[
        {
          value: '1',
          label: '小学'
        }, {
          value: '2',
          label: '初中'
        }, {
          value: '3',
          label: '高中'
        }, {
          value: '4',
          label: '本科'
        }, {
          value: '5',
          label: '研究生'
        }, {
          value: '6',
          label: '博士'
        }
      ],

      //残疾类
      Disabilitys:[
        {
          value: '1',
          label: '视力残疾'
        },
        {
          value: '2',
          label: '听力残疾'
        },
        {
          value: '3',
          label: '言语残疾'
        },
        {
          value: '4',
          label: '肢体残疾'
        },
        {
          value: '5',
          label: '智力残疾'
        },
        {
          value: '6',
          label: '精神残疾'
        },
        {
          value: '7',
          label: '多重残疾'
        }
      ],

      //工作类型
      workTypes:[
        {
          value: '1',
          label: 'IT互联网'
        },
        {
          value: '2',
          label: '电子商务'
        },
        {
          value: '3',
          label: '电子电器'
        },
        {
          value: '4',
          label: '人事行政'
        },
        {
          value: '5',
          label: '其他类型'
        }
      ],

      //求职状态
      JobTypes:[
        {
          value:'1',
          label:'实习'
        },
        {
          value:'2',
          label:'兼职'
        },
        {
          value:'3',
          label:'全职'
        },
        {
          value:'4',
          label:'先看看'
        }
      ],

      //民族
      Nations:[
        {value:'1', label:'汉族'},

      ],

      //婚姻情况
      Marriages:[
        {
          value:'1',
          label:'已婚'
        },
        {
          value:'2',
          label:'未婚'
        }
      ],

      //政治面貌
      PoliticsFaces:[
        {
          value:'1',
          label:'群众'
        },
        {
          value:'2',
          label:'团员'
        },
        {
          value:'3',
          label:'党员'
        },
        {
          value:'4',
          label:'无党派人士'
        },
        {
          value:'5',
          label:'其他党派'
        }
      ],

      showSurplus:false


    }
  },
  methods:{
    //提交编辑好的简历信息
  	submitResume(){
  		console.log("提交简历")
  	},
    //提交头像
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },

    //表单验证
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  }
}
</script>



<style scoped>


  /*清除浮动代码*/
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}    /*兼容IE*/

  #createResume{
    width: 100%;
    height: auto;
    background: url("./images/ross-findon-303091-unsplash.jpg") repeat-y;
    background-size: cover;
    background-attachment:fixed;
    padding: 50px 0 50px 0;
  }

  .logo{
    width: 190px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  #content{
    width: 1000px;
    height: auto;
    background: #fff;
    margin: 0 auto;
    padding: 30px 0 60px 0;
  }
  .title{
    text-align: center;
    font-size: 24px;
    color: #333;
    font-weight: bold;
    padding-bottom: 50px;
  }
  .from{
  	width: 900px;
  	height: auto;
  	margin: 0 auto;
  	
  }
  .from_left{
  	float: left;
  	width: 110px;
    padding-left: 20px;
  }
  .img{
    width: 85px;
    height: 104px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .from_left button{
    width: 60px;
    height: 20px;
    padding: 0;
    margin-left: 12px;
  }

  
  .from_right{
  	float: left;

  }

  .input_left,.input_right{
    width: 300px;
    height: auto;
    float: left;
  }

  .input_right{
    padding-left: 40px;
  }

  .el-input{
    width: 200px;
    height: 30px;
  }

  .el-input>input{
    width: 198px;
    height: 28px;
  }



  .showSurplus{
    width: 80px;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    cursor: pointer;
    transform: translateX(200px);
  }

  .showSurplus i{
    display: inline-block;
    width: 23px;
    height: 14px;
    color: black;
    background: url("../../assets/images/精灵.png") no-repeat;
    background-position: -50px -32px;
  }

  .showSurplus .collect{
    background-position:-49px -35px;
    transform: rotate(180deg);
  }

  .input_buttom{
    /*margin-top: 50px;*/
    width: 100%;
    height: auto;
  }

  
  .submit{
    display: block;
  	margin: 0 auto;
    width: 400px;
    height: 50px;
    margin-top: 50px;
    font-size: 20px;
    font-weight:bold ;
    color: #fff;
    background: #ff9500;
  }
</style>

<style>

  .margin_bottom_10{
    margin-bottom: 10px !important;
  }

  .sexSelect span{
    padding: 7px 43px !important;
  }

  .padding_bottom_50{
    padding-bottom: 60px !important;
  }

  .el-input input{
    width: 200px !important;
  }

  input[type=text]{
    border: ridge 1px;
    outline: none;
  }
</style>
