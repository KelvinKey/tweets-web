<template>
  <div class="publish-box form box-block">
    <div class="form-group tweet-editor">
      <textarea v-if="isLogged" v-model="content" class="form-control" placeholder="告诉你个小秘密，发动弹时添加话题会被更多小伙伴看见呦~"></textarea>
      <textarea v-else disabled class="form-control" placeholder="需要登录后才能发表发布动弹"></textarea>
    </div>
    <div class="form-group tweet-submit">
      <button @click="publish" @keyup.ctrl.enter="publish" :disabled="!isLogged" class="btn btn-primary">发布</button>
      <span class="help-inline">Ctrl+Enter</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  export default {
    name: 'Form',
    data () {
      return {
        topic_id: '',
        content: ''
      }
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
      }
    }
  }
</script>

<style scoped>
</style>
