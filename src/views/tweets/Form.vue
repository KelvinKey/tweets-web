<template>
  <div class="publish-box form box-block">
    <div class="form-group tweet-editor">
      <textarea v-if="isLogged" v-model="content" class="form-control" placeholder="告诉你个小秘密，发动弹时添加话题会被更多小伙伴看见呦~"></textarea>
      <textarea v-else disabled class="form-control" placeholder="需要登录后才能发表发布动弹"></textarea>
    </div>
    <div class="form-group tweet-submit">
      <div class="action-box">
        <EmojiPicker @emoji-selected="emojiSelected"/>
      </div>
      <button @click="publish" @keyup.ctrl.enter="publish" :disabled="!isLogged" class="btn btn-primary pull-right">发布</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'
  import EmojiPicker from '../../components/EmojiPicker'

  export default {
    name: 'Form',
    data () {
      return {
        topic_id: '',
        content: ''
      }
    },
    components: {
      EmojiPicker
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    methods: {
      async publish () {
        let data = this.$data

        isEmpty(data.topic_id) && delete data.topic_id

        await this.$http.post('tweets', data)

        this.content = ''
        this.$emit('page-changed', 1)
        this.$message.success('发布成功')
      },
      emojiSelected (emoji) {
        this.content += emoji
      }
    }
  }
</script>

<style scoped>
  .action-box {
    margin-left: 10px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    color: #0d84ff;
    line-height: 30px;
  }
</style>
