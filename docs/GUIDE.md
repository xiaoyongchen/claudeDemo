# 团检报告系统 - 从零到部署完整指南

> 本文档面向新手，手把手教你如何使用 AI 辅助开发，从 Figma 设计稿到自动化部署的完整流程。

## 目录

1. [项目简介](#1-项目简介)
2. [环境准备](#2-环境准备)
3. [如何运行项目](#3-如何运行项目)
4. [Skills 技能包使用](#4-skills-技能包使用)
5. [Figma MCP 设计稿转代码](#5-figma-mcp-设计稿转代码)
6. [Git CLI 代码管理](#6-git-cli-代码管理)
7. [GitHub CLI 使用](#7-github-cli-使用)
8. [Vercel 部署](#8-vercel-部署)
9. [CI/CD 自动化部署](#9-cicd-自动化部署)
10. [常见问题](#10-常见问题)

---

## 1. 项目简介

这是一个基于 Vue3 的团检报告管理系统，使用以下技术栈：

| 技术 | 说明 |
|------|------|
| Vue 3 | 前端框架 |
| TypeScript | 类型安全 |
| Pinia | 状态管理 |
| Axios | HTTP 请求 |
| Vite | 构建工具 |
| Vercel | 部署平台 |

---

## 2. 环境准备

### 2.1 必需软件

在开始之前，请确保你的电脑已安装以下软件：

#### Node.js (v18+)

```bash
# 检查是否已安装
node --version

# 如果未安装，Mac 用户可以用 Homebrew 安装
brew install node

# Windows 用户请访问 https://nodejs.org 下载安装
```

#### Git

```bash
# 检查是否已安装
git --version

# Mac 安装
brew install git

# Windows 请访问 https://git-scm.com 下载安装
```

#### GitHub CLI (gh)

```bash
# Mac 安装
brew install gh

# Windows
winget install GitHub.cli
```

#### Vercel CLI

```bash
# Mac 安装
brew install vercel-cli

# 或者使用 npm 全局安装（所有平台通用）
npm install -g vercel
```

### 2.2 账号准备

你需要注册以下账号：

1. **GitHub** - https://github.com （代码托管）
2. **Vercel** - https://vercel.com （部署平台，可用 GitHub 账号登录）

---

## 3. 如何运行项目

### 3.1 克隆项目

```bash
# 克隆代码到本地
git clone https://github.com/xiaoyongchen/claudeDemo.git

# 进入项目目录
cd claudeDemo
```

### 3.2 安装依赖

```bash
# 安装项目依赖
npm install
```

> 💡 **什么是依赖？**
> 依赖就是项目运行所需要的第三方代码包。`npm install` 会读取 `package.json` 文件，自动下载所有需要的包到 `node_modules` 文件夹。

### 3.3 启动开发服务器

```bash
# 启动项目
npm run dev
```

看到以下输出表示启动成功：

```
VITE v7.3.1  ready in 156 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

打开浏览器访问 `http://localhost:5173/` 即可看到项目。

### 3.4 构建生产版本

```bash
# 构建用于生产环境的代码
npm run build
```

构建完成后，生成的文件在 `dist` 目录中。

---

## 4. Skills 技能包使用

### 4.1 什么是 Skills？

Skills 是 AI 编程助手的"技能包"，可以让 AI 更好地理解特定技术栈的最佳实践。

### 4.2 安装 Vue Best Practices Skill

```bash
# 安装 vue-best-practices 技能包
npx skills add https://github.com/hyf0/vue-skills --skill vue-best-practices -y
```

参数说明：
- `npx skills add` - 添加技能包的命令
- `https://github.com/hyf0/vue-skills` - 技能包的 GitHub 地址
- `--skill vue-best-practices` - 指定要安装的具体技能
- `-y` - 自动确认，跳过交互式提示

### 4.3 安装后的效果

安装成功后，会在项目中创建 `.agents/skills/vue-best-practices` 目录，包含：

```
.agents/skills/vue-best-practices/
├── skill.md          # 技能说明文件
└── reference/        # 参考文档目录
    ├── ref-value-access.md
    ├── reactive-destructuring.md
    └── ... (更多最佳实践文档)
```

### 4.4 Skill 的作用

当你使用 Claude Code、Cursor 等 AI 编程助手时，它们会自动读取这些技能文件，从而：

1. **遵循 Vue 3 最佳实践** - 使用 Composition API + `<script setup>`
2. **避免常见错误** - 如响应式丢失、ref 未解包等
3. **提供更准确的代码建议** - 基于官方推荐的写法

### 4.5 技能包涵盖的内容

| 类别 | 说明 |
|------|------|
| Reactivity | ref/reactive 使用、响应式原理 |
| Computed | 计算属性最佳实践 |
| Watchers | 侦听器使用技巧 |
| Components | 组件设计模式 |
| Props & Emits | 父子组件通信 |
| Composables | 组合式函数封装 |
| TypeScript | 类型定义最佳实践 |
| Performance | 性能优化技巧 |

---

## 5. Figma MCP 设计稿转代码

### 5.1 什么是 MCP？

MCP (Model Context Protocol) 是一种让 AI 助手能够连接外部工具和数据源的协议。通过 Figma MCP，AI 可以直接读取 Figma 设计稿。

### 5.2 工作流程

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Figma     │────▶│  导出 HTML  │────▶│  AI 分析    │
│   设计稿    │     │  (手动)     │     │  生成代码   │
└─────────────┘     └─────────────┘     └─────────────┘
```

### 5.3 从 Figma 导出设计稿

1. **在 Figma 中选择设计稿**
2. **右键 → Copy/Paste as → Copy as HTML**
3. **保存为 `figma/index.html` 文件**

### 5.4 让 AI 分析设计稿

将导出的 HTML 文件放在项目的 `figma` 目录下，然后告诉 AI：

```
根据 figma/index.html 还原设计稿，创建 Vue3 + Pinia + Axios 项目
```

### 5.5 AI 分析设计稿的过程

AI 会：

1. **读取 HTML 文件** - 分析结构和样式
2. **识别组件** - 拆分为独立的 Vue 组件
3. **提取样式变量** - 颜色、字体、间距等
4. **生成代码** - 创建完整的项目结构

### 5.6 本项目的组件拆分

根据设计稿，AI 将页面拆分为以下组件：

```
src/components/
├── Sidebar.vue      # 左侧边栏（搜索 + 单位列表）
├── Header.vue       # 顶部导航（标签页）
├── PreviewArea.vue  # 中间预览区域
├── FormPanel.vue    # 右侧表单面板
└── Footer.vue       # 底部操作栏
```

---

## 6. Git CLI 代码管理

### 6.1 Git 基础概念

| 概念 | 说明 |
|------|------|
| Repository (仓库) | 存放代码的地方 |
| Commit (提交) | 保存代码的一个版本 |
| Branch (分支) | 代码的平行版本 |
| Remote (远程) | 云端的代码仓库（如 GitHub） |
| Push (推送) | 将本地代码上传到远程 |
| Pull (拉取) | 将远程代码下载到本地 |

### 6.2 初始化 Git 仓库

```bash
# 在项目目录中初始化 Git
git init
```

### 6.3 配置 .gitignore

`.gitignore` 文件告诉 Git 哪些文件不需要跟踪：

```gitignore
# 依赖目录
node_modules

# 构建输出
dist

# 锁文件
package-lock.json
yarn.lock

# 编辑器配置
.vscode/
.idea/

# AI 助手配置
.agent/
.agents/
.claude/
.cursor/
.gemini/

# Vercel
.vercel

# 系统文件
.DS_Store
```

### 6.4 添加文件到暂存区

```bash
# 添加所有文件
git add .

# 或添加指定文件
git add src/App.vue src/main.ts
```

### 6.5 提交代码

```bash
# 提交并添加说明
git commit -m "feat: 初始化项目"
```

> 💡 **提交信息规范**
> - `feat:` 新功能
> - `fix:` 修复 bug
> - `docs:` 文档更新
> - `style:` 代码格式
> - `refactor:` 重构
> - `chore:` 构建/工具变动

### 6.6 添加远程仓库

```bash
# 添加远程仓库地址
git remote add origin https://github.com/你的用户名/仓库名.git
```

### 6.7 推送代码

```bash
# 首次推送，设置上游分支
git push -u origin main

# 之后推送只需要
git push
```

### 6.8 完整的 Git 工作流

```bash
# 1. 查看状态
git status

# 2. 添加更改
git add .

# 3. 提交
git commit -m "feat: 添加新功能"

# 4. 推送
git push
```

---

## 7. GitHub CLI 使用

### 7.1 什么是 GitHub CLI？

GitHub CLI (`gh`) 是 GitHub 官方的命令行工具，可以在终端中完成 GitHub 的各种操作。

### 7.2 安装 GitHub CLI

```bash
# Mac
brew install gh

# Windows
winget install GitHub.cli
```

### 7.3 登录 GitHub

```bash
# 开始登录流程
gh auth login
```

按照提示选择：
1. `GitHub.com`（选择平台）
2. `HTTPS`（选择协议）
3. `Login with a web browser`（选择登录方式）

然后会打开浏览器，完成授权。

### 7.4 验证登录状态

```bash
gh auth status
```

成功输出：

```
github.com
  ✓ Logged in to github.com account 你的用户名 (keyring)
  - Active account: true
  - Git operations protocol: https
```

### 7.5 常用 gh 命令

```bash
# 创建仓库
gh repo create 仓库名 --public

# 查看仓库
gh repo view

# 创建 Issue
gh issue create --title "Bug: xxx" --body "描述"

# 创建 PR
gh pr create --title "feat: xxx" --body "描述"

# 设置 Secret（用于 CI/CD）
gh secret set SECRET_NAME --body "secret_value" --repo 用户名/仓库名
```

---

## 8. Vercel 部署

### 8.1 什么是 Vercel？

Vercel 是一个前端部署平台，特点：
- **免费** - 个人项目完全免费
- **快速** - 全球 CDN 加速
- **自动** - 推送代码自动部署
- **预览** - PR 自动生成预览链接

### 8.2 安装 Vercel CLI

```bash
# Mac
brew install vercel-cli

# 或使用 npm
npm install -g vercel
```

### 8.3 登录 Vercel

```bash
vercel login
```

选择登录方式（推荐使用 GitHub 登录）。

### 8.4 验证登录

```bash
vercel whoami
```

### 8.5 链接项目

```bash
# 在项目目录中执行
vercel link --yes
```

这会：
1. 在 Vercel 上创建项目
2. 自动连接 GitHub 仓库
3. 生成 `.vercel` 配置目录

### 8.6 部署项目

```bash
# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

### 8.7 Vercel 配置文件

项目根目录的 `vercel.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

| 配置项 | 说明 |
|--------|------|
| buildCommand | 构建命令 |
| outputDirectory | 构建输出目录 |
| framework | 使用的框架 |
| installCommand | 安装依赖命令 |

### 8.8 获取项目信息

部署后，可以在 `.vercel/project.json` 中找到：

```json
{
  "projectId": "prj_xxx",      // 项目 ID
  "orgId": "team_xxx",         // 组织 ID
  "projectName": "report-app"  // 项目名称
}
```

---

## 9. CI/CD 自动化部署

### 9.1 什么是 CI/CD？

| 术语 | 全称 | 说明 |
|------|------|------|
| CI | Continuous Integration | 持续集成 - 自动构建和测试 |
| CD | Continuous Deployment | 持续部署 - 自动发布上线 |

### 9.2 工作流程图

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  推送    │────▶│  构建    │────▶│  测试    │────▶│  部署    │
│  代码    │     │  Build   │     │  Test    │     │  Deploy  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                                                   │
     │              GitHub Actions 自动执行              │
     └───────────────────────────────────────────────────┘
```

### 9.3 配置 GitHub Secrets

CI/CD 需要一些敏感信息，这些信息存储在 GitHub Secrets 中：

```bash
# 设置 Vercel Token
gh secret set VERCEL_TOKEN --body "你的token" --repo 用户名/仓库名

# 设置 Vercel 组织 ID
gh secret set VERCEL_ORG_ID --body "team_xxx" --repo 用户名/仓库名

# 设置 Vercel 项目 ID
gh secret set VERCEL_PROJECT_ID --body "prj_xxx" --repo 用户名/仓库名
```

> 💡 **如何获取 Vercel Token？**
> 访问 https://vercel.com/account/tokens 创建新 Token

### 9.4 GitHub Actions 配置文件

创建 `.github/workflows/ci-cd.yml`：

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]        # main 分支推送时触发
  pull_request:
    branches: [main]        # PR 到 main 分支时触发

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  # 任务1: 构建和测试
  build-and-test:
    runs-on: ubuntu-latest  # 运行环境

    steps:
      - name: Checkout code           # 检出代码
        uses: actions/checkout@v4

      - name: Setup Node.js           # 安装 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies    # 安装依赖
        run: npm install

      - name: Type check and Build    # 构建
        run: npm run build

  # 任务2: PR 预览部署
  deploy-preview:
    runs-on: ubuntu-latest
    needs: build-and-test             # 依赖 build-and-test 完成
    if: github.event_name == 'pull_request'  # 仅 PR 时执行

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Pull Vercel Environment
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel (Preview)
        id: deploy
        run: |
          url=$(vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }})
          echo "url=$url" >> $GITHUB_OUTPUT

      - name: Comment PR with Preview URL  # 在 PR 中评论预览链接
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🚀 Preview deployed to: ${{ steps.deploy.outputs.url }}'
            })

  # 任务3: 生产环境部署
  deploy-production:
    runs-on: ubuntu-latest
    needs: build-and-test
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'  # 仅 push 到 main 时执行

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Pull Vercel Environment
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel (Production)
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### 9.5 CI/CD 触发条件

| 事件 | 触发的任务 | 部署环境 |
|------|-----------|---------|
| Push 到 main | build-and-test → deploy-production | 生产环境 |
| 创建 PR | build-and-test → deploy-preview | 预览环境 |

### 9.6 查看 CI/CD 运行状态

访问：`https://github.com/你的用户名/仓库名/actions`

可以看到：
- 每次运行的状态（成功/失败）
- 详细的运行日志
- 每个步骤的执行时间

### 9.7 一键部署流程

配置完成后，你只需要：

```bash
# 1. 修改代码
# 2. 提交
git add .
git commit -m "feat: 新功能"

# 3. 推送
git push
```

然后 GitHub Actions 会自动：
1. ✅ 检出代码
2. ✅ 安装依赖
3. ✅ 构建项目
4. ✅ 部署到 Vercel
5. ✅ 更新生产环境

---

## 10. 常见问题

### Q1: npm install 报错怎么办？

```bash
# 清除缓存后重试
rm -rf node_modules
npm cache clean --force
npm install
```

### Q2: git push 失败怎么办？

```bash
# 检查远程仓库配置
git remote -v

# 如果没有配置，添加远程仓库
git remote add origin https://github.com/用户名/仓库名.git

# 如果是网络问题，多试几次或使用代理
```

### Q3: Vercel 部署失败怎么办？

1. 检查 `vercel.json` 配置是否正确
2. 确保本地 `npm run build` 能成功
3. 查看 Vercel 控制台的错误日志

### Q4: GitHub Actions 失败怎么办？

1. 点击失败的 workflow 查看日志
2. 检查 Secrets 是否正确配置
3. 确保 Token 没有过期

### Q5: 如何更新 Skills？

```bash
# 重新安装即可更新
npx skills add https://github.com/hyf0/vue-skills --skill vue-best-practices -y
```

---

## 快速参考卡片

### 日常开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 提交代码
git add . && git commit -m "描述" && git push
```

### 部署命令

```bash
# 手动部署到预览环境
vercel

# 手动部署到生产环境
vercel --prod
```

### 项目地址

- **GitHub**: https://github.com/xiaoyongchen/claudeDemo
- **生产环境**: https://report-app-two.vercel.app

---

> 📝 **文档版本**: 1.0.0
>
> 📅 **更新日期**: 2025-01-30
>
> 👨‍💻 **作者**: Claude AI Assistant
