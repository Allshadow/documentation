import Input from './components/input'
import ButtonModel from './components/buttonModel'
import ButtonStyle from './components/ButtonStyle'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(ButtonModel.name, ButtonModel)
  Vue.component(ButtonStyle.name, ButtonStyle)
}

export default {
  install,
  Input,
  ButtonModel
}
