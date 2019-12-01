<template>
  <div class="mb-2">
    <div class="tweets panel list-panel tweets-index">
      <div class="panel-body">
        <ul id="tweet-list" class="list-group row">
          <li v-for="tweet in tweets.data" :key="tweet.tid" class="list-group-item media">
            <div class="avatar avatar-container pull-left">
              <a href="#">
                <img :src="tweet.user.avatar" class="media-object avatar avatar-middle">
              </a>
            </div>
            <div class="infos">
              <div class="media-heading">
                <a href="#" class="remove-padding-left author rm-link-color">
                  {{ tweet.user.username }}
                </a>
                <div class="meta">
                  <abbr>{{ tweet.user.intro }}</abbr>
                  <div class="dot">·</div>
                  <abbr class="timeago">
                    {{ tweet.created_at | moment('from', { startOf: 'second' }) }}
                  </abbr>
                </div>
              </div>
              <div class="preview media-body markdown-reply markdown-body" v-html="tweet.content"></div>
            </div>
            <div class="action-box">
              <div class="action">
                <i class="fa fa-thumbs-o-up fa-2" aria-hidden="true"></i>
                <span>{{ tweet.likes_count }}</span>
              </div>
              <div class="action">
                <i class="fa fa-comments-o fa-2" aria-hidden="true"></i>
                <span>{{ tweet.comments_count }}</span>
              </div>
              <div class="action">分享</div>
            </div>
          </li>
        </ul>
        <div v-show="!tweets.data" class="empty-block">
          暂无评论~~
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TweetsList',
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
  }
  .media-body {
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: #17181a;
  }
  .action-box {
    display: flex;
    position: relative;
    margin-top: 1.333rem;
    height: 34px;
    border-top: 1px solid #ebebeb;
    font-size: 13px;
    font-weight: 500;
    color: #8a93a0;
  }
  .action-box div:not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
  .action {
    flex: 1 1 33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
  .action span {
    margin-left: 5px;
  }
  .list-group-item {
    padding: 0px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
  .author {
    font-size: 1.25rem;
    font-weight: 400;
    color: #2e3135;
  }
  .meta {
    font-size: 13px;
    color: #8a9aa9;
    cursor: default;
  }
  a {
    text-decoration: none;
  }
</style>
