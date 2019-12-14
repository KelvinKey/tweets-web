<template>
  <div :class="{hide:!visible}">
    <Upload
      list-type="picture-card"
      accept=".jpeg,.png,.gif,.JPG,.JPEG,.GIF"
      :class="{hide:!canUpload}"
      :limit="limitCount"
      :file-list="images"
      :headers="headers"
      :action="uploadUrl"
      :on-preview="handlePictureCardPreview"
      :before-upload="handleBeforeUpload"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-change="handleChange">
      <i class="el-icon-plus" ref="uploadBtn"></i>
    </Upload>
    <Dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </Dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {Upload, Dialog} from 'element-ui'
  import 'element-ui/lib/upload'
  import 'element-ui/lib/dialog'

  export default {
    name: 'UploadImage',
    data () {
      return {
        visible: false,
        canUpload: true,
        images: [],
        limitCount: 7,
        uploadUrl: `${process.env.API_URL}files/upload`,
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    components: {
      Upload,
      Dialog
    },
    computed: {
      ...mapGetters(['authToken']),
      headers () {
        return {
          Authorization: `Bearer ${this.authToken}`
        }
      }
    },
    mounted () {
      this.$on('clear', () => (this.images = []))
        .$on('hide', () => (this.visible = false))
        .$on('submit', () => (this.$refs.uploadBtn.click()))
    },
    methods: {
      handleBeforeUpload () {
        this.visible = true
      },
      handleRemove (file, fileList) {
        this.$emit('images-updated', fileList)
      },
      handleSuccess (response, file, fileList) {
        this.$emit('images-updated', fileList)
      },
      handleError (err) {
        console.log(err)
      },
      handleChange (file, fileList) {
        this.visible = true
        this.canUpload = !(fileList.length >= this.limitCount)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped>
  .hide {
    display: none;
  }
</style>
