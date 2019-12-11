<template>
  <div class="mb-2">
    <div class="tweets panel list-panel tweets-index">
      <div class="panel-body">
        <ul id="tweet-list" class="list-group row">
          <li v-for="tweet in tweets.data" :key="tweet.tid" class="list-group-item media">
            <TweetsCard v-bind:tweet="tweet"></TweetsCard>
          </li>
        </ul>
        <div v-show="!tweets.data" class="empty-block">
          暂无动弹~~
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TweetsCard from '../components/TweetsCard'

  export default {
    name: 'TweetsList',
    components: {
      TweetsCard
    },
    props: {
      tweets: {
        type: Object,
        default () {
          return {
            data: [],
            meta: {
              total: 1,
              per_page: 1,
              from: 1,
              to: 1,
              last_page: 1,
              current_page: 1
            }
          }
        }
      }
    },
    methods: {
      handleChange (page) {
        this.$emit('page-changed', page)
      }
    }
  }
</script>

<style scoped>
  .panel-body {
    background-color: #f0f2f5;
    border: none;
  }

  .panel {
    border: none;
    border-radius: 3px;
  }

  .list-group-item {
    padding: 0px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  }
</style>
