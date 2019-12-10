<template>
  <div class="tweets-group">
    <div class="avatar-container pull-left">
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
          <div class="dot" v-if="tweet.user.intro">·</div>
          <abbr class="timeago">
            {{ tweet.created_at | moment('from', { startOf: 'second' }) }}
          </abbr>
        </div>
        <div class="tweets-attention" @mouseleave="leaveMoreBtn">
          <button v-if="isLogged && this.currentUser.uid !== this.tweet.uid" v-show="isAtten" class="subscribe-btn"
                  v-on:click="attention">关注
          </button>
          <div class="more-btn" v-on:click="report" v-if="isLogged">
            <i class="fa fa-ellipsis-h fa-2" aria-hidden="true"></i>
          </div>
          <div class="tweets-drop" v-show="isShow">
            <div class="tweets-drop-caret"></div>
            <ul class="tweets-drop-menus">
              <li>举报</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="preview media-body" v-html="parseContent(tweet.content)"></div>
      <div class="tweets-image">
        <ElImage
          style="width: 9rem; height: 9rem; margin-top:4px;margin-right:4px;overflow: visible;"
          fit="cover"
          v-for="url in tweet.images"
          :key="url"
          :src="url"
          :preview-src-list="tweet.images" lazy/>
      </div>
    </div>
    <div class="action-box">
      <div :class="'action ' + (tweet.liked && isLogged ? 'tweet-liked' : '')" @click="toggleLike">
        <span id="liked-icon" v-show="isLiked" :class="isLiked ? 'fadeOutUp animated':''">+1</span>
        <i :class="'fa fa-thumbs' + (tweet.liked && isLogged ? '' : '-o') + '-up'" aria-hidden="true"></i>
        <span>{{ tweet.likes_count }}</span>
      </div>
      <div class="action">
        <i class="fa fa-comments-o" aria-hidden="true"></i>
        <span>{{ tweet.comments_count }}</span>
      </div>
      <div class="action">分享</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import { Image as ElImage } from 'element-ui'
  import 'element-ui/lib/theme-chalk/image.css'
  import 'element-ui/lib/image'

  export default {
    name: 'TweetsCard',
    props: ['tweet'],
    data () {
      return {
        isShow: false,
        isLiked: false,
        isAtten: true
      }
    },
    components: {
      ElImage
    },
    computed: {
      ...mapGetters(['currentUser', 'isLogged'])
    },
    methods: {
      async toggleLike () {
        if (!this.isLogged) {
          return this.$message.warning('请先登录～')
        }

        let action = this.tweet.liked ? 'unlike' : 'like'

        await this.$http
          .post(`tweets/${this.tweet.tid}/${action}`)
          .then(data => {
            this.tweet.likes_count = data.likes_count
            this.tweet.liked = !this.tweet.liked
            this.isLiked = this.tweet.liked
          })
      },
      async attention () {
        await this.$http
          .post(`users/${this.tweet.uid}/follow`)
          .then(data => {
            this.isAtten = false
          })

        this.$message.warning('关注成功~')
      },
      report () {
        this.isShow = !this.isShow
      },
      leaveMoreBtn () {
        this.isShow = false
      },
      isAttened () {
        this.isAtten = !this.tweet.user.followed
      },
      parseContent (value) {
        return value.replace(/#([^#]{1,20})#/g, '<a href= "/topic/$1" >#$1#</a>')
      }
    },
    watch: {
      isLogged (val) {
        !val && (this.tweet.liked = false)
      }
    },
    mounted () {
      this.isAttened()
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
    height: 34px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
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

  .tweets-image {
    padding: initial;
    margin: .7rem 0;
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
    color: #409EFF;
    border: 1px solid #409EFF;
    background-color: #fff;
    border-radius: 2px;
  }

  .more-btn {
    float: right;
    margin-right: 2rem;
    cursor: pointer;
    padding: 5px 0 5px 15px;
  }

  .more-btn i {
    color: #b8c1cc;
    font-size: 18px;
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

  .tweets-drop-menus li {
    padding: 3px 24px;
    display: block;
    font-size: 13px;
    color: #84878b;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
  }

  .tweet-liked {
    color: #409EFF;
  }

  #liked-icon {
    color: red;
    width: 18px;
    position: absolute;
  }
</style>
