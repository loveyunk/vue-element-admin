<template>
  <div :class="['page-container', { loading: loading }]">
    <the-loader v-if="loading" spinning />
    <slot />
  </div>
</template>

<script>
import TheLoader from '../TheLoader/index.vue';

export default {
  name: 'PageContainer',
  components: {
    TheLoader
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  background: #fff;
  border-radius: 2px;
  padding: 30px 24px 24px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
  min-height: calc(100vh - 200px);
  .loading {
    height: 'calc(100vh - 184px)';
    overflow: 'hidden';
  }
}
</style>
