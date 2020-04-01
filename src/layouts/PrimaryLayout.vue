<template>
  <div :class="classes">
    <TheSidebar />
    <div class="main">
      <TheTopBar />

      <div class="p-6">
        <Breadcrumb class="pt-2 pb-5" />
        <slot />
      </div>

      <TheFooter />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheTopBar from '../components/TheTopBar/index.vue';
import TheSidebar from '../components/TheSidebar/index.vue';
import Breadcrumb from '../components/Breadcrumb/index.vue';
import TheFooter from '../components/TheFooter/index.vue';

export default {
  components: {
    TheSidebar,
    Breadcrumb,
    TheTopBar,
    TheFooter
  },

  computed: {
    ...mapState('app', ['sidebar']),

    classes() {
      return [
        'primary-layout',
        {
          hideSidebar: this.sidebar.isCollapse,
          openSidebar: !this.sidebar.isCollapse
        }
      ];
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variable.scss';

.primary-layout {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sidebarWidth;
  .main {
    height: 100vh;
    padding-top: 42px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
