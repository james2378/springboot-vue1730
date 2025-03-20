<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","width":"100%","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230129/dbebf062da3746d3b9a44b95553acebe.jpg) no-repeat center bottom / 100% auto","justifyContent":"center","display":"flex"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"20px 40px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0 auto","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center top","width":"800px","position":"relative","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"width":"100%","margin":"10px 0 20px","lineHeight":"44px","fontSize":"22px","color":"#333","textAlign":"center"}'>流浪猫狗救助救援网站登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","padding":"0 10%","margin":"0 0 20px","flexWrap":"wrap","display":"flex"}' prop="username">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>账号：</div>
				<input :style='{"border":"1px solid #eee","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","color":"#333","borderRadius":"8px","width":"100%","fontSize":"14px","height":"40px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","padding":"0 10%","margin":"0 0 20px","flexWrap":"wrap","display":"flex"}' prop="password">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<input :style='{"border":"1px solid #eee","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","color":"#333","borderRadius":"8px","width":"100%","fontSize":"14px","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"100%","padding":"0 10%","margin":"10px 0 "}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"width":"100%","margin":"0","alignItems":"center","display":"flex"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 auto","color":"#333","minWidth":"120px","outline":"none","borderRadius":"0","background":"linear-gradient(60deg, rgba(159,159,215,1) 0%, rgba(222,222,255,1) 25%, rgba(255,255,255,1) 55%, rgba(222,222,255,1) 80%, rgba(159,159,215,1) 100%),#9F9FD7","flex":"1","width":"49%","fontSize":"16px","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 5px","outline":"none","color":"#333","borderRadius":"4px","background":"none","flex":"1","width":"49%","fontSize":"16px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"100%","margin":"20px 0","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
			<router-link :style='{"cursor":"pointer","margin":"0 10px 10px 0","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230129/bc3d34ffcafa4e53b8fa1013dfdfb08e.png) repeat-x right top / auto 100%,#43bcaa","fontSize":"16px","textDecoration":"none","minWidth":"100px","lineHeight":"44px"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"宠物分类","menuJump":"列表","tableName":"chongwufenlei"}],"menu":"宠物分类管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"知识类型","menuJump":"列表","tableName":"zhishileixing"}],"menu":"知识类型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","宠物类别统计","领养状态统计","查看评论","首页总数","首页统计"],"menu":"流浪猫狗","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","删除","审核","修改"],"menu":"领养信息","menuJump":"列表","tableName":"lingyangxinxi"}],"menu":"领养信息管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","查看评论"],"menu":"流浪猫狗知识","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除","查看评论","活动"],"menu":"团队信息","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"活动分类","menuJump":"列表","tableName":"huodongfenlei"}],"menu":"活动分类管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","查看评论","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核","修改","每日申请人数统计","首页总数","首页统计"],"menu":"志愿申请","menuJump":"列表","tableName":"zhiyuanshenqing"}],"menu":"志愿申请管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-full","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"宠物资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","查看评论","宠物领养"],"menu":"流浪猫狗列表","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","查看评论"],"menu":"流浪猫狗知识列表","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看评论","查看","申请"],"menu":"团队信息列表","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","查看评论"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"领养信息","menuJump":"列表","tableName":"lingyangxinxi"}],"menu":"领养信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"志愿申请","menuJump":"列表","tableName":"zhiyuanshenqing"}],"menu":"志愿申请管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","查看评论","宠物领养"],"menu":"流浪猫狗列表","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","查看评论"],"menu":"流浪猫狗知识列表","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看评论","查看","申请"],"menu":"团队信息列表","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","查看评论"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
  components: {
  },
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
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

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230129/dbebf062da3746d3b9a44b95553acebe.jpg) no-repeat center bottom / 100% auto;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border: 1px solid #eee;
			border-radius: 8px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .5);
			color: #333;
			width: 100%;
			font-size: 14px;
			height: 40px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 1px solid #eee;
			border-radius: 8px;
			padding: 0 10px;
			outline: none;
			color: #333;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 110px);
			font-size: 14px;
			height: 40px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #9f9fd7;
			border-color: #9f9fd7;
		}
		.list-type /deep/ .el-radio__label {
			color: #666666;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #9f9fd7;
			font-size: 14px;
		}
	}
</style>
