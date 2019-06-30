<template>
  <div class="coin-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.coin_name"
          placeholder="币种名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="coin_list" border>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="coin_icon" label="币种图标"></el-table-column>
      <el-table-column prop="coin_name" label="币种名称"></el-table-column>
      <el-table-column prop="contract_address" label="合约地址"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作" fixed="right" width="350">
        <template slot-scope="scope">
          <el-switch
            class="switch"
            @change="handleStatusChange(scope.row)"
            v-model="scope.row.status"
            active-text="启用"
            inactive-text="禁止"
          ></el-switch>
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑币种" :visible.sync="isEditDialogShow" width="30%">
      <el-form ref="form" class="form" :model="editForm" label-width="80px">
        <el-form-item label="序号">
          <el-input v-model="editForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="币种图标">
          <el-input v-model="editForm.coin_icon"></el-input>
        </el-form-item>
        <el-form-item label="币种名称">
          <el-input v-model="editForm.coin_name"></el-input>
        </el-form-item>
        <el-form-item label="合约地址">
          <el-input v-model="editForm.contract_address"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="editForm.status" placeholder="请选择状态">
            <el-option
              v-for="item in coin_status"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSubmit">确 定</el-button>
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
import common_options from "@/common/options";
export default {
  name: "coin",
  data() {
    return {
      listQuery: {
        coin_name: ""
      },
      coin_status: common_options.coin_status,
      coin_list: [
        {
          id: "xx",
          coin_icon: "xx",
          coin_name: "xxx",
          contract_address: "xx",
          status: "x"
        }
      ],
      editForm: {
        id: "xx",
        coin_icon: "xx",
        coin_name: "xxx",
        contract_address: "xx",
        status: "0"
      },

      isEditDialogShow: false,
      isAddDialogShow: false
    };
  },
  components: {},
  watch: {},
  mounted() {
    console.log();
  },
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
    //启用禁用switch开关事件
    handleStatusChange() {
      console.log("status change");
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
      this.editForm.status = this._formatter.coin_status_formatter(
        this.editForm
      );
    },
    handleEditSubmit() {
      console.log("edit submit");
    }
  }
};
</script>

<style scoped lang="scss">
.coin-list {
  @extend %table-layout;
}
</style>
