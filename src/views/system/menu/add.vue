<template>
  <div class="menu-add">
    <el-form ref="form" class="form" :model="form" label-width="80px">
      <el-form-item label="菜单名称">
        <el-input v-model="form.menu_name"></el-input>
      </el-form-item>
      <el-form-item label="菜单路径">
        <el-input v-model="form.menu_path"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      form: {
        menu_name: "xx",
        menu_path: "xxx"
      }
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: { handleAdd() {} }
};
</script>

<style scoped lang="scss">
.menu-add {
  .el-form {
    max-width: 600px;
    margin: 20px 0;
    .el-form-item {
      margin: 20px 0;
    }
  }
}
</style>
