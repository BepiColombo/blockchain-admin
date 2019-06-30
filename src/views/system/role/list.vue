<template>
  <div class="role-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.txHash"
          placeholder="角色名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-plus" @click="handleAddShow">
          <!-- <router-link to="/system/setting/cycle_add">添加</router-link> -->
          添加
        </el-button>
      </div>
    </div>

    <el-table :data="roleList" border>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="role_name" label="角色名称"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-switch class="switch" v-model="scope.row.status" active-text="启用" inactive-text="禁止"></el-switch>
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑角色" :visible.sync="isEditDialogShow" width="30%">
      <el-form ref="form" class="form" :model="editForm" label-width="80px">
        <el-form-item label="序号">
          <el-input v-model="editForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-input v-model="editForm.role_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="添加角色" :visible.sync="isAddDialogShow" width="30%">
      <el-form ref="form_add" class="form" :model="addForm" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="addForm.role_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isAddDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="handleAddSubmit">确 定</el-button>
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
  name: "role",
  data() {
    return {
      listQuery: {
        id: ""
      },
      roleList: [
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
      addForm: {
        role_name: "xx",
        status: true
      },
      isEditDialogShow: false,
      isAddDialogShow: false
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
    //添加弹框
    handleAddShow() {
      this.isAddDialogShow = true;
    },
    //确认添加
    handleAddSubmit() {
      console.log("add submit");
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
.role-list {
  @extend %table-layout;
}
</style>
