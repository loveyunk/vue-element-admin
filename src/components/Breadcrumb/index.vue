<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in paths" :key="item.path">
      <span v-if="paths.length - 1 === index" class="text">{{
        item.title
      }}</span>
      <a v-else class="link" @click.prevent="handleLink(item)">{{
        item.title
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import routeList from '../../router/meta';
import { queryAncestors } from '../../utils';

export default {
  data() {
    return {
      paths: null
    };
  },
  watch: {
    $route() {
      this.generateBreadcrumbs();
    }
  },
  created() {
    this.generateBreadcrumbs();
  },
  methods: {
    generateBreadcrumbs() {
      // Find a route that matches the name
      const currentRoute = routeList.find(_ => _.name === this.$route.name);
      console.log(currentRoute);
      this.paths = currentRoute
        ? queryAncestors(
            routeList,
            currentRoute,
            'breadcrumbParentId'
          ).reverse()
        : [
            routeList[0],
            {
              id: 404,
              title: `Not Found`
            }
          ];
    },
    handleLink(item) {
      const { name } = item;
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  .text,
  .link {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: normal;
  }
  .link:hover {
    color: #2593fc;
  }
}
</style>
