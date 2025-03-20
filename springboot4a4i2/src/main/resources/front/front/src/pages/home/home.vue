<template>
<div class="home-preview" :style='{"width":"100%","margin":"0 auto","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>


	<!-- 系统简介 -->
	<div :style='{"padding":"40px 0 0","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0 0 0 7%","flexWrap":"wrap","background":"none","display":"block","width":"30%","position":"relative","height":"auto"}'>
	  <div :style='{"padding":"0 0 20px","margin":"0 auto 20px","color":"#333","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","width":"100%","fontSize":"24px","lineHeight":"1","fontWeight":"600","height":"56px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <img :style='{"width":"32%","margin":"20px 0 0","objectFit":"cover","borderRadius":"8px","display":"block","height":"220px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"width":"32%","margin":"0","objectFit":"cover","borderRadius":"8px","display":"block","height":"220px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"width":"32%","margin":"20px 0 0","objectFit":"cover","borderRadius":"8px","display":"block","height":"220px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px","margin":"40px auto","overflow":"hidden","color":"#333","background":"url(http://codegen.caihongy.cn/20230129/77d7eb1e12db4d2cab9d64a40bdcb6e2.png) no-repeat center top / 100% 100%","width":"100%","lineHeight":"2","fontSize":"14px","textIndent":"2em","height":"296px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="recommend" :style='{"margin":"40px 7%","flexWrap":"wrap","background":"#fff","flex":"1","display":"flex","width":"70%","position":"relative","justifyContent":"flex-start"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"margin":"0 auto 20px","alignItems":"flex-start","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","display":"flex","width":"100%","lineHeight":"56px","justifyContent":"center","height":"56px"}'>
		<span :style='{"margin":"0 10px 0 0","fontSize":"24px","color":"#202020","fontWeight":"bold"}'>流浪猫狗推荐</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"border":"1px solid #f1e1b2","padding":"10px","boxShadow":"inset 0px 0px 56px 0px #fef5da","margin":"0 0 20px","flexDirection":"row-reverse","display":"flex","justifyContent":"space-between","flexWrap":"wrap","background":"#fff","width":"48%","fontSize":"0","position":"relative","height":"240px"}' v-for="(item,index) in liulangmaogouRecommend" class="list-item animation-box" :key="index" @click="toDetail('liulangmaogouDetail', item)">
			<img :style='{"border":"2px dashed #fff","padding":"6px","objectFit":"cover","background":"#fde59e","display":"inline-block","width":"48%","height":"100%"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :style='{"border":"2px dashed #fff","padding":"6px","objectFit":"cover","background":"#fde59e","display":"inline-block","width":"48%","height":"100%"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="item-info" :style='{"width":"48%","padding":"10px 0","overflow":"hidden","display":"inline-block","height":"100%"}'>
				<div class="name line1" :style='{"padding":"0 10px","margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.chongwumingcheng}}</div>
				<div class="name line1" :style='{"padding":"0 10px","margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.chongwufenlei}}</div>
				<div class="name line1" :style='{"padding":"0 10px","margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","lineHeight":"32px","fontSize":"14px","textOverflow":"ellipsis"}'>宠物性别:{{item.chongwuxingbie}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('liulangmaogou')" :style='{"border":"0","padding":"0 12px 0 20px","margin":"0 auto","textAlign":"center","background":"#efeffd","display":"inline-block","width":"100%","lineHeight":"40px","height":"40px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>



<div class="lists" :style='{"width":"100%","padding":"40px 7%","margin":"0 auto","position":"relative","textAlign":"center","background":"#fad76f"}'>
	
	<div class="title" :style='{"margin":"0 auto 20px","alignItems":"flex-start","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230129/bcb5e3f351544dd4bac33a4b579aa342.png) repeat-x center bottom","display":"flex","width":"auto","lineHeight":"54px","position":"relative","justifyContent":"center"}'>
	  <span :style='{"fontSize":"24px","color":"#202020","fontWeight":"bold","height":"56px"}'>流浪猫狗知识展示</span>
	</div>
	
	
	
	
	
	
	
	
	<!-- 样式七 -->
	<div class="list list7 index-pv1" :style='{"padding":"20px 0 40px","flexWrap":"wrap","background":"none","display":"flex","width":"calc(74% + 20px)","justifyContent":"space-between","height":"auto"}'>
		<div v-if="liulangmaogouzhishiList.length>0" class="list-4-item animation-box item-1" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[0])" :style='{"width":"32%","margin":"0","position":"relative","float":"left","height":"570px"}'>
			<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[0].chongwutupian)" :src="liulangmaogouzhishiList[0].chongwutupian.split(',')[0]" alt="" />
			<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[0].chongwutupian?liulangmaogouzhishiList[0].chongwutupian.split(',')[0]:'')" alt="" />
			<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                <div>{{liulangmaogouzhishiList[0].zhishibiaoti}}</div>
                <div>{{liulangmaogouzhishiList[0].zhishileixing}}</div>
                <div>{{liulangmaogouzhishiList[0].xingtaitezheng}}</div>
            </div>
		</div>
		<div :style='{"width":"32%","margin":"0","float":"left","height":"275px"}' class="list-4-body">
			<div v-if="liulangmaogouzhishiList.length>1" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[1])" class="list-4-item animation-box item-2" :style='{"width":"100%","margin":"0 0 20px","position":"relative","height":"100%"}'>
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[1].chongwutupian)" :src="liulangmaogouzhishiList[1].chongwutupian.split(',')[0]" alt="" />
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[1].chongwutupian?liulangmaogouzhishiList[1].chongwutupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{liulangmaogouzhishiList[1].zhishibiaoti}}</div>
                    <div>{{liulangmaogouzhishiList[1].zhishileixing}}</div>
                    <div>{{liulangmaogouzhishiList[1].xingtaitezheng}}</div>
                </div>
			</div>
			<div v-if="liulangmaogouzhishiList.length>2" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[2])" class="list-4-item animation-box item-3" :style='{"width":"100%","margin":"20px 0 0","position":"relative","height":"100%"}'>
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[2].chongwutupian)" :src="liulangmaogouzhishiList[2].chongwutupian.split(',')[0]" alt="" />
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[2].chongwutupian?liulangmaogouzhishiList[2].chongwutupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{liulangmaogouzhishiList[2].zhishibiaoti}}</div>
                    <div>{{liulangmaogouzhishiList[2].zhishileixing}}</div>
                    <div>{{liulangmaogouzhishiList[2].xingtaitezheng}}</div>
                </div>
			</div>
		</div>
		<div v-if="liulangmaogouzhishiList.length>3" class="list-4-item animation-box item-1" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[3])" :style='{"width":"20%","margin":"0 ","position":"absolute","right":"7%","float":"right","height":"570px"}'>
			<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[3].chongwutupian)" :src="liulangmaogouzhishiList[3].chongwutupian.split(',')[0]" alt="" />
			<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[3].chongwutupian?liulangmaogouzhishiList[3].chongwutupian.split(',')[0]:'')" alt="" />
			<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                <div>{{liulangmaogouzhishiList[3].zhishibiaoti}}</div>
                <div>{{liulangmaogouzhishiList[3].zhishileixing}}</div>
                <div>{{liulangmaogouzhishiList[3].xingtaitezheng}}</div>
            </div>
		</div>
		<div :style='{"width":"32%","margin":"0","height":"275px"}' class="list-4-body">
			<div v-if="liulangmaogouzhishiList.length>4" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[4])" class="list-4-item animation-box item-4" :style='{"width":"100%","margin":"0 0 20px","position":"relative","height":"100%"}'>
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[4].chongwutupian)" :src="liulangmaogouzhishiList[4].chongwutupian.split(',')[0]" alt="" />
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[4].chongwutupian?liulangmaogouzhishiList[4].chongwutupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{liulangmaogouzhishiList[4].zhishibiaoti}}</div>
                    <div>{{liulangmaogouzhishiList[4].zhishileixing}}</div>
                    <div>{{liulangmaogouzhishiList[4].xingtaitezheng}}</div>
                </div>
			</div>
			<div v-if="liulangmaogouzhishiList.length>5" @click="toDetail('liulangmaogouzhishiDetail', liulangmaogouzhishiList[5])" class="list-4-item animation-box item-5" :style='{"width":"100%","margin":"20px 0 0","position":"relative","height":"100%"}'>
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-if="preHttp(liulangmaogouzhishiList[5].chongwutupian)" :src="liulangmaogouzhishiList[5].chongwutupian.split(',')[0]" alt="" />
				<img :style='{"border":"2px dashed #fad76f","padding":"10px","objectFit":"cover","background":"#fff","width":"100%","float":"left","height":"100%"}' v-else :src="baseUrl + (liulangmaogouzhishiList[5].chongwutupian?liulangmaogouzhishiList[5].chongwutupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"margin":"0 12px 12px","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","background":"rgba(0,0,0,.3)","width":"calc(100% - 24px)","lineHeight":"30px","fontSize":"14px","position":"absolute","textOverflow":"ellipsis"}'>
                    <div>{{liulangmaogouzhishiList[5].zhishibiaoti}}</div>
                    <div>{{liulangmaogouzhishiList[5].zhishileixing}}</div>
                    <div>{{liulangmaogouzhishiList[5].xingtaitezheng}}</div>
                </div>
			</div>
		</div>
	</div>
	
	
	
	<div @click="moreBtn('liulangmaogouzhishi')" :style='{"border":"0","margin":"0","top":"42px","textAlign":"right","background":"none","display":"inline-block","width":"auto","lineHeight":"36px","position":"absolute","right":"7%"}'>
		<span :style='{"color":"#555","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#555","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="true" class="idea" :style='{"width":"100%","padding":"0","flexWrap":"wrap","background":"#faf0e6","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"100%","background":"url(http://codegen.caihongy.cn/20230130/e43782b42d4547e9a7147c04acb1957d.jpg) no-repeat center center / 100% 100%","height":"280px"}'></div>
		<div class="box2" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"0","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>

</div>

	
<div class="news" :style='{"padding":"0 7%","margin":"0 0 40px","flexWrap":"wrap","background":"none","display":"flex","width":"70%","position":"relative"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"padding":"0 7% 10px","margin":"30px auto 20px","alignItems":"center","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","display":"flex","width":"100%","lineHeight":"54px","position":"relative","justifyContent":"center"}'>
		<span :style='{"fontSize":"24px","lineHeight":"56px","color":"#202020","fontWeight":"bold","height":"56px"}'>宠物资讯</span>
	</div>
	
	
	
	
	
	
	
	<!-- 样式六 -->
	<div v-if="newsList.length" class="list list6 index-pv1" :style='{"width":"100%","padding":"0","background":"none","display":"flex","height":"auto"}'>
		<div id="new-list-6news" class="swiper-container swiper-new-list-6" :style='{"width":"calc(100% - 430px)","padding":"0","margin":"0","background":"none","height":"auto"}'>
			<div class="swiper-wrapper">
				<div :style='{"border":"1px dashed #fad76e","padding":"10px","borderRadius":"8px","background":"#fff","width":"200px","fontSize":"0","position":"relative"}' class="swiper-slide animation-box" v-for="(item,index) in newsList" v-if="index<5" :key="index" @click="toDetail('newsDetail', item)">
					<img :style='{"border":"0","width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","height":"218px"}' :src="baseUrl + item.picture">
					<div :style='{"padding":"0 10px","overflow":"hidden","color":"#333","borderRadius":"0 0 8px 8px","background":"#fefaf0","width":"100%","fontSize":"14px","lineHeight":"32px","height":"64px"}'>{{ item.title }}</div>
				</div>
			</div>
		</div>
		<div class="new6-list" :style='{"width":"430px","padding":"0 0 0 10px","background":"none","height":"280px"}'>
			<div :style='{"padding":"0 8px","color":"#333","background":"#efeffd","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","fontWeight":"600"}'>最新动态</div>
			<div v-for="(item,index) in newsList" v-if="index<5" :key="index" @click="toDetail('newsDetail', item)" class="new6-list-item" :style='{"border":"0 dashed #eee","padding":"0 10px","background":"none","borderWidth":"0 0 1px","display":"flex","width":"100%","lineHeight":"44px","height":"auto"}'>
				<div class="new6-list-item-title line1" :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"calc(100% - 80px)","lineHeight":"38px","fontSize":"14px","textOverflow":"ellipsis"}'>{{ item.title }}</div>
				<div class="new6-list-item-time" :style='{"width":"80px","lineHeight":"38px","fontSize":"12px","color":"#999","textAlign":"right"}'>{{ item.addtime.split(' ')[0] }}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 12px 0 20px","margin":"20px auto 0","textAlign":"center","background":"#efeffd","display":"inline-block","width":"100%","lineHeight":"40px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	<!-- 关于我们 -->
	<div :style='{"padding":"40px 7% 0 0","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0 0 40px","flexWrap":"wrap","background":"none","flex":"","display":"flex","width":"30%","position":"relative","justifyContent":"space-between","height":"auto"}'>
	  <div :style='{"color":"#333","textAlign":"right","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","width":"50%","lineHeight":"1.5","fontSize":"24px","height":"56px"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"padding":"0 0 0 10px","margin":"0","color":"#555","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230129/45135099c2454e3c9034c1b39a56edab.png) repeat-x center bottom,#fff","width":"50%","lineHeight":"40px","fontSize":"16px","height":"56px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"10px 10px 0","flexWrap":"wrap","display":"flex","height":"200px"}'>
	    <img :style='{"boxShadow":"0px 6px 10px -6px #999","margin":"0","objectFit":"cover","borderRadius":"8px","flex":1,"display":"block","width":"100%","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"10px 30px","margin":"10px 0","overflow":"hidden","color":"#666","background":"#fff","width":"100%","lineHeight":"23px","fontSize":"14px","textIndent":"2em","float":"left","height":"168px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        liulangmaogouRecommend: [],

        liulangmaogouzhishiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 6,
                sort: 'addtime',
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"3","speed":500,"spaceBetween":10,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					
					this.$nextTick(() => {
						new Swiper('#new-list-6news', options)
					})
				}
			});
		},
		getList() {
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
					this.liulangmaogouRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('liulangmaogouzhishi/list', {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.liulangmaogouzhishiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				border-radius: 4px;
				padding: 30px 20px;
				left: 10px;
				background: #fff;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: #fc8800;
			}
			
			.list6 .swiper-button-next {
				border-radius: 4px;
				padding: 30px 20px;
				left: auto;
				background: #fff;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: #fc8800;
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
