<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">验证手机号</label>
            <div style="margin: 10px 0;">
              <input v-model="captcha.code" v-validator:input.required="{ regex: /^[a-zA-Z\d]+$/, error: '请输入图片验证码' }" type="text" style="width: 55%;float: left" ref="captchaInput" class="form-control" placeholder="请输入图片验证码">
              <a @click.prevent="loadCaptcha" href="#"><img class="captcha" :src="captcha.content"></a>
            </div>
            <div class="form-inline">
              <input v-model.trim="verificationCode" v-validator:input.required="{ regex: /^\d{4}$/, error: '请先输入验证码' }" ref="verificationInput" type="text" class="form-control" style="width: 55%;" placeholder="请输入短信验证码">
              <button @click="sendVerificationCode" class="btn btn-info" style="margin-left: 8px;">发送短信验证码</button>
            </div>
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" @click="register">
            <i class="fa fa-btn fa-user-plus"></i> 注 册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import validator from '../../directives/validator'
  import { mapActions } from 'vuex'

  export default {
    name: 'Register',
    data () {
      return {
        user: null,
        captcha: {
          key: '',
          code: '',
          content: ''
        },
        verificationKey: '',
        verificationCode: ''
      }
    },
    created () {
      this.user = this.$route.params.user
      this.loadCaptcha()
    },
    beforeRouteEnter (to, from, next) {
      to.params.user = {
        phone: '18598270534',
        username: 'hexianghui15',
        password: '123456'
      }

      to.params.user === undefined && next({'name': 'Register'})
      next()
    },
    methods: {
      ...mapActions(['attemptRegister']),
      loadCaptcha () {
        this.$http
          .post('auth/captcha?_=' + Math.random(), {phone: this.user.phone})
          .then(response => {
            this.captcha = response
            this.captcha.code = ''
          }).catch(() => this.$router.push({'name': 'Register'}))
      },
      sendVerificationCode () {
        if (this.captcha.code.length < 4) {
          return validator.showError(this.$refs['captchaInput'], '请输入图片验证码')
        }

        let data = {
          captcha_key: this.captcha.key,
          captcha_code: this.captcha.code
        }

        this.$http
          .post('auth/verification', data)
          .then(response => {
            this.verificationKey = response.key
            this.$message.success('短信验证码发送成功～')
          })
      },
      register (e) {
        this.$nextTick(() => {
          const target = e.target.type === 'submit' ? e.target : e.target.parentElement

          target.canSubmit && this.submit()
        })
      },
      async submit () {
        let data = {
          'verification_key': this.verificationKey,
          'verification_code': this.verificationCode
        }

        Object.assign(data, this.user)

        await this.attemptRegister(data)

        this.$message.success('注册成功！')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .captcha {
    height: 35px;
    margin-left: 10px;
    background: #E1E6E8;
    vertical-align:middle;
    border: 1px solid gainsboro;
  }
</style>
