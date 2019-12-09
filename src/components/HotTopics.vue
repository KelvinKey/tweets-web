<template>
  <div class="panel panel-default corner-radius panel-hot-topics">
    <div class="panel-heading text-center">
      <h2 class="panel-title">热门话题</h2>
    </div>
    <div class="panel-body">
      <ul>
        <li v-for="topic in topics" :key="topic.tid">
          <a :href="'/topic/' + topic.tid" class="panel-item"> {{ topic.name }}</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'HotTopics',
    mounted () {
      this.loadHotTopics()
    },
    data () {
      return {
        topics: {}
      }
    },
    methods: {
      loadHotTopics () {
        this.$http.get(`/topics`).then(topics => (this.topics = topics))
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
    color: #409eff;
    font-size: 14px;
    line-height: 14px;
    padding: 4px 10px 4px 10px;
    margin: 5px 9px 5px -2px;
    border-radius: 16px;
    display: inline-block;
    border: 1px solid #e5e5e5;
  }

  .panel-title {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #2e3135;
  }

  .panel-body {
    margin-left: -3rem;
  }
  a:active, a:link, a:visited {
    text-decoration: none;
  }
</style>
