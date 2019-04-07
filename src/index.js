import Button from './components/button'

const components = {
  Button
}

const bili = {
  ...components,
  bButton: Button
}

const install = Vue => {
  Object.keys(bili).forEach(key => {
    Vue.component(key, bili[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
// module.exports.default = module.exports = API
