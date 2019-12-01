<template>
  <div class="page-home">
    <div class="row mt-3">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <TweetsList :tweets="tweets" @page-changed="handlePageChanged" />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
  import TweetsList from '../../components/TweetsList'

  export default {
    name: 'Home',
    components: {
      TweetsList
    },
    data () {
      return {
        tweets: {}
      }
    },
    methods: {
      loadTweets (page = 1) {
        this.$http
          .get(`tweets?include=user&page=${page}`)
          .then(tweets => (this.tweets = tweets))
      },
      handlePageChanged (page) {
        this.loadTweets(page)
      }
    },
    mounted () {
      this.loadTweets()
    }
  }
</script>
