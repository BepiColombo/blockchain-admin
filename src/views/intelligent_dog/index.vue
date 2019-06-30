<template>
  <div class="intelligent_dog">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.account"
          placeholder="会员账户"
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
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      </div>
    </div>

    <el-table :data="dogList" border>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="account_id" label="会员账号" width="180"></el-table-column>
      <el-table-column prop="coin_type_icon" label="币种图标"></el-table-column>
      <el-table-column prop="coin_type" label="币种名称" width="180"></el-table-column>
      <el-table-column prop="start_time" label="启动时间" width="180"></el-table-column>
      <el-table-column prop="amount" label="金额"></el-table-column>
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
  name: "intelligent_dog",
  data() {
    return {
      listQuery: {
        account: "",
        coin_types: ""
      },
      coin_types: common_options.coin_types,
      dogList: [
        {
          id: "xx",
          account_id: "xx",
          coin_type_icon: "xxx",
          coin_type: "xxx",
          start_time: "xxxx",
          amount: "xxx"
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
.intelligent_dog {
  @extend %table-layout;
}
</style>
