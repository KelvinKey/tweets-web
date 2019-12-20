<template>
  <div class="comment-list-box">
    <CommentForm :tid="tid" @published="published" />

    <div class="comment-list">
      <div v-for="comment in comments.data" :key="comment.cid" class="comment">
        <div class="avatar-container pull-left">
          <a href="#">
            <img :src="comment.user.avatar" class="media-object avatar avatar-small">
          </a>
        </div>
        <div class="content-box">
          <div class="meta-box">
            <div class="username-box">
              <a class="username">{{ comment.user.username }}</a>
            </div>
            <div class="intro">{{ comment.user.intro }}</div>
          </div>
          <div class="preview content">{{ comment.content }}</div>
          <div class="comment-stat">
            <time>{{ comment.created_at | moment('from', { startOf: 'second' }) }}</time>
            <div class="action-box pull-right">
              <div class="comment-like">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
<!--              <div class="comment-delete">删除</div>-->
              <div class="comment-action">
                <i class="fa fa-comments-o" aria-hidden="true"></i>
                <span>回复</span>
              </div>
            </div>
          </div>
          <div class="sub-comment-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommentForm from './CommentForm'

  export default {
    name: 'CommentList',
    data () {
      return {
        comments: []
      }
    },
    props: {
      tid: {
        type: String
      }
    },
    components: {CommentForm},
    mounted () {
      this.$on('showComment', () => {
        this.comments.length === 0 && this.loadLatestComments()
      })
    },
    methods: {
      loadLatestComments () {
        this.$http
          .get(`tweets/${this.tid}/comments?include=user&per_page=6`)
          .then(comments => (this.comments = comments))
      },
      published () {
        this.loadLatestComments()
        this.$emit('commented')
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
  }

  .comment-list {
    margin-left: 70px;
  }

  .comment {
    margin: 1rem 0;
  }

  .content-box {
    margin-left: 65px;
    margin-right: 20px;
    margin-bottom: 10px;
    flex: 1 1 auto;
    font-size: 14px;
    border-bottom: 1px solid #f1f1f1;
  }

  .meta-box {
    display: flex;
    align-items: center;
    line-height: 1.25;
    white-space: nowrap;
  }

  .username-box {
    display: inline;
  }

  .username {
    font-weight: 400;
    flex: 1 1 auto;
    width: 0;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline;
  }

  .intro {
    color: #8a9aa9;
    margin-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 16rem;
  }

  .content {
    margin: 5px 0;
    word-wrap: break-word;
    word-break: break-all;
    color: #505050;
    overflow: hidden;
  }

  .comment-stat {
    color: #8a9aa9;
    cursor: default;
    margin-top: 7px;
  }

  .action-box {
    display: inline;
    cursor: pointer;
    text-align: center;
  }

  .action-box>div {
    margin-left: 30px;
    display: inline-block;
  }

  .sub-comment-list {
    margin: 1rem 0;
    padding: 0 0 0 1rem;
    background-color: #fafbfc;
    border-radius: 3px;
  }
</style>
