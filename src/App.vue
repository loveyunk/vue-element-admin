<template>
  <div id="app">
    <base-layout>
      <router-view />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from './layouts/index.vue';

export default {
  components: {
    BaseLayout
  }
};
</script>
