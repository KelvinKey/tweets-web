<template>
  <div class="comment-form box-block">
    <div class="avatar-container pull-left">
      <a href="#">
        <img src="https://tweets.app/storage/images/2019/12/10/00068ab81afd9ef649bb1481d46f45fe.jpeg" class="media-object avatar avatar-small">
      </a>
    </div>
    <div class="input-box">
      <div class="form-group">
        <textarea v-if="isLogged" v-model="content" class="form-control" placeholder="输入评论..." ></textarea>
        <textarea v-else disabled class="form-control" placeholder="'需要登录后才能发布评论"></textarea>
      </div>
      <div class="form-group">
        <UploadImage ref="uploadImage" @images-updated="imagesUpdated"/>
      </div>
      <div class="form-group" :class="{hide: !isLogged}">
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
        images: []
      }
    },
    components: {
      UploadImage,
      EmojiPicker
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    methods: {
      async publish () {
        await this.$http.post('tweets', this.$data)

        this.loadTopicName()
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

  /*.comment-form {*/
  /*  margin: 1.333rem 1.666rem;*/
  /*  display: flex;*/
  /*  position: relative;*/
  /*  padding: 1rem 1.333rem;*/
  /*  background-color: #fafbfc;*/
  /*  border-radius: 3px;*/
  /*}*/

  /*.input-box {*/
  /*  font-size: 0;*/
  /*  background-color: #fff;*/
  /*  border: 1px solid #f1f1f1;*/
  /*  border-radius: 3px;*/
  /*}*/

  /*.rich-input {*/
  /*  position: relative;*/
  /*  padding: .6rem 1rem;*/
  /*  font-size: 1.083rem;*/
  /*  line-height: 1.7;*/
  /*  color: #17181a;*/
  /*  outline: none;*/
  /*  min-height: 1.3em;*/
  /*}*/

  /*.rich-input:before {*/
  /*  content: attr(placeholder);*/
  /*  position: absolute;*/
  /*  opacity: .4;*/
  /*  pointer-events: none;*/
  /*  user-select: none;*/
  /*}*/

  /*.comment-form:focus {*/
  /*  border-color: #007fff;*/
  /*}*/
</style>
