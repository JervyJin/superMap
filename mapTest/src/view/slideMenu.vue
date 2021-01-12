<template>
  <div class="icon-body">
    <el-popover ref="popover4" placement="right" width="150" trigger="click">
      <el-table :data="gridData" @cell-click="copyClick">
        <el-table-column
          width="100"
          property="name"
          label="姓名"
        ></el-table-column>
      </el-table>
      <i class="el-icon-message-solid" slot="reference">
        <span class="divright">6</span>
      </i>
    </el-popover>

    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>

  <el-button>默认按钮</el-button>

  </div>
</template>

<script>
export default {
  name: "IconSelect",
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      activeName: 'second'
    };
  },
  methods: {
    copyClick(row, column, cell, event) {
      // this.$refs.popover4.showPopper = false;
      document.body.click();
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
};
</script>
