<template>
  <div class="index" :class="classObj">
    <el-container>
      <el-header>
        <mainHeader/>
      </el-header>
      <el-container>
        <el-aside>
          <sidebar :collapse="sidebar.opened" :menuList="routes"/>
        </el-aside>
        <el-main>
          <div class="main-container">
            <tags-view/>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "@/store/actions.type";
import TagsView from "@/layout/TagsView";
import mainHeader from "@/components/header";
import Sidebar from "@/components/sidebar/sidebar";
export default {
  name: "index",
  data() {
    return {
      routes: [
        {
          path: "/system", //菜单项所对应的路由路径
          title: "系统管理", //菜单项名称
          children: [
            {
              path: "/system/menu",
              title: "菜单管理",
              children: []
            },
            {
              path: "/system/role",
              title: "角色管理",
              children: []
            },
            {
              path: "/system/setting/config",
              title: "配置管理",
              children: [
                {
                  path: "/system/setting/config",
                  title: "系统配置"
                },
                {
                  path: "/system/setting/country",
                  title: "区号管理"
                },
                {
                  path: "/system/setting/cycle",
                  title: "周期管理"
                },
                {
                  path: "/system/setting/helper",
                  title: "帮助中心"
                }
              ]
            }
          ] //是否有子菜单，若没有，则为[]
        },
        {
          path: "/transaction",
          title: "交易管理",
          children: [
            {
              path: "/transaction/turnover",
              title: "交易流水"
            },
            {
              path: "/transaction/exchange_record",
              title: "兑换记录"
            }
          ]
        },
        {
          path: "/member",
          title: "会员管理",
          children: [
            {
              path: "/member/list",
              title: "会员列表"
            },
            {
              path: "/member/wallet_list",
              title: "钱包列表"
            }
          ]
        },
        {
          path: "/information",
          title: "站内消息",
          children: [
            {
              path: "/information/news",
              title: "资讯"
            },
            {
              path: "/information/transaction_notice",
              title: "转账通知"
            },
            {
              path: "/information/system_msg",
              title: "系统消息"
            }
          ]
        },
        {
          path: "/intelligent_dog",
          title: "智能狗管理",
          children: [
            {
              path: "/intelligent_dog",
              title: "启动记录"
            }
          ]
        },
        {
          path: "/investment",
          title: "币融管理",
          children: [
            {
              path: "/investment",
              title: "币种记录"
            }
          ]
        },
        {
          path: "/coin",
          title: "币种管理",
          children: [
            {
              path: "/coin",
              title: "币种管理"
            }
          ]
        }
      ]
    };
  },
  components: { Sidebar, mainHeader, TagsView },
  watch: {},
  computed: {
    ...mapState({
      sidebar: state => state.home.sidebar
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      };
    }
  },
  // mounted() {
  //   // function translateDataToTree(data) {
  //   //   let parents = data.filter(
  //   //     value =>
  //   //       value.parentId == -1 ||
  //   //       value.parentId == "undefined" ||
  //   //       value.parentId == null
  //   //   );
  //   //   let children = data.filter(
  //   //     value =>
  //   //       value.parentId != -1 &&
  //   //       value.parentId !== "undefined" &&
  //   //       value.parentId != null
  //   //   );
  //   //   let translator = (parents, children) => {
  //   //     parents.forEach(parent => {
  //   //       children.forEach((current, index) => {
  //   //         if (current.parentId === parent.id) {
  //   //           let temp = JSON.parse(JSON.stringify(children));
  //   //           temp.splice(index, 1);
  //   //           translator([current], temp);
  //   //           typeof parent.children !== "undefined"
  //   //             ? parent.children.push(current)
  //   //             : (parent.children = [current]);
  //   //         }
  //   //       });
  //   //     });
  //   //   };
  //   //   translator(parents, children);
  //   //   return parents;
  //   // }
  //   // translateDataToTree(routes);
  //   // this.routes = routes;
  //   // console.log(translateDataToTree(routes));
  //   // routes.forEach(ele => {
  //   //     let parentId = ele.parentId;
  //   //     if (parentId === -1) {
  //   //         //是根元素的hua ,不做任何操作,如果是正常的for-i循环,可以直接continue.
  //   //     } else {
  //   //         //如果ele是子元素的话 ,把ele扔到他的父亲的child数组中.
  //   //         routes.forEach(d => {
  //   //             if (d.id === parentId) {
  //   //                 let childArray = d.child;
  //   //                 if (!childArray) {
  //   //                     childArray = []
  //   //                 }
  //   //                 childArray.push(ele);
  //   //                 d.child = childArray;
  //   //             }
  //   //         })
  //   //     }
  //   // });
  //   // //去除重复元素
  //   // routes = routes.filter(ele => ele.parentId === -1);
  //   // console.log('最终等到的tree结构数据: ', routes);
  // },
  methods: {
    handleSideBarToggle() {
      this.$store.dispatch(`${types.SIDEBAR_TOGGLE}`);
    }
  }
};
</script>

<style  lang="scss">
@media (max-width: 1200px) {
  .index {
    width: 80%;
  }
}
.index {
  width: 100%;

  display: flex;
  justify-content: center;
  overflow-y: hidden;
}

.el-main {
  transition: all 0.58s;
}
.main-container {
  width: 100%;
  // max-width: 1600px;
  // overflow-x: auto;
  // padding-left: $navbar-width + 20px;
  transition: padding-left 0.58s;
  // padding-top: $header-height + 10px;
  .toggleIcon {
    font-size: 24px;
  }
  .el-aside {
    width: 260px;
  }
}
.hideSidebar {
  .main-container {
    // padding-left: 70px;
  }
  .el-aside {
    width: 64px !important;
  }
  .sidebar-container {
    width: 64px !important;
    .leftNav_logo img {
      width: 25px;
      height: 25px;
    }
    .el-submenu [class^="el-icon-"] {
      margin-right: 15px !important;
    }
  }
}
</style>
