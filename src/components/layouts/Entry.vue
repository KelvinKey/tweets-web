<template>
  <div class="navbar-right">
    <ul v-if="isLogged" class="nav navbar-nav github-login">
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="currentUser">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar-topnav">
            <span v-if="currentUser.username">{{ currentUser.username }}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a @click="logout" href="javascript:;"><i class="fa fa-sign-out text-md"></i>退出</a></li>
        </ul>
      </li>
    </ul>
    <div v-else class="nav navbar-nav github-login auth">
      <a href="#" class="auth-btn">登录</a>
      <router-link to="/auth/register" class="auth-btn">注册</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Entry',
    computed: {
      ...mapGetters(['currentUser', 'isLogged'])
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        this.$message.success('退出成功')
      }
    }
  }
</script>

<style scoped>
  .auth {
    line-height: 50px;
  }

 .auth-btn {
   color: #007fff;
   float: none;
   padding: 15px 15px 9px;
   line-height: 26px;
   text-decoration: none;
   font-size: 15px;
 }
</style>
