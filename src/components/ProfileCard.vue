<template>
  <div class="panel panel-default corner-radius panel-sidebar">
    <div class="panel-body">
      <div class="profile-box shadow" v-if="isLogged">
        <div class="profile">
          <a href="#" target="_blank">
            <div class="lazy avatar loaded"
                 :style="{backgroundImage: 'url(' + user.avatar + ')', backgroundSize: 'contain' }"></div>
          </a>
          <div class="user-info"><a href="#" target="_blank" class="username ellipsis">{{user.username}}</a>
            <div class="position ellipsis">{{user.intro}}</div>
          </div>
        </div>
        <ul class="stat-list">
          <a data-v-a8fb4580="" href="#" target="_blank" class="item">
            <div class="title">动弹</div>
            <div class="count">{{user.tweets_count}}</div>
          </a>
          <a href="#" target="_blank" class="item">
            <div class="title">关注</div>
            <div class="count">{{user.following_count}}</div>
          </a>
          <a href="#" target="_blank" class="item">
            <div class="title">粉丝</div>
            <div class="count">{{user.followers_count}}</div>
          </a></ul>
      </div>
      <div class="login-card" v-else>
        <p>加入 Tweets</p>
        <p>和老司机一起飙车</p>

        <div class="auth-btn">
          <router-link to="/auth/register" class="btn btn-primary btn-block">注册</router-link>
          <router-link to="/auth/login" class="btn btn-block btn-outline-primary">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ProfileCard',
    mounted () {
      this.isLogged && this.loadUser()
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    data () {
      return {
        user: {}
      }
    },
    methods: {
      loadUser () {
        this.$http.get(`user/me`).then(user => { this.user = user })
      }
    }
  }
</script>

<style scoped>
  .panel {
    border: none;
    border-radius: 3px;
  }

  .profile-box {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: .2rem;
    margin-bottom: -10px;
    font-size: 13px;
  }

  .profile-box .profile {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid rgba(92, 96, 102, .1);
  }

  .profile-box .stat-list {
    flex: 1 1 auto;
    display: flex;
    margin: 0;
    list-style: none;
    text-align: center;
    padding: 16.5px 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .profile-box .stat-list .item:not(:last-child) {
    border-right: 1px solid rgba(92, 96, 102, .1);
  }

  .profile-box .stat-list .item .title {
    font-size: 13px;
    color: #8a9aa9;
    margin-bottom: .5rem;
  }

  .profile-box .stat-list .item .count {
    font-size: 15px;
    font-weight: 600;
    color: #2e3135;
  }

  .profile-box .stat-list .item {
    flex: 1 1 33.333%;
    max-height: 2.833rem;
    line-height: 1;
  }

  .profile-box .profile .user-info .username {
    color: #17181a;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
  }

  .profile-box .profile .user-info .position {
    color: #8f969c;
  }

  .profile-box .profile .avatar {
    flex: 0 0 auto;
    margin-right: 0.8rem;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .15);
    margin-top: -0.5rem;
  }

  .btn-outline-primary {
    color: #0078ff;
    border-color: #0078ff;
  }

  .login-card .auth-btn {
    padding: 15px 0;
  }

  .login-card p {
    color: black;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
  }
</style>
