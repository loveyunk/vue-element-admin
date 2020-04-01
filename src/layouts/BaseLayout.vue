<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import PrimaryLayout from './PrimaryLayout.vue';
import PublicLayout from './PublicLayout.vue';
import { queryLayout } from '../utils';
import config from '../utils/config';

export default {
  components: {
    primary: PrimaryLayout,
    public: PublicLayout
  },

  computed: {
    layout() {
      return queryLayout(config.layouts, this.$route.name);
    }
  }
};
</script>
