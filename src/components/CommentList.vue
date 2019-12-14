<template>
  <div class="comment-list-box">
    <CommentForm :tid="tid" />
  </div>
</template>

<script>
  import CommentForm from './CommentForm'

  export default {
    name: 'CommentList',
    props: {
      tid: {
        type: String
      }
    },
    components: {CommentForm}
  }
</script>

<style scoped>

</style>
