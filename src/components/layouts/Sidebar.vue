<template>
  <div class="col-md-3 side-bar">
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

    <div class="sidebar-box shadow">
      <header>推荐动弹</header>
    </div>
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <!-- <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol> -->
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
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
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
  margin: 1rem 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.username {
  color: #17181a;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
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
