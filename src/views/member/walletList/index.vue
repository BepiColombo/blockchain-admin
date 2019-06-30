<template>
  <div class="wallet-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.account"
          placeholder="会员账户"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="walletList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="acount" label="会员账号" width="180"></el-table-column>
      <el-table-column prop="coin_type" label="币种" width="180"></el-table-column>
      <el-table-column prop="wallet_address" label="钱包地址" width="180"></el-table-column>
      <el-table-column prop="balance" label="余额" width="180"></el-table-column>
      <el-table-column prop="is_dog_open" label="是否开启智能狗" width="180"></el-table-column>
      <el-table-column prop="capital" label="智能狗本金" width="180"></el-table-column>
      <el-table-column label="操作" width="280" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleShowEdit(scope.row)" type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑钱包" :visible.sync="isEditDialogShow">
      <el-form ref="form" class="form" :model="editForm" label-width="120px">
        <el-form-item label="序号">
          <el-input v-model="editForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="会员账号">
          <el-input v-model="editForm.num" disabled></el-input>
        </el-form-item>
        <el-form-item label="币种">
          <el-input v-model="editForm.coutry_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="钱包地址">
          <el-input v-model="editForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="余额">
          <el-input v-model="editForm.num"></el-input>
        </el-form-item>
        <el-form-item label="是否开启智能狗">
          <el-switch
            disabled
            v-model="editForm.is_dog_open"
            :active-color="colorConfig.mainColor"
            inactive-color="#ff4949"
          ></el-switch>
        </el-form-item>
        <el-form-item label="智能狗本金">
          <el-input v-model="editForm.capital" disabled></el-input>
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
export default {
  name: "wallet",
  data() {
    return {
      listQuery: {
        account: ""
      },
      walletList: [
        {
          id: "xx",
          acount: "xx",
          coin_type: "xxx",
          wallet_address: "xx",
          balance: "xx",
          is_dog_open: true,
          capital: "xx"
        }
      ],
      editForm: {
        id: "xx",
        acount: "xx",
        coin_type: "xxx",
        wallet_address: "xx",
        balance: "xx",
        is_dog_open: "xxx",
        capital: "xx"
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
    }
  }
};
</script>

<style  lang="scss">
.wallet-list {
  @extend %table-layout;
  //   .el-dialog {
  //     width: 40% !important;
  //   }
}
</style>
