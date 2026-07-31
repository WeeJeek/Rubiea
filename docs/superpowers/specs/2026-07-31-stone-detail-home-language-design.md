# Stone Detail 首页同源视觉设计

**状态：** 已批准、已本地实现并通过用户视觉确认。
**范围：** `preview-prototype` 的 Stone Detail 路由、首页入口和响应式阅读面；不含真实库存发布、交易或 Shopify 上线。

## 批准视觉基准

[Stone Detail 轻盈编辑参考](../../brand/rubiae-stone-detail-light-editorial-approved-reference.png) 是桌面页面的构图和层级基准。它沿用首页的雨窗冷灰摄影与纸白编辑面，而不是新增一套灰雾式视觉。

- 左侧约 65%：同一实物的真实生活化首图；可出现一处局部成年手、镊子、放大镜、书或织物，表达观察与尺度。
- 右侧约 35%：干净纸白事实栏，固定显示 `This stone / Deze steen` 与 `What is known / Wat bekend is` 两组；未知值明确为 `Unknown / Onbekend`。
- 冷灰只来自摄影内的雨窗、炭灰桌面与织物。纸白区域不加灰雾、整体蒙版或渐变；区块关联由留白、细线和首页一致的排版完成。
- 首图后使用纸白连续证据区：`Evidence / Bewijs` 短说明、中性光整体、微距／侧面、紧凑 `Further evidence / Meer bewijs`。
- 毫米参照、报告预览与可选真实视频只在 `Further evidence` 展开后显示。末尾只有一次 `Ask about this stone / Vraag naar deze steen` 文字入口。

## 真实性与新品图组

每件新品在页面发布前绑定同一商品编号的完整图组：生活化首图、中性光整体、微距／侧面、毫米参照、报告预览和可选真实短视频。AI 可参与页面氛围或版式辅助，但不得进入商品相册、报告区或被理解为商品事实证据；所有事实、文字和控件保留为 HTML。

## 实施与验收边界

- 首页 `Explore the stones` 进入 Stones；每颗 `View details` 进入本页；导航 `Stories` 进入一体式 Stories/Moment 页面。
- 详情页不显示价格、购物车、结账或购买暗示；预览状态和唯一询问入口清楚可见。
- 桌面、手机、键盘焦点、减少动效、`Further evidence` 展开和双语均须验收。
- 参考图不包含真实宝石事实；实现必须以合理的示意数据标记预览，正式发布再替换为核验资料。
