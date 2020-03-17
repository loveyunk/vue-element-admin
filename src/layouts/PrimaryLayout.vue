<template>
  <div class="primary-layout">
    <app-sidebar />
    <div class="main">
      <app-header></app-header>
      <div class="content">
        <Breadcrumb class="breadcrumb" />
        <slot />
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';
import Breadcrumb from '../components/Breadcrumb';
import AppFooter from '../components/AppFooter';

export default {
  name: 'PrimaryLayout',
  components: {
    AppSidebar,
    Breadcrumb,
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.primary-layout {
  display: flex;
  .main {
    flex: 1 1;
    height: 100vh;
    width: calc(100% - 256px);
    padding-top: 72px;
    overflow-y: scroll;
    overflow-x: hidden;
    .content {
      padding: 24px;
    }
  }
}
</style>
