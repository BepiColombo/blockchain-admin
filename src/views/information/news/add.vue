<template>
  <div class="news-add">
    <el-form ref="form" class="form" :model="form" label-width="80px">
      <el-form-item label="标题名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <upload/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import upload from "@/components/upload";
export default {
  name: "news-add",
  data() {
    return {
      form: {
        title: "",
        content: "",
        thumb: ""
      }
    };
  },
  components: { upload },
  watch: {},
  mounted() {},
  methods: { handleSubmit() {} }
};
</script>

<style scoped lang="scss">
.news-add {
  .el-form {
    max-width: 600px;
    margin: 20px 0;
    .el-form-item {
      margin: 20px 0;
    }
  }
}
</style>
