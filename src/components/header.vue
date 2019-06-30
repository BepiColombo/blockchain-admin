<template>
  <div class="header" :class="{sidebarClosed:!sidebar.opened}">
    <div class="left">
      <i
        class="toggleIcon"
        @click="handleSideBarToggle"
        :class="sidebar.opened?'el-icon-s-unfold':'el-icon-s-fold'"
      ></i>
      <breadCrumb/>
    </div>
    <div class="right">
      <p class="header-title">BBang Token 管理系统</p>
      <div class="user-box">
        <img class src="https://avatars2.githubusercontent.com/u/23181275?s=460&v=4" alt>
        <!-- <ul class="user-box-nav">
          <li class="user-box-nav-item">首页</li>
          <li class="user-box-nav-item">退出登录</li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import breadCrumb from "@/components/breadCrumb";
import * as types from "@/store/actions.type";

export default {
  name: "mainHeader",
  data() {
    return {};
  },
  components: { breadCrumb },
  computed: {
    ...mapState({
      sidebar: state => state.home.sidebar
    })
  },

  watch: {},
  mounted() {},
  methods: {
    handleSideBarToggle() {
      this.$store.dispatch(`sidebar_toggle`);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: $header-height;
  background: $main-color;
  position: fixed;
  top: 0;
  left: 0;
  padding-left: $navbar-width;
  transition: padding-left 0.28s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.sidebarClosed {
    padding-left: $navbar-hidden-width;
  }
  .toggleIcon {
    font-size: 24px;
  }
  .left {
    display: flex;
    align-items: center;
    .app-breadcrumb {
      margin-left: 45px;
    }
  }
  .right {
    display: flex;
    .header-title {
      font-size: 20px;
      font-weight: 500;
    }
    .user-box {
      width: 240px;
      position: relative;
      height: $header-height;
      float: right;
      @extend %flex-center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
      }
      &:hover {
        & .user-box-nav {
          display: block;
        }
      }
      &-nav {
        display: none;
        width: 200px;
        position: absolute;
        top: $header-height;
        left: 50%;
        transform: translate(-50%, 0);
        &:hover {
          display: block;
        }
        &-item {
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: $second-color;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
