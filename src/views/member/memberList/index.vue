<template>
  <div class="member-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.account"
          placeholder="账户名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="memberList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="acount" label="账户名称" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
      <el-table-column prop="reg_time" label="注册时间" width="180"></el-table-column>
      <el-table-column prop="intelligent_profit" label="智能收益" width="180"></el-table-column>
      <el-table-column prop="spread_profit" label="推广收益" width="180"></el-table-column>
      <el-table-column
        prop="status"
        :formatter="_formatter.member_status_formatter"
        label="状态"
        width="180"
      ></el-table-column>
      <el-table-column label="操作" width="280" fixed="right">
        <template slot-scope="scope">
          <el-switch class="switch" v-model="scope.row.status" active-text="启用" inactive-text="禁止"></el-switch>
        </template>
        <template slot-scope="scope">
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
        </template>
        <template slot-scope="scope">
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">钱包</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑会员" :visible.sync="isEditDialogShow">
      <el-form ref="form" class="form" :model="editForm" label-width="120px">
        <el-form-item label="序号">
          <el-input v-model="editForm.id"></el-input>
        </el-form-item>
        <el-form-item label="账户名称">
          <el-input v-model="editForm.acount"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="editForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-input v-model="editForm.reg_time" disabled></el-input>
        </el-form-item>
        <el-form-item label="智能收益">
          <el-input v-model="editForm.intelligent_profit"></el-input>
        </el-form-item>
        <el-form-item label="推广收益">
          <el-input v-model="editForm.spread_profit"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="editForm.status" placeholder="请选择状态">
            <el-option
              v-for="item in member_status"
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
  name: "member",
  data() {
    return {
      listQuery: {
        account: ""
      },
      member_status: common_options.member_status,
      memberList: [
        {
          id: "xx",
          acount: "xx",
          nickname: "xxx",
          reg_time: "xx",
          intelligent_profit: "xx",
          spread_profit: "x",
          status: 0
        }
      ],
      editForm: {
        id: "xx",
        acount: "xx",
        nickname: "xxx",
        reg_time: "xx",
        intelligent_profit: "xx",
        spread_profit: "x",
        status: 0
      },
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
    //提交编辑
    handleEditSubmit() {},
    //编辑某一菜单显示弹框
    handleShowEdit(row) {
      this.isEditDialogShow = true;
      this.editForm = this.func.deepClone(row);
      this.editForm.status = this._formatter.member_status_formatter(
        this.editForm
      );
    }
  }
};
</script>

<style  lang="scss">
.member-list {
  @extend %table-layout;
  //   .el-dialog {
  //     width: 40% !important;
  //   }
}
</style>
