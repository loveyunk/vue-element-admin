<template>
  <header class="top-bar">
    <div>
      <i class="el-icon-edit" @click="toggleSidebar" />
    </div>
    <el-dropdown>
      <el-avatar class="cursor-pointer" :src="user.avatar" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的主页</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('user', ['user'])
  },

  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toggleSideBar');
    },

    logout() {
      this.$store.dispatch('user/logout');
    }
  }
};
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  top: 0;
  width: calc(100% - 256px);
  height: 42px;
  line-height: 42px;
  padding: 0 50px;
  background: #fff;
}
</style>
