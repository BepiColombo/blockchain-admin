<template>
  <div class="help-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.title"
          placeholder="标题"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="helpList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="answer" label="回答" width="180"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleAnswerShow(scope.row)" type="primary" size="small">回答</el-button>
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑角色" :visible.sync="isEditDialogShow" width="30%">
      <el-form ref="form" class="form" :model="editForm" label-width="80px">
        <el-form-item label="序号">
          <el-input v-model="editForm.id"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="editForm.title"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="回答" :visible.sync="isAnswerDialogShow" width="30%">
      <el-form ref="form_answer" class="form" :model="answerForm" label-width="80px">
        <el-form-item label="回答">
          <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="answerForm.answer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isAnswerDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="handleAnswerSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination
      class="pagination"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="1000"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "help",
  data() {
    return {
      listQuery: {
        title: ""
      },
      helpList: [
        {
          id: "xx",
          role_name: "xx",
          status: true
        }
      ],
      editForm: {
        id: "xx",
        role_name: "xx",
        status: true
      },
      answerForm: {
        answer: ""
      },
      isAnswerDialogShow: false,
      isEditDialogShow: false
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleFilter() {
      console.log("handleFilter");
    },
    handleCurrentChange(val) {
      console.log("handleCurrentChange", val);
    },
    //删除某一菜单
    handleDelete(row) {
      this.$confirm("确定删除吗？, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleAnswerShow() {
      this.isAnswerDialogShow = true;
    },
    handleAnswerSubmit() {
      console.log("answer submit");
    },
    //编辑某一菜单显示弹框
    handleShowEdit(row) {
      this.isEditDialogShow = true;
      this.editForm = this.func.deepClone(row);
    },
    handleEditSubmit() {
      console.log("edit submit");
    }
  }
};
</script>

<style scoped lang="scss">
.help-list {
  @extend %table-layout;
}
</style>
