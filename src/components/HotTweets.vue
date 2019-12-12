<template>

  <div class="panel panel-default corner-radius panel-hot-topics">
    <div class="panel-heading text-center">
      <h2 class="panel-title">热门动弹</h2>
    </div>
    <div class="panel-body">
      <div class="related-pin-block pin-block">
        <ul class="pin-list">
          <li class="item" v-for="hot in hots.data" :key="hot.tid">
            <a href="#" target="_blank" rel="" :title=hot.content class="pin">
              <div class="content-box">
                <div class="content">{{hot.content}}
                </div>
                <div class="stat item" style="margin-top: 0.83rem;">
                  <span> {{hot.likes_count}} 赞 · </span>
                  <span>{{hot.comments_count}} 评论</span>
                </div>
              </div>
              <div class="image-box" :style="{backgroundImage:'url(' + hot.images[0] + ')'}" v-show="hot.images[0] ==undefined ? false :true"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotTweets',
    data () {
      return {
        hots: {}
      }
    },
    methods: {
      loadHotTweets () {
        this.$http.get('tweets?hot=true').then(hots => {
          this.hots = hots
        })
      }
    },
    mounted () {
      this.loadHotTweets()
    }
  }
</script>

<style scoped>

  .panel-title {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #2e3135;
  }

  .panel-body {
    margin-left: -3rem;
  }

  .panel {
    border: none;
    border-radius: 3px;
  }

  li {
    list-style: none;
  }

  li.item:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
  }

  li.item {
    padding: 12px 0;
  }

  .pin {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }

  .content-box {
    display: flex;
    align-content: space-between;
    flex-direction: column;
  }

  .content {
    color: #2e3135;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    max-height: 3.5rem;
    max-width: 22rem;
    max-height: 3em;
  }

  .stat {
    color: #76797e;
    font-size: 1.02rem;
    margin-top: auto;
    /*margin-top: 0.83rem;*/
  }

  .image-box {
    min-width: 5.67rem;
    height: 5.67rem;
    margin-left: 1rem;
    border-radius: 4px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .pin-block {
    margin-top: -0.9rem;
  }

</style>
