<template>
  <LoadMore ref="loadMore" :completed="isCompleted" @changeData="changPage">
    <div class="page-home">
      <div class="row mt-3">
        <div class="col-md-3">
          <HotTopics/>
          <HotTweets class="visible-lg"/>
        </div>
        <div class="col-md-6">
          <TweetForm @page-changed="handlePageChanged"/>
          <TweetsList :tweets="tweets" @page-changed="handlePageChanged"/>
        </div>
        <div class="col-md-3">
          <ProfileCard class="visible-lg"/>
        </div>
      </div>
    </div>
  </LoadMore>
</template>
<script>
  import TweetsList from '../../components/TweetsList'
  import HotTopics from '../../components/HotTopics'
  import TweetForm from '../../views/tweets/Form'
  import ProfileCard from '../../components/ProfileCard'
  import HotTweets from '../../components/HotTweets'
  import {isEmpty} from 'lodash'
  import md5 from 'js-md5'
  import LoadMore from '../../components/LoadMore'

  export default {
    name: 'Home',
    components: {
      LoadMore,
      TweetsList,
      TweetForm,
      HotTopics,
      ProfileCard,
      HotTweets
    },
    data () {
      return {
        topic: {},
        tweets: {},
        topicName: '',
        isCompleted: false
      }
    },
    methods: {
      loadTweets (page = 1) {
        this.$refs.loadMore.$emit('loading', true)
        let path = isEmpty(this.topicName) ? '' : `topics/${md5(this.topicName)}/`

        this.$http
          .get(`${path}tweets?include=user&page=${page}`)
          .then(tweets => {
            if (this.tweets.data === undefined) {
              this.tweets = tweets
            } else {
              this.tweets.data = this.tweets.data.concat(tweets.data)
            }

            this.$refs.loadMore.$emit('loading', false)
          })
      },
      handlePageChanged (page) {
        this.loadTweets(page)
      },
      changPage (page) {
        if (page > this.tweets.meta.last_page) {
          this.isCompleted = true
          return
        }

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
