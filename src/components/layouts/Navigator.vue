<template>
  <div class="col-md-2 main-col" style="width:130px;background-color: rgb(255, 255, 255">
    <!-- 侧边栏标签页 -->
    <ul class="nav nav-pills nav-stacked" style="padding: 9px 0 9px 18px">
      <li class="actives">
        <a href="#">推荐</a>
      </li>
      <li>
        <a href="#">热门</a>
      </li>
      <li>
        <a href="#">关注</a>
      </li>
      <li>
        <a href="#">开源推荐</a>
      </li>
      <li>
        <a href="#">内推招牌</a>
      </li>
      <li>
        <a href="#">上班摸鱼</a>
      </li>
      <li>
        <a href="#">应用案例</a>
      </li>
      <li>
        <a href="#">开发工具</a>
      </li>
      <li>
        <a href="#">New咨询</a>
      </li>
      <li>
        <a href="#">Github</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator"
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
  text-align: center;
  font-size: 0.95rem;
}
.actives > a {
  color: white;
  background-color: #53d690;
}
.actives > a:hover {
  color: white;
  background-color: #53d690;
}
li > a:hover {
  color: #53d690;
}
</style>
