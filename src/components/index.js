import Vue from 'vue'
import Message from './Message'
import Slider from './Slider'
import Kernel from './Kernel'
import Details from './Details'

const components = {
    Message,
    Slider,
    Kernel,
    Details
}

for (const [key, value] of Object.entries(components)) {
    Vue.component(key, value)
}