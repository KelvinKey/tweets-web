<template>
  <div class="page-home">
    <div class="row mt-3">
      <div class="col-md-3">
        <HotTopics/>
      </div>
      <div class="col-md-6">
        <TweetForm @page-changed="handlePageChanged"/>
        <TweetsList :tweets="tweets" @page-changed="handlePageChanged" />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
  import TweetsList from '../../components/TweetsList'
  import HotTopics from '../../components/HotTopics'
  import TweetForm from '../../views/tweets/Form'

  export default {
    name: 'Home',
    components: {
      TweetsList,
      TweetForm,
      HotTopics
    },
    data () {
      return {
        tweets: {}
      }
    },
    methods: {
      loadTweets (page = 1) {
        this.$http
          .get(`tweets?include=user,topic&page=${page}`)
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
