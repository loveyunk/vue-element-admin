<template>
  <Fragment>
    <template v-for="item in list">
      <el-menu-item
        v-if="!item.children"
        :key="item.id"
        :index="getRouteProperty(item.name, 'path')"
      >
        <i :class="item.icon" />
        <span slot="title">
          {{ item.title }}
        </span>
      </el-menu-item>

      <el-submenu
        v-else
        :key="item.id"
        :index="getRouteProperty(item.name, 'path')"
      >
        <template slot="title">
          <i :class="item.icon" />
          <span>{{ item.title }}</span>
        </template>
        <MenuItem :list="item.children" />
      </el-submenu>
    </template>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'MenuItem',

  components: {
    Fragment
  },

  props: {
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    getRoute(routeTree, name) {
      for (let i = 0; i < routeTree.length; i++) {
        if (!routeTree[i].children) {
          if (routeTree[i].name === name) {
            return routeTree[i];
          }
        } else {
          return this.getRoute(routeTree[i].children, name);
        }
      }
    },

    getRouteProperty(name, property) {
      const { routes } = this.$router.options;

      if (name) {
        return this.getRoute(routes, name)[property];
      }

      return `${Math.random()}`;
    }
  }
};
</script>
