<template>
  <div class="loadMore">
    <vue-data-loading
      :loading="loading"
      :completed="completed"
      :offset="-1"
      :listens="['infinite-scroll', 'pull-down']"
      :init-scroll="false"
      @infinite-scroll="infiniteScroll"
      @pull-down="pullDown">
      <div>
        <slot></slot>
      </div>
      <div slot="infinite-scroll-loading">加载中...</div>
      <div slot="completed" class="empty-block">
        已经到底啦～
      </div>
    </vue-data-loading>
  </div>
</template>

<script>
  import VueDataLoading from 'vue-data-loading'
  export default {
    name: 'loadMore',
    props: {
      completed: {
        type: Boolean,
        default: false
      }
    },
    components: {
      VueDataLoading
    },
    data () {
      return {
        loading: false,
        page: 1,
        isBack: false
      }
    },
    mounted () {
      this.$on('loading', (loading) => { this.loading = loading })
    },
    methods: {
      pullDown () {
        this.page = 1
        this.$emit('changeData', 1)
      },
      infiniteScroll () {
        if (this.loading) return

        this.page++
        this.$emit('changeData', this.page)
      }
    }
  }
</script>
