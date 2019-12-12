<template>
  <div class="related-pin-block pin-block">
    <ul class="pin-list">
      <li class="item"><a href="#" target="_blank" rel="" title="" class="pin">
        <div class="content-box">
          <div class="content">【动弹福利】 01期：小灰灰想谈恋爱！😋
          </div>
          <div class="stat item" style="margin-top: 0.83rem;">
            <span> 142 赞 · </span>
            <span>13 评论</span>
          </div>
        </div>
      </a>
      </li>
      <li class="item"><a href="#" target="_blank" rel="" title="" class="pin">
        <div class="content-box">
          <div class="content">【动弹福利】 02期：小灰灰想谈恋爱！逮虾户😋
          </div>
          <div class="stat item" style="margin-top: 0.83rem;">
            <span> 152 赞 · </span>
            <span>63 评论</span>
          </div>
        </div>
        <div class="image-box"></div>
      </a>
      </li>
      <li class="item"><a href="#" target="_blank" rel="" title="" class="pin">
        <div class="content-box">
          <div class="content">【动弹福利】 03期：小灰灰想谈恋爱！😋
          </div>
          <div class="stat item" style="margin-top: 0.83rem;">
            <span> 145 赞 · </span>
            <span>3 评论</span>
          </div>
        </div>
        <div class="image-box"></div>
      </a>
      </li>
      <li class="item"><a href="#" target="_blank" rel="" title="" class="pin">
        <div class="content-box">
          <div class="content">【动弹福利】 04期：小灰灰想谈恋爱！😋
          </div>
          <div class="stat item" style="margin-top: 0.83rem;">
            <span> 125 赞 · </span>
            <span>3000 评论</span>
          </div>
        </div>
        <div class="image-box"></div>
      </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hotTweets'
  }
</script>

<style scoped>
  li {
    list-style: none;
  }

  li.item:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
  }

  li.item {
    padding: 12px 0;
  }

  .pin {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }

  .content-box {
    display: flex;
    align-content: space-between;
    flex-direction: column;
  }

  .content {
    color: #2e3135;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    max-height: 3.5rem;
    max-width: 22rem;
    max-height: 3em;
  }

  .stat {
    color: #76797e;
    font-size: 1.02rem;
    margin-top: auto;
    /*margin-top: 0.83rem;*/
  }

  .image-box {
    min-width: 5.67rem;
    height: 5.67rem;
    margin-left: 1rem;
    border-radius: 4px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://avatars1.githubusercontent.com/u/18332628?s=460&v=4");
  }

  .pin-block {
    margin-top: -0.9rem;
  }

</style>
