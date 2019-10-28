<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>

    <!-- 左侧导航栏 -->
    <Navigator />

    <!-- 动弹列表 -->
    <div class="col-md-7 main-col topics-index">
      <div class="panel-body remove-padding-horizontal">
        <ul class="list-group row topic-list">
          <li v-for="article in articles" :key="article.articleId" class="list-group-item">
            <router-link :to="`/articles/${article.articleId}/content`" tag="div" class="reply_count_area hidden-xs pull-right">
              <div class="count_set">
                <span class="count_of_votes" title="投票数">{{ article.likeUsers ? article.likeUsers.length : 0 }}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_replies" title="回复数">{{ article.comments ? article.comments.length : 0 }}</span>
                <span class="count_seperator">|</span>
                <abbr class="timeago">{{ article.date | moment('from') }}</abbr>
              </div>
            </router-link>
            <router-link v-if="user" :to="`/${user.name}`" tag="div" class="avatar pull-left">
              <img :src="user.avatar" class="media-object img-thumbnail avatar avatar-middle">
            </router-link>
            <router-link :to="`/articles/${article.articleId}/content`" tag="div" class="infos">
              <div class="media-heading">
                {{ article.title }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <Sidebar />
  </div>
</template>

<script>
import Navigator from '../components/layouts/Navigator'
import Sidebar from '../components/layouts/Sidebar'
export default {
  name: 'Home',
  components: {Sidebar, Navigator},
  data () {
    return {
      msg: '', // 消息
      msgType: '', // 消息类型
      msgShow: false // 是否显示消息，默认不显示
    }
  },
  // 组件内的路由导航守卫
  beforeRouteEnter (to, from, next) {
    // 路由的名称，对应路由配置中的 name
    const fromName = from.name
    // 获取 logout 参数
    const logout = to.params.logout
    // 确认导航
    next(vm => {
      // 通过 vm 参数访问组件实例，已登录时，评估路由名称
      if (vm.$store.state.auth) {
        switch (fromName) {
          // 如果从注册页面跳转过来
          case 'Register':
            vm.showMsg('注册成功')
            break
            // 已登录时，从登录页面跳转过来
          case 'Login':
            vm.showMsg('登录成功')
        }
      } else if (logout) {
        vm.showMsg('操作成功')
      }
    })
  },
  computed: {
    auth () {
      return this.$store.state.auth
    }
  },
  watch: {
    auth (value) {
      if (!value) {
        this.showMsg('操作成功')
      }
    }
  },
  methods: {
    showMsg (msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    }
  }
}
</script>

<style scoped>
</style>
