# The Food Lab · 中文章节精读

把 J. Kenji López-Alt《The Food Lab: Better Home Cooking Through Science》的
9 个正文章节，加上导读 / 厨房工具 / 基本储藏室，整理成一套可离线阅读的中文网页。

## 页面

- `index.html`：10 页总目录（第 00 章 + 第 1–9 章）
- `ch0.html`：导读、厨房工具、基本储藏室
- `ch1.html` – `ch9.html`：正文各章
- 每章左侧有本章目录；底部有上一章 / 下一章
- 每章末尾有「附录 A：速查表与术语」
- 图片可点击放大；配方默认折叠

## 本地打开

直接双击 `index.html`，或：

```text
foodlab-site/index.html
```

不需要安装任何依赖，也不需要联网。

## 用 Git 上传

本文件夹已经初始化 Git 并暂存了所有文件，只差提交和远端地址：

```powershell
cd foodlab-site
git config user.name "你的名字"
git config user.email "你的邮箱"
git commit -m "Initial commit: The Food Lab Chinese chapters"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

也可以直接用 GitHub Desktop：Add local repository → 选择 `foodlab-site` → Commit → Publish repository。

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库（建议 Private，原因见下方版权说明）。
2. 把本文件夹内的**所有内容**上传到仓库根目录。
3. 仓库 Settings → Pages → Build and deployment：
   - Source: `Deploy from a branch`
   - Branch: `main`，目录 `/ (root)`
4. 保存后等待 1–2 分钟，GitHub 会给出访问地址。

`.nojekyll` 已包含，避免 GitHub Pages 的 Jekyll 处理干扰静态文件。

## 目录

```text
index.html              总目录
ch0.html – ch9.html     各章页面
assets/site.css         全站样式
assets/chapters.css     首页 / 章节切换样式
assets/site.js          图片、灯箱、导航、交互
assets/figs-chN.js      第 0、2–9 章图片索引
assets/ch0web … ch9web  各章 WebP 图片
```

## 单位

全站公制与摄氏度：温度 °C，重量克 / 千克，液体毫升 / 升，长度厘米 / 毫米。
不使用 °F、杯、汤匙、茶匙、盎司、磅、夸脱、英寸、英尺。

## 规模

- 约 2,260 页原书内容
- 273 道配方
- 1,024 张原书图片归档
- 正文约 426 张关键步骤图

## 版权说明

原书文字、配方与图片版权归 J. Kenji López-Alt 及出版方所有。
本项目仅用于个人学习与烹饪参考，请勿商用或公开传播原书图片。
如果要在 GitHub 公开部署，请先自行确认授权范围；更稳妥的方式是使用 Private 仓库。
