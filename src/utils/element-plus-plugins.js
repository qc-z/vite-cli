import { ElLoading, ElMessage } from 'element-plus'
/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/antfu/unplugin-vue-components
 * @param app {App}
 */
export default function styleImport(app) {
  const components = [ElLoading, ElMessage]
  components.forEach((v) => {
    app.use(v)
  })
  return app
}
