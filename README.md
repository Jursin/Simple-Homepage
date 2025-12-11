# Simple-Homepage

## 项目介绍

这是一个轻量级的个人主页项目，使用 Vue 3 和 Vite 构建，具有以下特点：

- 响应式设计，适配不同屏幕尺寸
- 明暗主题切换功能
- 模块化配置，易于自定义
- 打字机效果一言
- 现代化的 UI 设计

## 技术栈

- [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 新一代前端构建工具
- [Iconify](https://iconify.design/) - 统一图标框架

## 项目结构

```
src/
├── components/          # Vue组件
│   ├── App.vue          # 根组件
│   ├── Loading.vue      # 加载组件
│   ├── MainCard.vue     # 主卡片组件
│   └── widgets/         # 小部件组件
│       ├── HitokotoCard.vue     # 一言卡片
│       ├── ItemGrid.vue         # 项目网格
│       ├── LinkCard.vue          # 链接卡片
│       └── WakatimeCard.vue     # Wakatime卡片
├── config/              # 配置文件
│   ├── cloudPlatforms.json      # 云开发平台配置
│   ├── devTools.json            # 开发工具配置
│   ├── linkBtn.json             # 链接按钮配置
│   ├── profile.json             # 用户信息配置
│   └── techStack.json           # 技术栈配置
├── styles/              # 样式文件
│   ├── base.css         # 基础样式
│   ├── index.css        # 主样式入口
│   ├── interactive.css  # 交互样式
│   ├── mainCard.css     # 主卡片样式
│   └── variables.css    # CSS变量定义
├── index.html           # HTML入口
└── main.js              # JavaScript入口
```

## 主题切换

项目支持明暗主题切换，点击页面右上角的主题切换按钮即可在浅色和深色主题间切换。

## 许可证
- [MIT](LICENSE)
