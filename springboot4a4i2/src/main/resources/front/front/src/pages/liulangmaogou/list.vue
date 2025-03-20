<template>
<div>
	<div :style='{"width":"100%","padding":"20px 0 20px 100px","margin":"0 auto","borderRadius":"0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 95%, rgba(189,189,189,1) 100%)"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"16px","lineHeight":"1"}'>
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in breadcrumbItem" :key="index">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="list-preview" :style='{"padding":"0 7% ","margin":"0 auto","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative"}'>
		
		<div class="category-2" :style='{"padding":"20px 0","margin":"60px 0 0","flexWrap":"wrap","background":"linear-gradient(60deg, rgba(159,159,215,1) 0%, rgba(222,222,255,1) 40%, rgba(255,255,255,1) 70%, rgba(222,222,255,1) 90%, rgba(159,159,215,1) 100%),rgb(159,159,215)","display":"flex","width":"220px","height":"100%","order":"2"}'>
			<div class="item" :class="swiperIndex == '-1' ? 'active' : ''" @click="getList(1, '全部')" :plain="isPlain">全部</div>
			<div class="item" :class="swiperIndex == index ? 'active' : ''" v-for="(item, index) in fenlei" :key="index" @click="getList(1, item, 'btn' + index)" :ref="'btn' + index" plain>{{item}}</div>
		</div>
	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"10px","margin":"40px 0 0","alignItems":"center","flexWrap":"wrap","textAlign":"center","background":"#f5f5f5","display":"flex","width":"100%","height":"auto"}'>
      <el-form-item :style='{"alignItems":"center","margin":"0 4px 0 0","display":"flex"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>宠物名称</div>
        <el-input v-model="formSearch.chongwumingcheng" placeholder="宠物名称" clearable></el-input>
      </el-form-item>
      <el-form-item :style='{"alignItems":"center","margin":"0 4px 0 0","display":"flex"}'>
		<div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>宠物分类</div>
        <el-select v-model="formSearch.chongwufenlei" placeholder="请选择宠物分类" :clearable="true">
          <el-option v-for="(item, index) in chongwufenleiOptions" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :style='{"alignItems":"center","margin":"0 4px 0 0","display":"flex"}'>
		<div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>宠物性别</div>
        <el-select v-model="formSearch.chongwuxingbie" placeholder="请选择宠物性别" :clearable="true">
          <el-option v-for="(item, index) in chongwuxingbieOptions" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :style='{"alignItems":"center","margin":"0 4px 0 0","display":"flex"}'>
		<div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>状态</div>
        <el-select v-model="formSearch.zhuangtai" placeholder="请选择状态" :clearable="true">
          <el-option v-for="(item, index) in zhuangtaiOptions" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 10px 0 0","color":"#fff","minWidth":"90px","outline":"none","borderRadius":"0","background":"#fad76f","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="isAuth('liulangmaogou','新增')" :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 10px 0 0","color":"#fff","minWidth":"90px","outline":"none","borderRadius":"0","background":"#9f9fd7","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="add('/index/liulangmaogouAdd')"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>

	<div class="list" :style='{"padding":"20px 7% 20px 7%","margin":"20px 0 10px","background":"none","flex":"1","width":"100%","minWidth":"900px","order":"3"}'>
		<!-- 样式一 -->
		<div class="list1 index-pv1" :style='{"padding":"0 0 0 3%","margin":"30px 0 0","overflow":"hidden","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
			<div :style='{"cursor":"pointer","margin":"0 3% 10% 0","flexWrap":"wrap","background":"none","display":"flex","width":"30%","position":"relative","justifyContent":"space-between","height":"auto"}' v-for="(item, index) in dataList" :key="index" @click="toDetail(item)" class="list-item animation-box">
				<img :style='{"padding":"20px 10px","margin":"0 0 12px","objectFit":"contain","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230129/b183ae010bb2489e8747e9baffeed40f.png) no-repeat center top / 100% 100%","display":"block","width":"100%","height":"260px"}' v-if="item.tupian && item.tupian.substr(0,4)=='http'" :src="item.tupian" class="image" />
				<img :style='{"padding":"20px 10px","margin":"0 0 12px","objectFit":"contain","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230129/b183ae010bb2489e8747e9baffeed40f.png) no-repeat center top / 100% 100%","display":"block","width":"100%","height":"260px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" class="image" />
				<div v-if="item.price" :style='{"width":"100%","padding":"4px 10px","lineHeight":"24px","fontSize":"14px","color":"red","textAlign":"right"}' class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
				<div :style='{"padding":"4px 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","width":"100%","lineHeight":"30px","fontSize":"14px","textOverflow":"ellipsis"}' class="name ">{{item.chongwumingcheng}}</div>
				<div :style='{"padding":"4px 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","width":"100%","lineHeight":"30px","fontSize":"14px","textOverflow":"ellipsis"}' class="name ">{{item.chongwufenlei}}</div>
				<div :style='{"padding":"4px 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","width":"100%","lineHeight":"30px","fontSize":"14px","textOverflow":"ellipsis"}' class="name ">宠物性别:{{item.chongwuxingbie}}</div>
			</div>
		</div>
		
		<!-- 样式二 -->
	</div>

	<!-- 热门信息 -->
	<div class="hot" :style='{"width":"220px","margin":"60px 0 0","background":"none","height":"auto","order":"6"}'>
	  <div :style='{"padding":"0 0 20px","color":"#333","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","width":"100%","lineHeight":"40px","fontSize":"22px","fontWeight":"bold"}'>热门信息</div>
	  <div :style='{"padding":"20px 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
	    <div v-for="item in hotList" :key="item" :style='{"cursor":"pointer","width":"100%","margin":"0 0 20px","background":"none","height":"auto"}' @click="toDetail(item)">
	      <img :style='{"padding":"20px 10px","margin":"0 0 10px","objectFit":"contain","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230129/b183ae010bb2489e8747e9baffeed40f.png) no-repeat center top / 100% 100%","display":"block","width":"100%","height":"160px"}' v-if="item.tupian && item.tupian.substr(0,4)=='http'" :src="item.tupian" alt="">
	      <img :style='{"padding":"20px 10px","margin":"0 0 10px","objectFit":"contain","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230129/b183ae010bb2489e8747e9baffeed40f.png) no-repeat center top / 100% 100%","display":"block","width":"100%","height":"160px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="">
	      <div :style='{"padding":"0 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.chongwumingcheng}}</div>
	      <div :style='{"padding":"0 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.chongwufenlei}}</div>
	      <div :style='{"padding":"0 0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"#efeffd","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.chongwuxingbie}}</div>
	      <!--<div :style='{"padding":"0 10px","lineHeight":"24px","fontSize":"14px","color":"#666","textAlign":"right","display":"none"}'>2022-02-02</div>-->
	    </div>
	  </div>
	</div>
	
	<el-pagination
	  background
	  class="pagination"
	  :pager-count="7"
	  :page-size="pageSize"
	  :page-sizes="pageSizes"
	  prev-text="<"
	  next-text=">"
	  :hide-on-single-page="true"
	  :layout='["total","prev","pager","next","jumper"].join()'
	  :total="total"
	  :style='{"padding":"0","margin":"10px auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"1200px","fontWeight":"500"}'
	  @current-change="curChange"
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '流浪猫狗'
          }
        ],
        formSearch: {
          chongwumingcheng: '',
          chongwufenlei: '',
          chongwuxingbie: '',
          zhuangtai: '',
        },
        fenlei: [],
        hotList: [],
        dataList: [],
        total: 1,
        pageSize: 10,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
	      chongwufenleiOptions: [],
	      chongwuxingbieOptions: [],
	      zhuangtaiOptions: [],
        timeRange: []
      }
    },
    created() {
      this.indexQueryCondition = this.$route.query.indexQueryCondition ? this.$route.query.indexQueryCondition : '';
      this.baseUrl = this.$config.baseUrl;
      this.$http.get('option/chongwufenlei/chongwufenlei').then(res => {
        if (res.data.code == 0) {
          this.chongwufenleiOptions = res.data.data;
        }
      });
	    this.chongwuxingbieOptions = '公,母'.split(',');
	    this.zhuangtaiOptions = '已领养,未领养'.split(',');
      this.getFenlei();
      this.getList(1, '全部');
      this.getHotList();
    },
    //方法集合
    methods: {
      add(path) {
        this.$router.push({path: path});
      },
      getHotList() {
        let autoSortUrl = "";
        autoSortUrl = "liulangmaogou/autoSort";
        if(localStorage.getItem('Token')) {
            autoSortUrl = "liulangmaogou/autoSort2";
        }
          this.$http.get(autoSortUrl, {params: {
              page: 1,
              limit: 4,
          }}).then(res => {
              if (res.data.code == 0) {
                  this.hotList = res.data.data.list;
              }
          })
      },
      getFenlei() {
        this.$http.get('option/chongwufenlei/chongwufenlei').then(res => {
          if (res.data.code == 0) {
            this.fenlei = res.data.data;
          }
        });
      },
      getList(page, fenlei, ref = '') {
		if(fenlei == '全部') this.swiperIndex = -1;
		for(let i=0;i<this.fenlei.length;i++) {
			if(fenlei == this.fenlei[i]) {
				this.swiperIndex = i;
				break;
			}
		}
        this.curFenlei = fenlei;
        if (this.curFenlei == '全部') {
          this.isPlain = false;
        } else {
          this.isPlain = true;
        }
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.chongwumingcheng != '') searchWhere.chongwumingcheng = '%' + this.formSearch.chongwumingcheng + '%';
        if (this.formSearch.chongwufenlei != '') searchWhere.chongwufenlei = this.formSearch.chongwufenlei;
        if (this.formSearch.chongwuxingbie != '') searchWhere.chongwuxingbie = this.formSearch.chongwuxingbie;
        if (this.formSearch.zhuangtai != '') searchWhere.zhuangtai = this.formSearch.zhuangtai;
        if (this.curFenlei != '全部') searchWhere.chongwufenlei = this.curFenlei;
        this.$http.get('liulangmaogou/list', {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
      curChange(page) {
        this.getList(page,this.curFenlei);
      },
      prevClick(page) {
        this.getList(page,this.curFenlei);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1,this.curFenlei);
      },
      nextClick(page) {
        this.getList(page,this.curFenlei);
      },
      toDetail(item) {
        this.$router.push({path: '/index/liulangmaogouDetail', query: {detailObj: JSON.stringify(item)}});
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #333;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner {
		color: #333;
		display: inline-block;
	}
	
	.category-1 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #efefef;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 0 100% 50% 0;
		margin: 0 0 10px 0;
		color: #999;
		background: url(http://codegen.caihongy.cn/20230129/28534616108b4d29a0a55fceffd7b720.png) no-repeat;
		width: 100%;
		font-size: 14px;
		line-height: 58px;
		text-align: center;
		height: 51px;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 0 100% 50% 0;
		margin: 0 0 10px 0;
		color: #fff;
		background: url(http://codegen.caihongy.cn/20230114/f19e6542400f4a28b5db6a5eabb0d652.png) no-repeat;
		width: 100%;
		font-size: 14px;
		line-height: 58px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 0 100% 50% 0;
		margin: 0 0 10px 0;
		color: #fff;
		background: url(http://codegen.caihongy.cn/20230114/f19e6542400f4a28b5db6a5eabb0d652.png) no-repeat;
		width: 100%;
		font-size: 14px;
		line-height: 58px;
		text-align: center;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #efe0b5;
		border-radius: 0;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #9f9fd7;
		width: 140px;
		font-size: 14px;
		line-height: 40px;
		height: 40px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
		border: 1px solid #efe0b5;
		border-radius: 0;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #9f9fd7;
		width: 140px;
		font-size: 14px;
		line-height: 40px;
		height: 40px;
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #efe0b5;
		border-radius: 0;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #9f9fd7;
		width: 140px;
		font-size: 14px;
		line-height: 40px;
		height: 40px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: translate3d(0px, 10px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
	}
	
	.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #409EFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #ffa800;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #ffa800;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
	
	.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
</style>
