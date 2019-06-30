<template>
  <div class="exchange-record">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.txHash"
          placeholder="交易单据"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="exchangeList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="account_id" label="会员账号" width="180"></el-table-column>
      <el-table-column prop="coin_type" label="兑换币种"></el-table-column>
      <el-table-column prop="exchange_coin_type" label="目标币种" width="180"></el-table-column>
      <el-table-column prop="exchange_amount" label="兑换金额" width="180"></el-table-column>
      <el-table-column prop="exchange_time" label="兑换时间"></el-table-column>
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
        id: ""
      },
      exchangeList: [
        {
          id: "xx",
          account_id: "xx",
          coin_type: "xxx",
          exchange_coin_type: "xxx",
          exchange_amount: "xxxx",
          exchange_time: "xxx"
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
.exchange-record {
  @extend %table-layout;
}
</style>
