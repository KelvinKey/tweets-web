<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请注册</h3>
        </div>

        <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">用户名</label>
            <input @blur.prevent="checkUserExists('username')" v-model.trim="username" v-validator:input.required="{ regex: /^[a-zA-Z\d]+$/, error: '用户名要求以字母开头的单词字符' }" ref="usernameInput" type="text" class="form-control" placeholder="请填写用户名">
          </div>
          <div class="form-group">
            <label class="control-label">手机号</label>
            <input @blur.prevent="checkUserExists('phone')" v-model.trim="phone" v-validator:input.required="{ regex: /^^1(3[0-9]|4[57]|5[0-35-9]|6[6]|7[0135678]|8[0-9])\d{8}$/, error: '请输入正确的手机号' }" ref="phoneInput" type="text" class="form-control" placeholder="请输入手机号">
          </div>
          <div class="form-group">
            <label class="control-label">密码</label>
            <input id="password" v-model.trim="password" v-validator.required="{ regex: /^\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }" type="password" class="form-control" placeholder="请填写密码">
          </div>
          <div class="form-group">
            <label class="control-label">确认密码</label>
            <input  v-model.trim="confirmPassword" v-validator.required="{ target: '#password' }" type="password" class="form-control" placeholder="请填写确认密码">
          </div>
          <button type="submit" class="btn btn-lg btn-success btn-block" @click="register">
            <i class="fa fa-btn fa-hand-o-right"></i> 下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import validator from '../../directives/validator'

  export default {
    name: 'Register',
    data () {
      return {
        phone: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register (e) {
        this.$nextTick(() => {
          const target = e.target.type === 'submit' ? e.target : e.target.parentElement

          if (target.canSubmit) {
            let user = {
              phone: this.phone,
              username: this.username,
              password: this.password
            }

            this.$router.push({name: 'ValidatePhone', params: { user: user }})
          }
        })
      },
      checkUserExists (key) {
        let name = key === 'username' ? '用户名' : '手机号'
        let data = key === 'username'
                  ? {'username': this.username}
                  : {'phone': this.phone}

        this.$http
          .post('user/exists', data)
          .then(response => {
            if (response.exists) {
              validator.showError(this.$refs[`${key}Input`], `${name}已存在`)
            }
          })
      }
    }
  }
</script>

<style scoped>
  .thumbnail { width: 170px; margin-top: 10px; cursor: pointer;}
  .thumbnail .captcha { height: 46px; background: #E1E6E8;}
</style>
