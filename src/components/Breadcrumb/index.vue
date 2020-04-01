<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in paths" :key="item.path">
      <span v-if="paths.length - 1 === index" class="text">
        {{ item.title }}
      </span>

      <a v-else class="link" @click.prevent="handleLink(item)">
        {{ item.title }}
      </a>
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
    $route: {
      handler() {
        this.generateBreadcrumbs();
      },
      immediate: true
    }
  },

  methods: {
    generateBreadcrumbs() {
      // Find a route that matches the name
      const currentRoute = routeList.find(_ => _.name === this.$route.name);
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
.breadcrumb {
  .text,
  .link {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: normal;
    // @apply p-4 bg-teal-dark h-full overflow-auto;
  }
  .link:hover {
    color: #2593fc;
  }
  .board {
    // @apply p-4 bg-teal-dark h-full overflow-auto;
  }
}
</style>
