<template>
  <div class="config">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="币融细则" name="first">
        <el-form :model="form1">
          <el-form-item class="form-item">
            <el-input placeholder="币融细则" type="textarea" :rows="12" model="form1.content"></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="primary" @click="handleSubmitForm1">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="服务与隐私条例" name="second">
        <el-form :model="form2">
          <el-form-item class="form-item">
            <el-input placeholder="服务与隐私条例" type="textarea" :rows="12" model="form2.content"></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="primary" @click="handleSubmitForm2">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="关于我们" name="third">
        <el-form :model="form3">
          <el-form-item class="form-item">
            <el-input placeholder="关于我们" type="textarea" :rows="12" model="form3.content"></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="primary" @click="handleSubmitForm3">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="转账手续费" name="fourth">
        <el-form :model="form4" class="form4">
          <el-form-item class="form-item">
            <el-input placeholder="请输入转账手续费" type="number" :rows="12" model="form4.content"></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="primary" @click="handleSubmitForm4">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "config",
  data() {
    return {
      activeName: "first",
      form1: {
        content: ""
      },
      form2: { content: "" },
      form3: { content: "" },
      form4: { content: "" }
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSubmitForm1() {},
    handleSubmitForm2() {},
    handleSubmitForm3() {}
  }
};
</script>

<style scoped lang="scss">
.config {
  margin-top: 30px;
  .el-form {
    .form-item {
      margin: 30px 0;
    }
  }
  .form4 {
    .el-input {
      width: 200px;
    }
  }
}
</style>
