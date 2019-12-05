<template>
  <div id="wrap">
    <Header/>
    <div id="main-container" class="container main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  $container-large-desktop: 1200px;
  $btn-primary-bg: #409EFF;
  $btn-primary-border: #409EFF;
  $label-primary-bg: #409EFF;
  $pagination-active-bg: #409EFF;
  $pagination-active-border: #409EFF;
  $pagination-color: #409EFF;
  $input-border-focus: #409EFF;
  $link-color: #2A8DFF;
  $link-hover-color: #2F8CFF;
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  $fa-font-path: "~font-awesome/fonts/";

  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "~font-awesome/scss/font-awesome";
  @import "./styles/main";
  @import "./styles/extra";
  @import "./styles/animate";
</style>
