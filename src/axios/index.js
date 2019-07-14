import axios from 'axios'
/* baseURL基础地址 */
const ajax = axios.create({
  baseURL: '/api'
})

/**
 * interface CpInfoParams {
 *    id : Number;
 *    password : string;
 *    name : string;
 * }
 *   @param params CpInfoParams
 *   @return Promise<unfinded>
*/
// 获取全职数据
export const getfulldata = () =>
  ajax.get('/getfulldata').then(res => res)
/**
 * interface registerparam{
 *    user : string;
 *    password: string;
 *  repassword : string;
 * }
 *   @param params param
 */
// 注册
export const register = (param) => ajax.post('/v1/register', param).then(res => res.data)
/**
 * interface loginparam{
 *   user : string;
 * password : string;
 * }
 * @param {*} param
 */
// 登录
export const login = (param) => ajax.post('/v1/login', param).then(res => res.data)

/*
为了方便日后的维护，axios相关的内容统一封装到这里，不要让axios的方法散落在各个页面，统一都在这里 日后好维护。将axios的方法封装在这里，哪里要用，就在哪里按需导入即可。如：
export const checkUser = (param) => {

  return axios.post('/user/login.do', param).then(res => res.data)

  '/user/login.do'：是请求路径。param是形参，使用时请传实参。
  这里的回调函数 res => res.data 不是写死的，可能会有变化的，大家封装时要注意。
}
登录页面需要用到的axios.post我封装在这里，在登录页面按需引入后就可以使用了，
使用方法： checkUser( { 参数 } ).then(回调函数)

 */
