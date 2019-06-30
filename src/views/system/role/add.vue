<template>
  <div class="role-add">
    <el-form ref="form" class="form" :model="form" label-width="80px">
      <el-form-item label="角色名称">
        <el-input v-model="form.menu_name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "role-add",
  data() {
    return {
      form: {
        role_name: "xx"
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
.role-add {
  .el-form {
    max-width: 600px;
    margin: 20px 0;
    .el-form-item {
      margin: 20px 0;
    }
  }
}
</style>
