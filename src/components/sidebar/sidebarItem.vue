<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <router-link :to="item.path">
          <i class="el-icon-share menu"></i>
          <!-- <i class="iconfont icon-dollar menu"></i> -->
          <!-- {{isCollapse?item.title:""}} -->
          {{item.title}}
        </router-link>
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <!-- <router-link :to="item.path"> -->
        <i class="el-icon-share"></i>
        <!-- <i class="iconfont icon-dollar menu"></i> -->
        <!-- {{isCollapse?item.title:""}} -->
        {{item.title}}
        <!-- </router-link> -->
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
        />
        <el-menu-item v-else :key="child.path" :index="child.path">
          <router-link :to="child.path">
            <!-- <i class="iconfont icon-dollar menu"></i> -->
            <i class="el-icon-location"></i>
            <!-- {{isCollapse?child.title:""}} -->
            {{child.title}}
          </router-link>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isCollapse: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

