<template>
  <div class="page-home">
    <div class="row mt-3">
      <div class="col-md-3">
        <HotTopics/>
      </div>
      <div class="col-md-6">
        <TweetForm @page-changed="handlePageChanged"/>
        <TweetsList :tweets="tweets" @page-changed="handlePageChanged"/>
      </div>
      <div class="col-md-3" style="margin-left: inherit;">
        <ProfileCard/>
      </div>
    </div>
  </div>
</template>
<script>
  import TweetsList from '../../components/TweetsList'
  import HotTopics from '../../components/HotTopics'
  import TweetForm from '../../views/tweets/Form'
  import ProfileCard from '../../components/ProfileCard'
  import {isEmpty} from 'lodash'
  import md5 from 'js-md5'

  export default {
    name: 'Home',
    components: {
      TweetsList,
      TweetForm,
      HotTopics,
      ProfileCard
    },
    data () {
      return {
        topic: {},
        tweets: {},
        topicName: ''
      }
    },
    methods: {
      loadTweets (page = 1) {
        let path = isEmpty(this.topicName) ? '' : `topics/${md5(this.topicName)}/`

        this.$http
          .get(`${path}tweets?include=user&page=${page}`)
          .then(tweets => { this.tweets = tweets })
      },
      handlePageChanged (page) {
        this.loadTweets(page)
      }
    },
    created () {
      this.topicName = this.$route.params.topic_name
    },
    mounted () {
      this.loadTweets()
    }
  }
</script>
