<template>
  <div class="transaction-notice">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.t_type"
          placeholder="交易单据"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-input
          v-model="listQuery.t_coin_type"
          placeholder="交易单据"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="noticeList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column
        prop="t_type"
        :formatter="_formatter.transaction_types_formatter"
        label="转账类型"
        width="180"
      ></el-table-column>
      <el-table-column prop="t_coin_type" :formatter="_formatter.coin_types_formatter" label="转账币种"></el-table-column>
      <el-table-column prop="from" label="发款地址" width="180"></el-table-column>
      <el-table-column prop="to" label="收款地址" width="180"></el-table-column>
      <el-table-column prop="t_amount" label="转账金额"></el-table-column>
      <el-table-column prop="t_time" label="转账时间"></el-table-column>
      <el-table-column
        prop="t_status"
        :formatter="_formatter.transaction_status_formatter"
        label="转账状态"
      ></el-table-column>
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
  name: "exchange-record",
  data() {
    return {
      listQuery: {
        t_type: "",
        t_coin_type: ""
      },
      noticeList: [
        {
          id: "xx",
          t_type: 0,
          t_coin_type: 0,
          from: "xxx",
          to: "xxxx",
          t_amount: "xxx",
          t_time: "xxx",
          t_status: 0
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
.transaction-notice {
  @extend %table-layout;
}
</style>
