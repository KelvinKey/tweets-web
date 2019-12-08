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
  import { isEmpty } from 'lodash'

  export default {
    name: 'Home',
    components: {
      TweetsList,
      TweetForm,
      HotTopics
    },
    data () {
      return {
        topic: {},
        tweets: {},
        topic_id: ''
      }
    },
    methods: {
      loadTweets (page = 1) {
        let path = isEmpty(this.topic_id) ? '' : `topics/${this.topic_id}/`

        this.$http
          .get(`${path}tweets?include=user&page=${page}`)
          .then(tweets => (this.tweets = tweets))
      },
      handlePageChanged (page) {
        this.loadTweets(page)
      }
    },
    created () {
      this.topic_id = this.$route.params.topic_id
    },
    mounted () {
      this.loadTweets()
    }
  }
</script>
