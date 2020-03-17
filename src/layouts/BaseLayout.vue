<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import PrimaryLayout from './PrimaryLayout';
import PublicLayout from './PublicLayout';
import { queryLayout } from '../utils';
import config from '../utils/config';

export default {
  name: 'BaseLayout',
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
