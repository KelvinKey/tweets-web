<template>
  <div class="tweets-group">
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
          <div class="dot" v-if="tweet.user.intro == null">·</div>
          <abbr class="timeago">
            {{ tweet.created_at | moment('from', { startOf: 'second' }) }}
          </abbr>
        </div>
        <div class="tweets-attention">
          <button v-if="isLogged" class="subscribe-btn" v-on:click="attention">关注</button>
          <div class="tweets-svg" v-on:click="report">
            <svg t="1529034629100" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1948"
                 xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" class="icon">
              <path data-v-00139275=""
                    d="M804.606221 432.282401c120.691803 0 119.469975 187.388854-1.465374 187.388854C682.449044 619.671255 683.426301 432.282401 804.606221 432.282401z"
                    p-id="1949" fill="#b8c1cc"></path>
              <path data-v-00139275=""
                    d="M511.428995 432.282401c120.691803 0 119.469975 187.388854-1.465374 187.388854C389.271818 619.671255 390.249075 432.282401 511.428995 432.282401z"
                    p-id="1950" fill="#b8c1cc"></path>
              <path data-v-00139275=""
                    d="M218.251769 432.282401c120.691803 0 119.469975 187.388854-1.465374 187.388854C96.094592 619.671255 97.071849 432.282401 218.251769 432.282401z"
                    p-id="1951" fill="#b8c1cc"></path>
            </svg>
          </div>
          <div class="tweets-drop" v-show="isShow">
            <div class="tweets-drop-caret"></div>
            <ul class="tweets-drop-menus">
              <li class="tweets-drop-Report">举报</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="preview media-body markdown-reply markdown-body" v-html="tweet.content"></div>
      <div>
        <ul class="tweets-flex">
          <li v-for="item in tweet.images" :key="item">
            <img :src="item" alt="tweet.images" class="tweets-image">
          </li>
        </ul>
      </div>
      <div class="flex-clear"><a class="topic-title" v-if="tweet.topic != null">{{ tweet.topic.name}}</a></div>
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
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'TweetsCard',
    props: ['tweet'],
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    methods: {
      attention: () => {
      },
      report: () => {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .media-body {
    font-size: 15px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: #17181a;
    margin-top: 10px;
    margin-bottom: -10px;
    padding-right: 2.3rem;
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

  .action:not(:last-child):after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -.7rem;
    width: 1px;
    height: 1.5rem;
    background-color: #ebebeb;
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

  .topic-title {
    font-size: 13px;
    display: inline-block;
    line-height: 22px;
    padding: 0 12px;
    border: 1px solid #409EFF;
    border-radius: 14px;
    user-select: none;
    margin-top: .666rem;
  }

  .tweets-image {
    width: 125px;
    height: 125px;
    object-fit: cover;
  }

  .tweets-flex {
    padding: initial;
    margin-top: 1rem;
  }

  .flex-clear {
    clear: both;
  }

  li {
    list-style-type: none;
    display: block;
    float: left;
    margin-right: 0.5rem;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    margin-bottom: 0.5rem;
  }

  .action span {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }

  .tweets-attention {
    width: 9rem;
    height: 2.5rem;
    float: right;
    margin-top: -35px;
  }

  .subscribe-btn {
    margin: 0 0 0 auto;
    padding: 0;
    width: 55px;
    height: 26px;
    font-size: 13px;
    border-color: #409EFF;
    color: #409EFF;
    border: 1px solid #409EFF;
    background-color: #fff;
    border-radius: 2px;
  }

  .tweets-svg {
    float: right;
    margin-right: 2rem;
  }

  .tweets-group {
    margin-top: 1rem;
  }

  .tweets-drop {
    position: absolute;
    margin-top: 3px;
    right: -8px;
  }

  .tweets-drop-caret {
    position: absolute;
    top: -11px;
    left: 30px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #ebebeb;
  }

  .tweets-drop-menus {
    display: block;
    padding: 6px 0;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .06);
    height: 2.5rem;
  }

  .tweets-drop-Report {
    padding: 3px 24px;
    display: block;
    font-size: 13px;
    color: #84878b;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
  }
</style>
