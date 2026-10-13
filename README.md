# ColorEyes · 个人主页

[访问主页](https://coloreyes.github.io/)

这里是 ColorEyes 的个人空间，用来介绍自己、记录科研工作与履历，并展示项目和日常探索。页面采用柔和的水彩配色，支持深浅主题、英文/日文界面，以及可选的动漫立绘。

## 页面内容

- **个人介绍**：头像、简介和 GitHub 等联系方式。
- **科研与履历**：研究方向、精选论文、教育与工作经历、荣誉和学术服务。
- **项目展示**：精选作品与实验项目，可按分类浏览。
- **Wiki**：个人笔记与本站说明。
- **趣味交互**：终端式项目浏览，以及默认关闭的立绘开关。

目前科研与履历仍待补充；作品区保留了明确标注的模板示例，用于展示版式，并非 ColorEyes 的实际项目。终端仅处理页面内的预设命令，不执行系统命令。立绘为 PNG 图片配合前端动画，未接入 Live2D。

## 更新个人内容

| 内容 | 编辑位置 |
| --- | --- |
| 姓名、简介、联系方式、项目及主题 | [`data/portfolio-data.tsx`](data/portfolio-data.tsx) |
| 研究方向、论文、履历、荣誉、学术服务 | [`data/research-data.ts`](data/research-data.ts) |
| Wiki 文章（Markdown 正文） | [`lib/articles-data.ts`](lib/articles-data.ts) |
| 头像与角色图片 | [`public/images/`](public/images/) |
| 首页各区域的排列 | [`app/page.tsx`](app/page.tsx) |

添加 Wiki 文章时使用唯一的 `id`；构建时会自动生成对应的 `/wiki/<id>/` 页面。尚未确认的个人资料请保留为空。

## 可复用组件

保留上游的 `components/ui/` 通用组件库，包括面包屑、表单、图表、弹窗和导航等，以及相关辅助代码、样式和依赖，方便后续扩展。暂未接入页面的组件可以按需使用，无需为了保留代码而显示在首页。

## 本地开发

使用 Node.js 20 或更高版本。

```sh
npm ci
npm run dev
```

打开终端显示的本地地址。提交前可以运行：

```sh
npm run typecheck
npm run build
```

网站基于 Next.js、React、TypeScript、Tailwind CSS 和 Framer Motion。构建结果为 `out/` 目录中的静态文件，无需后端服务。`node_modules/`、`.next/`、`out/` 等生成目录不纳入版本控制。

## 自动发布

GitHub Pages 使用 **GitHub Actions** 作为发布来源。推送到 `main` 后，[部署工作流](.github/workflows/pages.yml) 自动安装依赖、构建并发布 `out/`，线上地址为 [coloreyes.github.io](https://coloreyes.github.io/)。

## 开源来源与致谢

本主页基于社区开源项目 **[Anime Portfolio](https://github.com/anime-portfolio/app)** 改编，保留了其水彩视觉风格、深浅主题与互动角色。参考版本为 [`acdeee48`](https://github.com/anime-portfolio/app/tree/acdeee48ed819fe80300f743c9495e4f0097f097)。

- **模板代码**：版权署名为 Anime Portfolio，采用 MIT 许可证；完整声明保留于 [`LICENSE-ANIME-PORTFOLIO`](LICENSE-ANIME-PORTFOLIO)。
- **原创角色与插画**：Crystalline-chan、Weltschmerz-chan 由 **[Aesthetic Vulpes（didvc）](https://github.com/didvc)** 创作，采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可证保留于 [`LICENSE-CC-BY-4.0`](LICENSE-CC-BY-4.0)。角色图片、沿用的社交分享图及页脚署名均保留来源。
- **本站改动**：顶部个人介绍、科研与履历区域、默认关闭的立绘开关、移动布局调整和 GitHub Pages 自动发布。

仓库原有的 [`LICENSE`](LICENSE)（GPL-3.0）予以保留；上游代码和插画的许可声明分别列明，不将第三方素材视为本站原创。
