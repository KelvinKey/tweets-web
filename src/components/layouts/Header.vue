<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a href="/" class="navbar-brand">
          <span class="title">Tweets</span>
        </a>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li :key="item" v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <a href="/" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>

        <!-- 入口组件 -->
        <div class="navbar-right">
          <Entry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Entry from '@/components/layouts/Entry'

  export default {
    name: 'Header',
    data () {
      return {
        navList: ['首页', '关于'],
        activeNavIndex: 0,
        showCollapsedNav: false
      }
    },
    components: {
      Entry
    },
    methods: {
      changeNavIndex (index) {
        this.activeNavIndex = index
      },
      toggleNav () {
        this.showCollapsedNav = !this.showCollapsedNav
      }
    }
  }
</script>

<style scoped>
  .title { color: grey;}
</style>
