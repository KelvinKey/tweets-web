<template>
  <div class="publish-box form box-block">
    <div class="form-group tweet-editor">
      <textarea v-if="isLogged" v-model="content" class="form-control" placeholder="告诉你个小秘密，发动弹时添加话题会被更多小伙伴看见呦~"></textarea>
      <textarea v-else disabled class="form-control" placeholder="需要登录后才能发表发布动弹"></textarea>
    </div>
    <div class="form-group">
      <UploadImage ref="uploadImage" @images-updated="imagesUpdated"/>
    </div>
    <div class="form-group tweet-submit" :class="{hide: !isLogged}">
      <div class="action-box">
        <EmojiPicker @emoji-selected="emojiSelected"/>
        <div @click="uploadImage">
          <i class="fa fa-picture-o" aria-hidden="true"></i> 图片
        </div>
      </div>
      <button @click="publish" @keyup.ctrl.enter="publish" :disabled="!isLogged" class="btn btn-primary pull-right">发布</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import EmojiPicker from '../../components/EmojiPicker'
  import UploadImage from '../../components/UploadImage'
  import { isEmpty } from 'lodash'

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
      loadTopicName () {
        this.content = isEmpty(this.topicName) ? '' : `#${this.topicName}# `
      }
    },
    created () {
      this.topicName = this.$route.params.topic_name
      this.loadTopicName()
    }
  }
</script>

<style scoped>
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
