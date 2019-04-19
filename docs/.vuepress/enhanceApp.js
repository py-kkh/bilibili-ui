import bili from '../../src'
import Vuecode from 'vuecode.js'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'

import 'vuecode.js/dist/vuecode.css'

export default ({ Vue }) => {
  // ...apply enhancements to the app
  Vue.use(bili)
  Vue.use(Vuecode, {
    theme: 'flat'
  })
  Vue.component('Demo', demo)
  Vue.component('Box', Box)
}
