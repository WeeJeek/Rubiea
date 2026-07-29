# GEM-005-HERO-002 — 首屏拼贴红宝石参考图纠偏

## Scope

- 将 Hero Moments 右下资产改为参考图中的深莓红纵向椭圆刻面宝石。
- 灰色圆形背景上移并放大；宝石在纸张右边被裁切，只露左侧部分。
- 保持街景、文字、卡片角度、后续页面和预览期无交易边界不变。

## Acceptance

- 自动化测试先以旧资产与旧几何值失败，再由最小实现变绿。
- 1440 × 900 聚焦对照中，灰圆起始高度和宝石裁切关系匹配绑定截图，无 P0/P1/P2 偏差。
- 390 × 844 无横向溢出、内容重叠或图片加载失败。
- `npm run build`、`npm test`、`npm run test:sites` 与无交易扫描通过。

## Source

`/var/folders/c6/bk68f2cj2cqbbj8pjhg899lw0000gn/T/codex-clipboard-8f067538-5753-4759-8eba-34e788ae4a88.png`

## Status

Approved by the user on 2026-07-29; included with the implementation in the approved-scope commit.

## Verification

- RED: boundary test rejected the prior ruby asset and desktop geometry.
- GREEN: v6 oval asset plus desktop `right: -10%`, `bottom: -3%`, `width: 58%`; mobile retains the stronger edge crop at `right: -29%`, `bottom: -6%`, `width: 58%`.
- Same-screen desktop comparison and 390 × 844 browser QA show the source-matched partial ruby crop, reduced upper whitespace, no horizontal overflow, and 8/8 loaded images.
- Independent final review: spec PASS; task quality PASS; no blockers; no-commerce boundary preserved.
