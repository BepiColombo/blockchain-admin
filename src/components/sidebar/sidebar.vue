<template>
  <div class="sidebar-container">
    <div class="leftNav_logo">
      <img class="logo" src="~assets/img/logo.png" alt="logo">
      <!-- <p class="index_title">{{web_info.entry_name}}</p> -->
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :text-color="colorConfig.textColor"
        :active-text-color="colorConfig.activeTextColor"
        :background-color="colorConfig.navBarbgColor"
        :collapse="!collapse"
        :default-active="$route.path"
      >
        <sidebar-item
          :isCollapse="collapse"
          v-for="menu in menuList"
          :key="menu.path"
          :item="menu"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from "./sidebarItem";
export default {
  name: "Sidebar",
  components: { SidebarItem },
  props: {
    menuList: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
.logo {
  width: 40px;
  height: 40px;
  transition: all 0.28s;
}
.sidebar-container {
  transition: width 0.28s;
  width: $navbar-width;
  height: 100%;
  position: fixed;
  font-size: 0px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background: $main-color;
  .leftNav_logo {
    width: 100%;
    @extend %flex-center;
    height: $header-height;
  }
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
  .el-scrollbar {
    height: 100%;
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
  .is-horizontal {
    display: none;
  }
  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }
  .el-menu {
    border: none;
    height: 100%;
    color: #000 !important;
    a {
      color: #000;
    }
    .el-menu-item {
      &.is-active {
        background-color: #fff !important;
      }
    }
    .el-menu-item,
    .el-submenu__title {
      i {
        color: #000;
      }
    }
    .el-menu--popup {
      i {
        color: #000;
      }
    }
  }
  .is-active > .el-submenu__title {
    // color: #f4f4f5 !important;
  }
}
</style>
