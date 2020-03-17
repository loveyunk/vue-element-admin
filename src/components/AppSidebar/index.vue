<template>
  <div class="sidebar-container">
    <el-menu router :default-active="$route.path">
      <el-menu-item index="/user">
        <i class="el-icon-menu" />
        <span slot="title">
          用户管理
        </span>
      </el-menu-item>
      <!-- <el-menu-item v-for="item in paths" :key="item.id">
        <span slot="title">
          {{ item.title }}
        </span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      paths: [
        {
          breadcrumbParentId: 1,
          id: 2,
          name: 'user',
          title: '用户管理'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.sidebar-container {
  .el-menu {
    border-right: none;
  }
}
</style>

<style lang="scss" scoped>
.sidebar-container {
  flex: 0 0 256px;
  max-width: 256px;
  min-width: 256px;
  width: 256px;
  height: 100vh;
  background: #fff;
}
</style>
