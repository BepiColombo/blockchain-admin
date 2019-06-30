<template>
  <div class="turnover-list">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.txHash"
          placeholder="交易单据"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-select
          v-model="listQuery.coin_type"
          placeholder="币种"
          clearable
          style="width: 90px"
          class="filter-item"
        >
          <el-option
            v-for="item in coin_types"
            :key="item.value.toString()"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="listQuery.t_type"
          placeholder="交易类型"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in t_types"
            :key="item.value.toString()"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
      <div class="data-contaner">
        <el-button type="success" size="middle">总支出{{total_expenditure}}</el-button>
        <el-button type="success" size="middle">总收入{{total_income}}</el-button>
      </div>
    </div>

    <el-table :data="turnoverList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="txHash" label="交易单据" width="180"></el-table-column>
      <el-table-column prop="from" label="发送方"></el-table-column>
      <el-table-column prop="id" label="接收方" width="180"></el-table-column>
      <el-table-column prop="txHash" label="交易币种" width="180"></el-table-column>
      <el-table-column prop="from" label="金额"></el-table-column>
      <el-table-column prop="id" label="类型" width="180"></el-table-column>
      <el-table-column prop="txHash" label="交易时间" width="180"></el-table-column>
      <el-table-column prop="from" label="交易状态"></el-table-column>
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
import common_options from "@/common/options";
export default {
  name: "list",
  data() {
    return {
      listQuery: {
        txHash: "",
        coin_type: "",
        t_type: ""
      },
      total_expenditure: "1000.0",
      total_income: "1000.0",
      coin_types: common_options.coin_types,
      t_types: [{ label: "支出", value: 0 }, { label: "收入", value: 1 }],
      turnoverList: [
        {
          id: "xx",
          txHash: "xx",
          from: "from",
          to: "to",
          coin_type: "xxx",
          amount: "xxxx",
          t_type: "",
          t_time: "xxx",
          t_status: "xxx"
        },
        {
          id: "xx",
          txHash: "xx",
          from: "from",
          to: "to",
          coin_type: "xxx",
          amount: "xxxx",
          t_type: "",
          t_time: "xxx",
          t_status: "xxx"
        },
        {
          id: "xx",
          txHash: "xx",
          from: "from",
          to: "to",
          coin_type: "xxx",
          amount: "xxxx",
          t_type: "",
          t_time: "xxx",
          t_status: "xxx"
        },
        {
          id: "xx",
          txHash: "xx",
          from: "from",
          to: "to",
          coin_type: "xxx",
          amount: "xxxx",
          t_type: "",
          t_time: "xxx",
          t_status: "xxx"
        }
      ]
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleFilter() {
      console.log("search");
    },
    handleCurrentChange(val) {
      console.log("handleCurrentChange", val);
    }
  }
};
</script>

<style scoped lang="scss">
.turnover-list {
  width: 100%;
  @extend %table-layout;
}
</style>
