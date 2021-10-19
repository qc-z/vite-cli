import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import router from './router/index.js'
import store from './store'
import 'element-plus/dist/index.css'
import elemetPlusPlugins from './utils/element-plus-plugins.js'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus, { locale: zhCn })

elemetPlusPlugins(app).mount('#app')
