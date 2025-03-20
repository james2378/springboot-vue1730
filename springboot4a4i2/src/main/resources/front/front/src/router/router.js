import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import chongwufenleiList from '../pages/chongwufenlei/list'
import chongwufenleiDetail from '../pages/chongwufenlei/detail'
import chongwufenleiAdd from '../pages/chongwufenlei/add'
import zhishileixingList from '../pages/zhishileixing/list'
import zhishileixingDetail from '../pages/zhishileixing/detail'
import zhishileixingAdd from '../pages/zhishileixing/add'
import liulangmaogouList from '../pages/liulangmaogou/list'
import liulangmaogouDetail from '../pages/liulangmaogou/detail'
import liulangmaogouAdd from '../pages/liulangmaogou/add'
import lingyangxinxiList from '../pages/lingyangxinxi/list'
import lingyangxinxiDetail from '../pages/lingyangxinxi/detail'
import lingyangxinxiAdd from '../pages/lingyangxinxi/add'
import liulangmaogouzhishiList from '../pages/liulangmaogouzhishi/list'
import liulangmaogouzhishiDetail from '../pages/liulangmaogouzhishi/detail'
import liulangmaogouzhishiAdd from '../pages/liulangmaogouzhishi/add'
import tuanduixinxiList from '../pages/tuanduixinxi/list'
import tuanduixinxiDetail from '../pages/tuanduixinxi/detail'
import tuanduixinxiAdd from '../pages/tuanduixinxi/add'
import huodongfenleiList from '../pages/huodongfenlei/list'
import huodongfenleiDetail from '../pages/huodongfenlei/detail'
import huodongfenleiAdd from '../pages/huodongfenlei/add'
import huodongxinxiList from '../pages/huodongxinxi/list'
import huodongxinxiDetail from '../pages/huodongxinxi/detail'
import huodongxinxiAdd from '../pages/huodongxinxi/add'
import zhiyuanshenqingList from '../pages/zhiyuanshenqing/list'
import zhiyuanshenqingDetail from '../pages/zhiyuanshenqing/detail'
import zhiyuanshenqingAdd from '../pages/zhiyuanshenqing/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'chongwufenlei',
					component: chongwufenleiList
				},
				{
					path: 'chongwufenleiDetail',
					component: chongwufenleiDetail
				},
				{
					path: 'chongwufenleiAdd',
					component: chongwufenleiAdd
				},
				{
					path: 'zhishileixing',
					component: zhishileixingList
				},
				{
					path: 'zhishileixingDetail',
					component: zhishileixingDetail
				},
				{
					path: 'zhishileixingAdd',
					component: zhishileixingAdd
				},
				{
					path: 'liulangmaogou',
					component: liulangmaogouList
				},
				{
					path: 'liulangmaogouDetail',
					component: liulangmaogouDetail
				},
				{
					path: 'liulangmaogouAdd',
					component: liulangmaogouAdd
				},
				{
					path: 'lingyangxinxi',
					component: lingyangxinxiList
				},
				{
					path: 'lingyangxinxiDetail',
					component: lingyangxinxiDetail
				},
				{
					path: 'lingyangxinxiAdd',
					component: lingyangxinxiAdd
				},
				{
					path: 'liulangmaogouzhishi',
					component: liulangmaogouzhishiList
				},
				{
					path: 'liulangmaogouzhishiDetail',
					component: liulangmaogouzhishiDetail
				},
				{
					path: 'liulangmaogouzhishiAdd',
					component: liulangmaogouzhishiAdd
				},
				{
					path: 'tuanduixinxi',
					component: tuanduixinxiList
				},
				{
					path: 'tuanduixinxiDetail',
					component: tuanduixinxiDetail
				},
				{
					path: 'tuanduixinxiAdd',
					component: tuanduixinxiAdd
				},
				{
					path: 'huodongfenlei',
					component: huodongfenleiList
				},
				{
					path: 'huodongfenleiDetail',
					component: huodongfenleiDetail
				},
				{
					path: 'huodongfenleiAdd',
					component: huodongfenleiAdd
				},
				{
					path: 'huodongxinxi',
					component: huodongxinxiList
				},
				{
					path: 'huodongxinxiDetail',
					component: huodongxinxiDetail
				},
				{
					path: 'huodongxinxiAdd',
					component: huodongxinxiAdd
				},
				{
					path: 'zhiyuanshenqing',
					component: zhiyuanshenqingList
				},
				{
					path: 'zhiyuanshenqingDetail',
					component: zhiyuanshenqingDetail
				},
				{
					path: 'zhiyuanshenqingAdd',
					component: zhiyuanshenqingAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
