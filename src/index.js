import * as biliComponents from './components'

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
