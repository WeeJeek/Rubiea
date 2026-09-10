# EMPYRA 网站品牌迁移记录

日期：2026-09-08

## 已采用素材

- 品牌显示名：`EMPYRA`。
- 品牌含义与叙事：见 [EMPYRA 品牌名意义与叙事](empyra-brand-meaning.md)。
- 网站页头：`1 - brand asset/svg/empyra-logo-horizontal.svg`。
- 页头锁定组合置于 Bone（`#F7F2E9`）实色底板；不得直接叠放在摄影背景上。
- 网页可见的 `Rubiae`、`Rubiae Moments` 已改为 `Empyra`、`Empyra Moments`；现有产品摄影文件名暂不改动，避免无关资产迁移。

## 范围与状态

- 已改：本地 `preview-prototype` 的页头品牌素材及 EN/NL 可见品牌文案。
- 未改：产品事实、石头编号、图像内容、交易功能、公开托管。
- 商标、域名、公司登记及法律清查：未在本次操作中验证；本记录不构成注册或可用性结论。

## 2026-09-08 修订：刊头化与黑色定稿

上一版把页头锁定组合放在 Bone 实色底板上。经实测该决策已被推翻并替换，本节为准。

### 实测依据

- 首页 Hero 左上角标志区域灰度约 225/255（雨窗，画面平整），黑色标志对比度约 11:1，无需底板。
- 石头详情页同一区域灰度约 37/255，改用米白（`#FFFAFA`）标志，同样无需底板。
- 结论：底板只在标志压在"忙碌"影像上时才需要。当前两张主图都不属于该情况，因此全站取消底板，标志一律透明。

### 页头改为纯文字刊头

- 页头只用字标（`empyra-masthead-black.svg` / `-cream.svg`），不含符号、不含 tagline。
- 理由：符号在页头尺寸（约 47–66 px）下弧与宝石收拢成一个暖色小点，既读不出"火焰环抱宝石"的原意，又是全页唯一的暖色。网站是编辑式杂志语言，刊头本就应是字。
- 符号改由页脚、favicon 与印刷品承担，那里尺寸足够。
- 副产物：移动端不再需要单独的无 tagline 紧凑锁定文件，字标可直接等比缩放。

### 颜色

- 全站标志与文字为黑（`#0E0C0D`）。原先的 `#251F24` 让 Cormorant Light 的细笔画在暖白纸上发灰。
- 页脚堆叠锁定组合采用两级黑（B2）：冠部 `#4E474D`，亭部 `#0E0C0D`，弧与字标 `#0E0C0D`。整体纯黑白，但宝石仍读得出切面。
- 原 Ember `#C4442C`、Gold Ink `#8F6A22`、Gold Leaf `#C79A4B` 不出现在网站上。界面内零彩色；全站唯一的红是摄影里那颗真宝石——这正是视觉规范"红色只属于宝石"的字面执行。
- 例外：favicon 需要 Bone（`#F7F2E9`）底板。透明黑标在深色浏览器标签栏上会消失。

### 字体层级

页头字标 0.18 em → 导航大写 0.16 em → 标题 Georgia −0.045 em，形成由松到紧的梯子。导航与 `.eyebrow`、页脚导航、移动端菜单按钮统一为大写 + 0.16 em（`.eyebrow` 保持 0.18 em）。字标继续使用 Cormorant Garamond Light 转曲，不加载 webfont。

### 新增资产

`1 - brand asset/svg/` 下新增，均由原始矢量改色与重排间距得到，几何未改动：

- `empyra-masthead-black.svg`、`empyra-masthead-cream.svg`
- `empyra-logo-stacked-black.svg`
- `empyra-symbol-black.svg`、`empyra-symbol-compact-black.svg`、`empyra-symbol-micro-black.svg`
- `empyra-favicon.svg`、`empyra-app-icon.svg`（含 Bone 底板）

### 已改代码

`preview-prototype`：`App.jsx`（双色字标 + CSS 切换）、`styles.css`（取消底板、导航字体、页脚 colophon）、`HomePage.jsx`（页脚 colophon）、`index.html`（图标声明）、`tests/homepage.test.mjs`（断言随之更新，16 项全部通过）。

页脚法定信息中的 KvK、BTW、邮箱仍为占位符，上线前必须替换为真实号码。
