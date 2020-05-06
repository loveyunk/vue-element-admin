<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import primary from './primary.vue';
import blank from './blank.vue';

export default {
  components: {
    primary,
    blank
  },

  computed: {
    layout() {
      return this.$route.meta.layout || 'div';
    }
  }
};
</script>
