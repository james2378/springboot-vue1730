export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"宠物分类","menuJump":"列表","tableName":"chongwufenlei"}],"menu":"宠物分类管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"知识类型","menuJump":"列表","tableName":"zhishileixing"}],"menu":"知识类型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","宠物类别统计","领养状态统计","查看评论","首页总数","首页统计"],"menu":"流浪猫狗","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","删除","审核","修改"],"menu":"领养信息","menuJump":"列表","tableName":"lingyangxinxi"}],"menu":"领养信息管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","查看评论"],"menu":"流浪猫狗知识","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除","查看评论","活动"],"menu":"团队信息","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"活动分类","menuJump":"列表","tableName":"huodongfenlei"}],"menu":"活动分类管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","查看评论","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","审核","修改","每日申请人数统计","首页总数","首页统计"],"menu":"志愿申请","menuJump":"列表","tableName":"zhiyuanshenqing"}],"menu":"志愿申请管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-full","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"宠物资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","查看评论","宠物领养"],"menu":"流浪猫狗列表","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","查看评论"],"menu":"流浪猫狗知识列表","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看评论","查看","申请"],"menu":"团队信息列表","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","查看评论"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"领养信息","menuJump":"列表","tableName":"lingyangxinxi"}],"menu":"领养信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"志愿申请","menuJump":"列表","tableName":"zhiyuanshenqing"}],"menu":"志愿申请管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","查看评论","宠物领养"],"menu":"流浪猫狗列表","menuJump":"列表","tableName":"liulangmaogou"}],"menu":"流浪猫狗模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","查看评论"],"menu":"流浪猫狗知识列表","menuJump":"列表","tableName":"liulangmaogouzhishi"}],"menu":"流浪猫狗知识模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看评论","查看","申请"],"menu":"团队信息列表","menuJump":"列表","tableName":"tuanduixinxi"}],"menu":"团队信息模块"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","查看评论"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
