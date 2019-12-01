<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请登录</h3>
        </div>

        <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">用户名</label>
            <input v-model.trim="username" v-validator.required="{ title: '用户名' }" type="text" class="form-control" placeholder="请填写用户名">
          </div>
          <div class="form-group">
            <label class="control-label">密码</label>
            <input v-model.trim="password" id="password" v-validator.required="{ title: '密码' }" type="password" class="form-control" placeholder="请填写密码">
          </div>
          <br>
          <button @click="login" type="submit" class="btn btn-lg btn-primary btn-block">
            <i class="fa fa-btn fa-sign-in"></i> 登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['attemptLogin']),
      login (e) {
        this.$nextTick(() => {
          const target = e.target.type === 'submit' ? e.target : e.target.parentElement

          target.canSubmit && this.submit()
        })
      },
      async submit () {
        await this.attemptLogin(this.$data)
        this.$message.success('登录成功')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
