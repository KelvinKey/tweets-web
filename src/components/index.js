import Vue from 'vue'
import Message from './Message'
import Slider from './Slider'

const components = {
  Message,
  Slider
}

for (const [key, value] of Object.entries(components)) {
  Vue.component(key, value)
}
