<template>
  <div v-loading="loading" class="px-6 pt-8 pb-2 bg-white rounded-sm">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
