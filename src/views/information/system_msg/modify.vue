<template>
  <div class="news-modify">
    <el-form ref="form" class="form" :model="form" label-width="80px">
      <el-form-item label="标题名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="标题名称">
        <el-input type="textarea" :rows="6" v-model="form.title"></el-input>
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
  name: "news-modify",
  data() {
    return {
      form: {
        id: "xx",
        title: "xx",
        thumb: "xxx",
        //   content:"",
        publish_time: "xx"
      }
    };
  },
  components: { upload },
  watch: {},
  mounted() {
    this.form = JSON.parse(sessionStorage.getItem("_sysmsg")) || {};
  },
  methods: { handleSubmit() {} }
};
</script>

<style scoped lang="scss">
.news-modify {
  .el-form {
    max-width: 600px;
    margin: 20px 0;
    .el-form-item {
      margin: 20px 0;
    }
  }
}
</style>
