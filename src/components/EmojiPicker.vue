<template>
  <div class="emoji-wrapper">
    <VueEmojiPicker @emoji="append" :search="search">
      <div
        class="emoji-invoker"
        slot="emoji-invoker"
        slot-scope="{ events: { click: clickEvent } }"
        @click.stop="clickEvent"
      >
        <i class="fa fa-smile-o" aria-hidden="true"></i> 表情
      </div>
      <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
        <div class="emoji-caret"></div>
        <div class="emoji-picker">
          <div class="emoji-picker__search">
            <input type="text" v-model="search" v-focus>
          </div>
          <div>
            <div v-for="(emojiGroup, category) in emojis" :key="category">
              <h5>{{ category }}</h5>
              <div class="emojis">
                <span
                  v-for="(emoji, emojiName) in emojiGroup"
                  :key="emojiName"
                  @click="insert(emoji)"
                  :title="emojiName"
                >{{ emoji }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueEmojiPicker>
  </div>
</template>

<script>
  import {EmojiPicker as VueEmojiPicker} from 'vue-emoji-picker'

  export default {
    name: 'EmojiPicker',
    components: {
      VueEmojiPicker
    },
    data () {
      return {
        input: '',
        search: ''
      }
    },
    methods: {
      append (emoji) {
        this.$emit('emoji-selected', emoji)
      }
    },
    directives: {
      focus: {
        inserted (el) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>
  .emoji-wrapper {
    position: relative;
    display: inline-block;
  }

  .emoji-invoker i {
    font-size: 17px;
  }

  .emoji-invoker:hover {
    transform: scale(1.1);
  }

  .emoji-picker {
    position: absolute;
    z-index: 1;
    font-family: Montserrat;
    width: 22rem;
    height: 20rem;
    overflow: scroll;
    padding: 1rem;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 5px 18px 0 rgba(0,0,0,.16);
  }
  .triangle {
    position: absolute;
    top: -.7rem;
    left: 15%;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color:rosybrown  yellow green blueviolet;
  }
  .emoji-picker__search {
    display: flex;
  }
  .emoji-picker__search > input {
    flex: 1;
    border-radius: 10rem;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    outline: none;
    line-height: normal;
    color:black;
  }
  .emoji-picker h5 {
    margin-bottom: 0;
    color: #b1b1b1;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: default;
    text-align: left;
  }
  .emoji-picker .emojis {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.5rem;
  }
  .emoji-picker .emojis:after {
    content: "";
    flex: auto;
  }
  .emoji-picker .emojis span {
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 5px;
  }
  .emoji-picker .emojis span:hover {
    background: #ececec;
    cursor: pointer;
  }
  .emoji-caret {
    position: relative;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #ebebeb;
    left:50%;
    magin-top:0;
  }
</style>
