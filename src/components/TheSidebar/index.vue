<template>
  <div class="sidebar">
    <el-menu
      router
      :default-active="$route.path"
      :collapse="sidebar.isCollapse"
    >
      <MenuItem :list="menuTree" />
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { arrayToTree } from '../../utils';
import routeMetaList from '../../router/meta';
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem
  },

  data() {
    return {
      menuTree: []
    };
  },

  computed: {
    ...mapState('app', ['sidebar']),

    menuRoutes() {
      return routeMetaList.filter(_ => _.menuParentId !== -1);
    }
  },

  created() {
    this.menuTree = arrayToTree(this.menuRoutes, 'id', 'menuParentId');
  }
};
</script>
