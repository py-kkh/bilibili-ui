import * as biliComponents from './components'

import './styles/fonts/iconfont.css'
import './styles/bili.styl'

const install = Vue => {
  Object.values(biliComponents).forEach(biliComponent => {
    Vue.use(biliComponent)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
