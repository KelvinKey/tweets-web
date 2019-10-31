import Vue from 'vue'
import Message from './Message'
import Slider from './Slider'
import Kernel from './Kernel'

const components = {
  Message,
  Slider,
  Kernel
}

for (const [key, value] of Object.entries(components)) {
  Vue.component(key, value)
}
