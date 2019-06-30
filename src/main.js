import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//normalize css
import "./assets/scss/reset.scss";
//element-ui
import "./assets/js/element-ui";
//颜色设置
import colorConfig from "@/styles/color-config";
import ApiService from "./service/api.service";


import "./common/filters"
import "./common/formatter"
//工具函数
import func from "./common/utils";

Vue.config.productionTip = false;

Vue.prototype.colorConfig = colorConfig;
Vue.prototype.func = func;
ApiService.init();

// Ensure we checked auth before each page load.
// 路由守卫控制权限
const WHITE_LIST = ["/401", "/login"]
router.beforeEach((to, from, next) => {

  if (WHITE_LIST.includes(to.fullPath)) {
    next()
  } else {
    Promise.all([store.dispatch('check_auth')]).then(() => {
      next()
    }).catch(e => {
      next("/401")
    })
  }

}
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
