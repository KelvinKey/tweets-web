<template>
  <div class="navbar-right">
    <div class="mdui-container">
      <button
        class="mdui-btn mdui-color-theme-accent mdui-ripple"
        mdui-dialog="{target: '#example-1'}"
      >登录</button>

      <div class="mdui-dialog" id="example-1">
        <div class="mdui-dialog-title" style="font-size: 1.5rem;">登录</div>
        <div class="mdui-dialog-content">
          <div class="normalInput">
            <input type="text" class="phone" maxlength="11" placeholder="手机号码" />
          </div>

          <div class="normalInput">
            <input
              type="password"
              class="passwordN"
              maxlength="16"
              autocomplete="off"
              placeholder="密码（不少于6位）"
            />

            <input
              type="password"
              class="password1N"
              maxlength="16"
              autocomplete="off"
              placeholder="密码（不少于6位）"
            />

            <a id="pwdBtnN" href="##" class="pwdBtnShowN" isshow="false">
              <i class="i_icon"></i>
            </a>
          </div>

          <a href="javascript:void(0);" class="fullBtnBlue">登录</a>

          <div style="font-size: 0.167rem;margin: 0 0.7rem 0;">
            <span>没有账号？</span>
            <a href="#">注册</a>
            <a href="#" style="float: right;">忘记密码</a>
          </div>

          <div class="oauth">
            <div>第三方账号登录：</div>
            <div class="oauth-bg">
              <img
                title="微博"
                alt="微博"
                src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
                class="oauth-btn"
              />
            </div>
            <div class="oauth-bg">
              <img
                title="GitHub"
                alt="GitHub"
                src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
                class="oauth-btn"
              />
            </div>
            <div class="oauth-bg">
              <img
                title="微信"
                alt="微信"
                src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
                class="oauth-btn"
              />
            </div>
          </div>

          <div class="agreement">
            注册登录即表示同意
            <a href="##" target="_blank">用户协议</a>、
            <a href="##" target="_blank">隐私政策</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry"
};
</script>



<style scoped>
.mdui-dialog {
  width: 318px;
  height: 405px;
}

.oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.oauth-btn {
  /* margin-left: 0.5rem; */
  height: 1.787rem;
  vertical-align: bottom;
  cursor: pointer;
  float: none;
}
.oauth {
  font-size: 0.867rem;
  /* line-height: 1.9rem; */
  color: #767676;
  margin-left: 0.78rem;
  padding-top: 0.689rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.agreement {
  margin-left: 0.78rem;
  margin-top: 1.2rem;
  font-size: 0.767rem;
  line-height: 1.5;
  color: #767676;
}
.title_a {
  font-size: 0.967rem;
  color: #2e3135;
  font-weight: 600;
  padding: 1.333rem;
  padding-left: 0.7rem;
}
.title_b {
  font-size: 0.867rem;
  color: #2e3135;
  margin-top: -0.6rem;
  font-weight: 600;
  padding-bottom: 0.56rem;
  padding-left: 0.7rem;
}
.fullBtnBlue {
  display: inline-block;
  height: 33px;
  width: 15.5rem;
  line-height: 33px;
  text-align: center;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  background-color: #53d690;
  color: #fff;
  margin-left: 0.62rem;
}

.normalInput {
  position: relative;
  display: inline-block;
  padding: 0px 10px;
  width: 220px;
  height: 30px;
  /* line-height: 20px;
  font-size: 16px; */
  margin-bottom: 20px;
  /* border: 1px solid #dadada; */
  outline: none;
  color: #474747;
  overflow: visible;
}

.normalInput input {
  padding: 0.7rem 0.6rem;
  width: 15.5rem;
  font-size: 0.167rem;
  background-color: #fbfbfb;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}

.normalInput .password {
  float: left;
}

.normalInput .password1 {
  float: left;
  display: none;
}

.normalInput .passwordN {
  float: left;
  display: block;
}

.normalInput .password1N {
  float: left;
  display: none;
}

</style>
