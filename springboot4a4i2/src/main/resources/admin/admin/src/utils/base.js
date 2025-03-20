const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4a4i2/",
            name: "springboot4a4i2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4a4i2/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "流浪猫狗救助救援网站"
        } 
    }
}
export default base
