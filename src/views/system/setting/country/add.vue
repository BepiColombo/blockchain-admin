<template>
  <div class="country-add">
    <el-form ref="form" class="form" :model="form" label-width="80px">
      <el-form-item label="国家">
        <el-input v-model="form.country_name"></el-input>
      </el-form-item>
      <el-form-item label="区号">
        <el-input v-model="form.num"></el-input>
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
        country_name: "xx",
        num: "xxx"
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
.country-add {
  .el-form {
    max-width: 600px;
    margin: 20px 0;
    .el-form-item {
      margin: 20px 0;
    }
  }
}
</style>
