import { createApp } from 'vue'
import App from './components/App.vue'
import profile from './config/profile.json'

// 动态设置页面 meta 标签和 title
document.title = `${profile.name} 的个人主页`

const descriptionMeta = document.querySelector('meta[name="description"]')
const opDescriptionMeta = document.querySelector('meta[name="op:description"]')

if (descriptionMeta) {
  descriptionMeta.setAttribute('content', `这里是 ${profile.name} 的主页！`)
}

if (opDescriptionMeta) {
  opDescriptionMeta.setAttribute('content', `${profile.name} 的个人主页！`)
}

createApp(App).mount('#app')
