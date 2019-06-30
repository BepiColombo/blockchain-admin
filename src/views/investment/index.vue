<template>
  <div class="investment">
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

    <el-table :data="coinList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="account_id" label="会员账号" width="180"></el-table-column>
      <el-table-column
        prop="coin_type"
        :formatter="_formatter.coin_types_formatter"
        label="币种名称"
        width="180"
      ></el-table-column>
      <el-table-column prop="can_borrow_amount" label="可借数量"></el-table-column>
      <el-table-column prop="borrowed_amount" label="已借数量"></el-table-column>
      <el-table-column prop="returned_amount" label="已还数量"></el-table-column>
      <el-table-column prop="wait_return_amount" label="待还数量"></el-table-column>
      <el-table-column prop="rest_cycle" label="剩余周期" width="180"></el-table-column>
    </el-table>

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
  name: "investment",
  data() {
    return {
      listQuery: {
        account: ""
      },
      coinList: [
        {
          id: "xx",
          account_id: "xx",
          coin_type: 0,
          can_borrow_amount: "xxx",
          borrowed_amount: "xxxx",
          returned_amount: "xxx",
          wait_return_amount: "xxx",
          rest_cycle: "xxxx"
        }
      ]
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
    }
  }
};
</script>

<style scoped lang="scss">
.investment {
  @extend %table-layout;
}
</style>
