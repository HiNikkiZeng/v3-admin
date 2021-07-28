## ⚡️ 简介

> 一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element-Plus 和 Vue-Cli 4.5

## 📚 文档

| 位置 | 链接 |
| --- | --- |
| 掘金 | [链接](https://juejin.cn/post/6963876125428678693) |
| 知乎 | [链接](https://zhuanlan.zhihu.com/p/374080676) |

## 预览

| 位置 | 账号 | 链接 | 注意 |
| --- | --- | --- | --- |
| github-pages | admin或editor | [链接](https://v3-projects.github.io/v3-admin) | 进入系统可能需要梯子，进入后请关闭梯子再登录 |

## ⌛ 功能

```text
- 用户管理
  - 登录
  - 注销
	
- 权限验证
  - 页面权限
  - 指令权限

- 多环境
  - dev
  - stage
  - prod
  
- 全局功能
  - svg
  - 国际化多语言
  - 换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Screenfull 全屏
  - 自适应收缩侧边栏

- 错误页面
  - 401
  - 404

- Dashboard
  - admin
  - editor

- 自动部署
```

## 目录结构

```
# v3-admin
├─ .env.dev           # 开发环境
├─ .env.prod          # 生产环境
├─ .env.stage         # 预发布环境
├─ .eslintrc.js       # eslint
├─ public             # 静态资源
│  ├─ favicon.ico     # favicon 图标
│  ├─ index.html      # html模板
├─ src                # 源码
│  ├─ @types          # ts 声明
│  ├─ api-inject      # 接口（全局注入的方式）
│  ├─ api-import      # 接口（import/export 的方式）
│  ├─ assets          # 主题、字体、svg等静态资源
│  ├─ components      # 全局公用组件
│  ├─ config          # 全局配置
│  ├─ constant        # 常量/枚举
│  ├─ directives      # 全局指令
│  ├─ layout          # 全局 layout
│  ├─ locales         # 国际化
│  ├─ model           # 全局 model
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局 store 管理
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有页面
├─ deploy             # 自动部署
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置
```

## 🚀 开发

```bash
# 安装依赖
yarn install

# 启动服务
yarn dev
```

## 📦️ 多环境打包

```bash
# 构建预发布环境
yarn build:stage

# 构建生产环境
yarn build:prod
```

## 🔧 代码格式检查

```bash
yarn lint
```

## ✈️ 自动部署

```bash
yarn deploy
```

## Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

## 站在巨人的肩膀上

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [vue3-composition-admin](https://github.com/rcyj-FED/vue3-composition-admin)
- [d2-admin](https://github.com/d2-projects/d2-admin)
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin)

## 交流（吹水）群

无人问津的交流（吹水）群：1014374415

![v3-admin.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19291ab4cbb24c8c9e743f1701609cb6~tplv-k3u1fbpfcp-watermark.image)

## 📄 License

[MIT](https://github.com/v3-projects/v3-admin/blob/master/LICENSE)

Copyright (c) 2021 V3 Projects
