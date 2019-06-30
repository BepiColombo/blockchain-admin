<template>
  <div class="cycle-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.cycle_name"
          placeholder="周期名称"
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

    <el-table :data="cycleList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="cycle_name" label="周期名称"></el-table-column>
      <el-table-column prop="rate" label="利率" width="180"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑周期" :visible.sync="isEditDialogShow" width="30%">
      <el-form ref="form" class="form" :model="editForm" label-width="80px">
        <el-form-item label="周期名称">
          <el-input v-model="editForm.cycle_name"></el-input>
        </el-form-item>
        <el-form-item label="利率">
          <el-input v-model="editForm.rate"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isEditDialogShow = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="添加周期" :visible.sync="isAddDialogShow" width="30%">
      <el-form ref="form_add" class="form" :model="addForm" label-width="80px">
        <el-form-item label="周期名称">
          <el-input v-model="addForm.cycle_name"></el-input>
        </el-form-item>
        <el-form-item label="利率">
          <el-input v-model="addForm.rate"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isEditDialogShow = false">确 定</el-button>
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
  name: "config",
  data() {
    return {
      listQuery: {
        country_name: ""
      },
      cycleList: [
        {
          id: "xx",
          cycle_name: "xx",
          rate: "xxx"
        }
      ],
      editForm: {
        id: "xx",
        cycle_name: "xx",
        rate: "xxx"
      },
      addForm: {
        id: "xx",
        cycle_name: "xx",
        rate: "xxx"
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
    //编辑某一菜单显示弹框
    handleShowEdit(row) {
      this.isEditDialogShow = true;
      this.editForm = this.func.deepClone(row);
    }
  }
};
</script>

<style scoped lang="scss">
.cycle-list {
  @extend %table-layout;
}
</style>
