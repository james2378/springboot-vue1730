import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import huodongfenlei from '@/views/modules/huodongfenlei/list'
    import discussliulangmaogou from '@/views/modules/discussliulangmaogou/list'
    import zhishileixing from '@/views/modules/zhishileixing/list'
    import lingyangxinxi from '@/views/modules/lingyangxinxi/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import discusstuanduixinxi from '@/views/modules/discusstuanduixinxi/list'
    import tuanduixinxi from '@/views/modules/tuanduixinxi/list'
    import discusshuodongxinxi from '@/views/modules/discusshuodongxinxi/list'
    import chongwufenlei from '@/views/modules/chongwufenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussliulangmaogouzhishi from '@/views/modules/discussliulangmaogouzhishi/list'
    import liulangmaogou from '@/views/modules/liulangmaogou/list'
    import liulangmaogouzhishi from '@/views/modules/liulangmaogouzhishi/list'
    import config from '@/views/modules/config/list'
    import zhiyuanshenqing from '@/views/modules/zhiyuanshenqing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '宠物资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/huodongfenlei',
        name: '活动分类',
        component: huodongfenlei
      }
      ,{
	path: '/discussliulangmaogou',
        name: '流浪猫狗评论',
        component: discussliulangmaogou
      }
      ,{
	path: '/zhishileixing',
        name: '知识类型',
        component: zhishileixing
      }
      ,{
	path: '/lingyangxinxi',
        name: '领养信息',
        component: lingyangxinxi
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/discusstuanduixinxi',
        name: '团队信息评论',
        component: discusstuanduixinxi
      }
      ,{
	path: '/tuanduixinxi',
        name: '团队信息',
        component: tuanduixinxi
      }
      ,{
	path: '/discusshuodongxinxi',
        name: '活动信息评论',
        component: discusshuodongxinxi
      }
      ,{
	path: '/chongwufenlei',
        name: '宠物分类',
        component: chongwufenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussliulangmaogouzhishi',
        name: '流浪猫狗知识评论',
        component: discussliulangmaogouzhishi
      }
      ,{
	path: '/liulangmaogou',
        name: '流浪猫狗',
        component: liulangmaogou
      }
      ,{
	path: '/liulangmaogouzhishi',
        name: '流浪猫狗知识',
        component: liulangmaogouzhishi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zhiyuanshenqing',
        name: '志愿申请',
        component: zhiyuanshenqing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
