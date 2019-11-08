<template>
  <div class="col-md-3 side-bar">
    <!--right start-->
    <div style="display:none;">
      <!-- 个人 -->
      <div class="sidebar-box shadow">
        <div class="profile">
          <a href="#">
            <div
              class="avatar"
              style="background-image: url('https://mirror-gold-cdn.xitu.io/168e08b12c72885c3b8?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1')"
            ></div>
          </a>
          <div class="user-info">
            <a href="#" class="username">她和她的猫</a>
            <div class="position">死亡如风，常伴吾身</div>
          </div>
        </div>
        <ul class="stat-list">
          <a href="#" target="_blank" rel class="item">
            <div class="title">动弹</div>
            <div class="count">1</div>
          </a>
          <a href="#" target="_blank" rel class="item">
            <div class="title">关注</div>
            <div class="count">20</div>
          </a>
          <a href="#" target="_blank" rel class="item">
            <div class="title">关注者</div>
            <div class="count">0</div>
          </a>
        </ul>
      </div>

      <!-- <div class="sidebar-box shadow"> -->
      <!-- <header>热门动弹</header> -->
      <!-- 动弹 -->
      <div class="widget widget-jobs">
        <div class="sd-title">
          <h3>热门动弹</h3>
          <i class="la la-ellipsis-v"></i>
        </div>
        <div class="jobs-list">
          <div class="job-info">
            <div class="job-details">
              <h3>Bye Windows</h3>
              <p>Bye Windows, Hello Deepin! 体验了一周Deepin，还是发个沸点..</p>
            </div>
            <!-- <div class="hr-rate">
            <span>600 评论</span>
            </div>-->
          </div>
          <!--job-info end-->
          <div class="job-info">
            <div class="job-details">
              <h3>双十一</h3>
              <p>临近双十一，打算在京东买个4k 27寸显示器用来黑苹果，看中了..</p>
            </div>
            <!-- <div class="hr-rate">
            <span>300 评论</span>
            </div>-->
          </div>
          <!--job-info end-->
          <div class="job-info">
            <div class="job-details">
              <h3>入职小白</h3>
              <p>想找个师傅带带，刚入职小白，好多需求逻辑都不会写😣，相到什么..</p>
            </div>
            <!-- <div class="hr-rate">
            <span>1520 评论</span>
            </div>-->
          </div>
          <!--job-info end-->
        </div>
        <!--jobs-list end-->
      </div>
      <!--widget-jobs end-->
      <!-- </div> -->

      <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <!-- <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>-->
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../../assets/12.png" alt="First slide" />
          </div>
          <div class="item">
            <img src="../../assets/11.jpg" alt="Second slide" />
          </div>
          <div class="item">
            <img src="../../assets/12.png" alt="Third slide" />
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <!-- <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>-->
      </div>
    </div>
    <!--right end-->

    <!--right_1 start-->
    <div style="background-color: rgb(255, 255, 255);padding: 0.393rem;">
      <div class="title_a">动弹 - tweets.cn</div>
      <div class="title_b">一个帮助开发者成长的社区</div>
      <div class="normalInput">
        <input type="text" class="phone" maxlength="32" placeholder="账户名" autocomplete="off" />
      </div>

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

      <a href="javascript:void(0);" class="fullBtnBlue">注册</a>

      <div class="oauth">
        第三方登录：
        <img
          title="微博"
          alt="微博"
          src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
          class="oauth-btn"
        />
        <img
          title="GitHub"
          alt="GitHub"
          src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
          class="oauth-btn"
        />
        <img
          title="微信"
          alt="微信"
          src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
          class="oauth-btn"
        />
      </div>

      <div class="agreement">
        注册登录即表示
        <br />同意
        <a href="##" target="_blank">用户协议</a>、
        <a href="##" target="_blank">隐私政策</a>
      </div>
    </div>
    <!--right_1 end-->
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.oauth-btn {
  margin-left: 0.5rem;
  height: 1.3rem;
  vertical-align: bottom;
  cursor: pointer;
  float: none;
}
.oauth {
  font-size: 0.867rem;
  /* line-height: 1.9rem; */
  color: #767676;
  margin-left: 0.78rem;
}
.agreement {
  margin-left: 0.78rem;
  margin-top: 1.2rem;
  font-size: 0.167rem;
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
  width: 200px;
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
  width: 100%;
  font-size: 0.167rem;
  background-color: #fbfbfb;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}

.normalInput .password {
  float: left;
  width: 200px;
}

.normalInput .password1 {
  float: left;
  width: 200px;
  display: none;
}

.normalInput .passwordN {
  float: left;
  width: 200px;
  display: block;
}

.normalInput .password1N {
  float: left;
  width: 200px;
  display: none;
}

.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.sidebar-box {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.2rem;
  margin-bottom: 8px;
  font-size: 13px;
}

.profile {
  display: flex;
  padding: 16px;
  max-height: 92px;
  border-bottom: 1px solid rgba(92, 96, 102, 0.1);
}

.avatar {
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eee;
}

.profile .avatar {
  flex: 0 0 auto;
  margin-right: 1rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
}

.user-info {
  position: relative;
  margin: 0.47rem 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.position {
  color: #8f969c;
}

.stat-list {
  flex: 1 1 auto;
  display: flex;
  margin: 0;
  list-style: none;
  text-align: center;
  padding: 16.5px 0;
}

.stat-list .item {
  flex: 1 1 33.333%;
  max-height: 2.833rem;
  line-height: 1;
}

.stat-list .item:not(:last-child) {
  border-right: 1px solid rgba(92, 96, 102, 0.1);
}

.stat-list .item .title {
  font-size: 13px;
  color: #8a9aa9;
  margin-bottom: 0.5rem;
}

.stat-list .item .count {
  font-size: 15px;
  font-weight: 600;
  color: #2e3135;
}

header {
  color: #2e3135;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.07;
  padding: 13px 16px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
</style>
