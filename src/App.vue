<template>
  <div id="app">
    <base-layout>
      <router-view />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  }
};
</script>
