<template>
  <div class="news">
    <div class="top-box">
      <div class="filter-container">
        <el-input
          v-model="listQuery.title"
          placeholder="标题名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-plus" @click="hanleAdd">添加</el-button>
      </div>
    </div>

    <el-table :data="newsList" border>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="title" label="标题名称"></el-table-column>
      <el-table-column prop="thumb" label="缩略图"></el-table-column>
      <el-table-column prop="publish_time" label="发布时间"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
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
  name: "role",
  data() {
    return {
      listQuery: {
        title: ""
      },
      newsList: [
        {
          id: "xx",
          title: "xx",
          thumb: "xxx",
          //   content:"",
          publish_time: "xx"
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
    hanleAdd() {
      this.$router.push({ path: "/information/news_add" });
    },
    handleEdit(row) {
      this.editForm = this.func.deepClone(row);
      sessionStorage.setItem("_news", JSON.stringify(this.editForm));
      this.$router.push({ path: "/information/news_modify" });
    }
  }
};
</script>

<style scoped lang="scss">
.news {
  @extend %table-layout;
}
</style>
