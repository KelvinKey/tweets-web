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
        <div style="margin: .25rem 3rem 0 10rem">
          <svg
            t="1572257754915"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            p-id="2672"
            width="40"
            height="40"
          >
            <path
              d="M846.726194 462.606307l-108.698095 175.515454v238.176709l88.237277 78.646269H614.30409l85.999376-79.285669v-244.251015l-198.214175-280.377146h125.642211l59.464252-56.26725-105.501093-160.489541-110.296597-32.929129 13.427412-101.344989-167.203247 134.274118-226.667499 422.324071 158.251639 343.358102-72.571964 77.047768v46.03684h119.887606l29.412425-15.665314 23.977522 15.665314h607.750234v-54.988448l-136.19232-136.19232v-173.916953l72.891664-118.608804h26.215423l13.427412 103.582891h38.364034l9.910708-180.310958h-135.552919z"
              p-id="2673"
              fill="black"
            />
          </svg>
        </div>

        <!-- <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" /> -->
      </div>
      <div
        id="top-navbar-collapse"
        :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]"
      >
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :key="item">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>

        <!-- 入口组件 -->
        <div class="navbar-right">
          <Entry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Entry from "@/components/layouts/Entry";

export default {
  name: "Header",
  components: {
    Entry
  },
  data() {
    return {
      logo: {
        title: '动弹一下'
      },
      navList: ['首页', '关于', '话题', '活动', '潮点'],
      activeNavIndex: 0,
      showCollapsedNav: false
    };
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav;
    }
  }
};
</script>

<style scoped>
.title {
  color: gray;
}
.navbar-default .navbar-nav > li {
  padding: 0 0.78rem;
}
.navbar-default .navbar-nav > li > a {
  font-size: 1rem;
  color: #71777c;
}

.navbar-default .navbar-nav > .active > a {
  background: rgba(0, 0, 0, 0.03);
}
</style>
