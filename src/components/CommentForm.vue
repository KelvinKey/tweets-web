<template>
  <div class="comment-form box-block">
    <div class="avatar-container pull-left">
      <a href="#">
        <img  class="media-object avatar avatar-small" :src= this.currentUser.avatar>
      </a>
    </div>
    <div class="input-box">
      <div class="form-group">
        <textarea v-if="isLogged" v-model="content" class="form-control" placeholder="输入评论..." @focus="focus()" ></textarea>
        <textarea v-else disabled class="form-control" placeholder="'需要登录后才能发布评论"></textarea>
      </div>
      <div class="form-group">
        <UploadImage ref="uploadImage" @images-updated="imagesUpdated"/>
      </div>
      <div class="form-group" :class="{hide: !isLogged}" v-show="isGroup">
        <div class="action-box">
          <EmojiPicker @emoji-selected="emojiSelected"/>
          <div @click="uploadImage">
            <i class="fa fa-picture-o" aria-hidden="true"></i> 图片
          </div>
        </div>
        <button @click="publish" @keyup.ctrl.enter="publish" :disabled="!isLogged" class="btn btn-primary pull-right">评论</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import EmojiPicker from './EmojiPicker'
  import UploadImage from './UploadImage'

  export default {
    name: 'Form',
    data () {
      return {
        topicName: '',
        content: '',
        images: [],
        isGroup: false
      }
    },
    components: {
      UploadImage,
      EmojiPicker
    },
    computed: {
      ...mapGetters(['currentUser', 'isLogged'])
    },
    methods: {
      async publish () {
        await this.$http.post('tweets', this.$data)

        this.$emit('page-changed', 1)
        this.$message.success('发布成功')
        this.$refs.uploadImage.$emit('clear')
      },
      emojiSelected (emoji) {
        this.content += emoji
      },
      uploadImage () {
        this.$refs.uploadImage.$emit('submit')
      },
      imagesUpdated (images) {
        this.images = []

        for (let index in images) {
         this.images.push(images[index].response.url)
        }
      },
      focus () {
        this.isGroup = true
      }
    }
  }
</script>

<style scoped>
  .comment-form {
    padding: 16px 16px 10px;
    margin: 1.333rem 1.666rem;
    background-color: #fafbfc;
    border-radius: 3px;
  }

  .input-box {
    margin-left: 50px;
  }

  .input-box .form-group {
    margin-bottom: 8px;
  }

  .input-box textarea {
    height: 40px;
  }

  .input-box textarea.form-control {
    line-height: 25px;
  }

  .avatar-container {
    text-align: center;
    width: 40px;
    padding: 0;
  }

  .action-box {
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    color: #0d84ff;
    line-height: 30px;
  }
  .action-box>div {
    margin-left: 10px;
    display: inline-block;
  }
</style>
