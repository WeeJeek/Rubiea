# Rubiae 公开预览站内容源

## 状态与用途

- **状态：** 2026-07-29 已确认，可用于 Shopify 公开预览站制作。
- **范围：** 英语与荷兰语公开页面、表单、系统状态、SEO 和图片映射。
- **不在本阶段：** 价格、购物车、结账、付款、商业预约及正式交易页面。相关规则继续保存在 `GEM-008`，取得 KVK 与 VAT ID 并满足上线门槛后再启用。
- **使用方法：** 英语为默认语言，荷兰语内容必须同步存在。`{{...}}` 是 Shopify 数据字段或发布前由经营者填写的事实，不得由制作人员猜测。
- **真实性：** 商品事实只取自库存、独立报告和已核验资料。未知项显示 `Unknown / Onbekend`；资料不足的商品只能接受询问。

## 全站内容规则

### 公开预览提示

| 用途 | English | Nederlands |
| --- | --- | --- |
| 顶部公告 | Rubiae is preparing for launch. Purchasing is not yet available. | Rubiae bereidt de lancering voor. Aankopen is nog niet mogelijk. |
| 商品状态 | Preview — not yet available for purchase | Voorvertoning — nog niet te koop |
| 询盘说明 | Your message does not reserve the stone or create an order. | Je bericht reserveert de steen niet en vormt geen bestelling. |

### 导航

| English | Nederlands | 路径建议 |
| --- | --- | --- |
| Stones | Stenen | `/stones` / `/nl/stones` |
| Stories | Verhalen | `/stories` / `/nl/stories` |
| How to Choose | Hoe kies je | `/how-to-choose` / `/nl/how-to-choose` |
| About | Over Rubiae | `/about` / `/nl/about` |
| For Trade | Voor professionals | `/for-trade` / `/nl/for-trade` |
| Contact | Contact | `/contact` / `/nl/contact` |
| EN / NL | EN / NL | 语言切换，不改变当前页面语义 |

### 固定 CTA

| English | Nederlands |
| --- | --- |
| Explore the stones | Bekijk de stenen |
| Register interest | Interesse registreren |
| Ask about this stone | Vraag naar deze steen |
| Read her moment | Lees haar moment |
| Discover Rubiae Moments | Ontdek Rubiae Moments |
| How to choose | Hoe kies je |
| How we describe stones | Hoe we stenen beschrijven |
| Contact Rubiae | Neem contact op met Rubiae |
| Send message | Verstuur bericht |

## 首页 Home

首页模块顺序与 [全页批准设计参考](../brand/rubiae-homepage-still-life-concept-v5.png) 一致。

### 1. 首屏

**English**

- Eyebrow: `Natural gemstones`
- Heading: `Choose a stone for the life you are shaping.`
- Body: `Natural gemstones, honestly described and chosen on your terms.`
- Primary CTA: `Explore the stones`
- Product fact cue: `What is known, clearly stated.`
- Story card eyebrow: `RUBIAE MOMENTS`
- Story card heading: `Her story, in her own words.`
- Story card CTA: `Read her moment`

**Nederlands**

- Eyebrow: `Natuurlijke edelstenen`
- Heading: `Kies een steen voor het leven dat je vormgeeft.`
- Body: `Natuurlijke edelstenen, eerlijk beschreven en gekozen op jouw voorwaarden.`
- Primary CTA: `Bekijk de stenen`
- Product fact cue: `Wat bekend is, helder vermeld.`
- Story card eyebrow: `RUBIAE MOMENTS`
- Story card heading: `Haar verhaal, in haar eigen woorden.`
- Story card CTA: `Lees haar moment`

### 2. Langzaam kijken

**English**

- Display line: `A stone, seen slowly.`
- Supporting heading: `Begin with the stone.`
- Body: `Colour, natural character, and what is known — clearly described.`
- CTA: `Explore the stones`

**Nederlands**

- Display line: `Een steen, rustig bekeken.`
- Supporting heading: `Begin bij de steen.`
- Body: `Kleur, natuurlijk karakter en wat bekend is — helder beschreven.`
- CTA: `Bekijk de stenen`

### 3. Vrij kiezen

**English**

- Display lines: `Look slowly.` / `Ask clearly.` / `Choose freely.`
- CTA: `How to choose`

**Nederlands**

- Display lines: `Kijk rustig.` / `Vraag door.` / `Kies vrij.`
- CTA: `Hoe kies je`

### 4. Rubiae Moments

**English**

- Heading: `A moment can begin with a stone.`
- Body: `Rubiae Moments is a space for stories shared in her own words.`
- CTA: `Discover Rubiae Moments`

**Nederlands**

- Heading: `Een moment kan beginnen met een steen.`
- Body: `Rubiae Moments biedt ruimte aan verhalen, verteld in haar eigen woorden.`
- CTA: `Ontdek Rubiae Moments`

### 5. Feiten

**English**

- Heading: `For those who need the facts.`
- CTA 1: `How we describe stones`
- CTA 2: `For Trade`

**Nederlands**

- Heading: `Voor wie de feiten nodig heeft.`
- CTA 1: `Hoe we stenen beschrijven`
- CTA 2: `Voor professionals`

### 6. Afsluiting

**English**

- Heading: `Choose on your terms.`
- CTA: `Explore the stones`

**Nederlands**

- Heading: `Kies op jouw voorwaarden.`
- CTA: `Bekijk de stenen`

## Stones 商品列表

### 页面开场

**English**

- Eyebrow: `STONES`
- Heading: `Stones, considered one at a time.`
- Intro: `Each stone is shown with the facts currently known. Look slowly, compare what matters to you, and ask before deciding.`
- Preview note: `The collection is shown for preview. Prices and purchasing will be added only when Rubiae is ready to trade.`

**Nederlands**

- Eyebrow: `STENEN`
- Heading: `Stenen, één voor één bekeken.`
- Intro: `Elke steen wordt getoond met de feiten die nu bekend zijn. Kijk rustig, vergelijk wat voor jou telt en stel vragen voordat je beslist.`
- Preview note: `De collectie is nu een voorvertoning. Prijzen en aankoopmogelijkheden volgen pas wanneer Rubiae klaar is om te verkopen.`

### 列表分区

当前宝石先显示，标题为 `Stones to discover / Stenen om te ontdekken`。售罄宝石随后作为事实档案显示，标题为 `Chosen stones / Gekozen stenen`。任一区域没有商品时不显示该区域及标题。

获得名称公开授权的售罄宝石以顾客赋名作为卡片标题，并显示 `Named by its owner / Genoemd door de eigenaar`、石种、商品编号和 `Sold / Verkocht`。未公开命名的售罄宝石仍以石种和商品编号作为事实身份，不虚构名称。

首批 3–5 颗当前宝石在同一页面连续展示。页面开场保持紧凑，第一颗宝石进入首屏。每颗先用横跨本组的归属行显示石种、编号和重量，再以生活化首图、紧凑事实和可选短视频组成完整画面；不使用装饰编号、漂浮白色事实卡或机械重复的左右翻转。桌面端在“大幅生活场景加窄事实栏”“同颗微距与短视频摄影组”“宽幅生活静物加底部图注”之间形成节奏；手机端按照片、事实资料顺序逐颗纵向排列。该页面不是普通商品卡网格，也不要求顾客逐页打开才能发现下一颗宝石。

列表顶部不重复展示包含全部商品的缩略目录，也不提供横向滑动商品条。标题附近只显示当前分类与筛选后的结果数量，随后提供 `Weight`、`Treatment` 与 `Clear filters`。未来独立增加饰品目录时，以分类入口切换宝石和饰品；只有实际存在对应商品时才显示该分类。

下方故事版块共享连续的冷灰环境，不使用整屏底色交替、独立卡片背景或强制滚动吸附来切开产品。每颗宝石的照片、短视频与事实必须紧邻、对齐并作为同一阅读组出现；事实不得跨到下一颗、遮挡下一颗或与下一颗画面形成错误归属。跨产品的柔和过渡只使用背景光线、桌面材质、摄影负空间和色调延续。桌面端每次应能看见当前宝石及下一颗的明确线索；手机端保留一行一颗，但优先展示照片和用于初步判断的核心事实，使顾客无需记住上一颗的版式位置。

网站主视觉、栏目首图和商品列表首图必须有生活情境。饰品可自然佩戴或别在衣领、外套与织物上；裸石可由手、镊子、放大镜、衣料、笔记本或桌面物件建立观看动作和真实比例。生活化首图负责吸引与叙事，不能替代同一商品相册中的中性光整体、毫米参照、多角度、微距和短视频证据。

每颗宝石可在自己的摄影区域内显示对应实物短视频入口 `Play video / Video afspelen`。视频必须使用该宝石的真实影像与真实静态封面，由顾客主动播放，默认不自动播放；视频、封面、标题、事实区和商品编号必须保持在同一阅读组内，不能成为跨产品背景或独立漂浮内容。

当筛选结果超过 6 件时，首批显示 6 件；列表底部显示 `Showing 6 of 24 / 6 van 24 weergegeven` 一类的当前数量与总数，并提供 `View more / Meer bekijken`。每次点击再显示 6 件，不自动无限载入，也不要求横向滑动。

### 商品卡字段

| 数据字段 | English label | Nederlands label |
| --- | --- | --- |
| `stone_id` | Stone | Steen |
| `gemstone_name` | Gemstone | Edelsteen |
| `weight_ct` | Weight | Gewicht |
| `shape` | Shape | Vorm |
| `treatment` | Treatment | Behandeling |
| `report_status` | Report | Rapport |
| 固定状态 | Preview — not yet available for purchase | Voorvertoning — nog niet te koop |

商品卡 CTA：`Ask about this stone / Vraag naar deze steen`。

### 空状态

**English:** `The first stones are being documented. Register for a launch notice or return soon.`

**Nederlands:** `De eerste stenen worden gedocumenteerd. Meld je aan voor een lanceringsbericht of kom binnenkort terug.`

## Stone Detail 商品详情模板

每件商品详情页根据该商品真实颜色、形状、切工、尺寸、生活化首图和证据影像单独完成艺术指导，不把同一视觉构图机械套用到全部库存。独立生成发生在发布前，并经过人工复核；访客打开页面时不实时生成。商品身份、状态、必填事实、证据来源、报告、视频控制、预览提示和联系入口继续使用统一结构与 HTML，以保持可读性、双语、无障碍和事实一致。

### 首屏层级（已确认：混合型）

首屏同时承担情绪入口与可核验判断，不能让访客在生活化首图之后长时间滚动才看到事实。桌面端采用约 65/35 的图文比例：该商品的真实生活化首图为主，紧凑核心事实为辅且无需滚动即可阅读。核心事实固定包括商品编号、重量、形状或切工、处理信息及其证据来源、报告状态和预览状态。不得以大幅图片、装饰性文案或未证实的叙事替代这些事实。

事实栏分为两个清楚的小组，不使用一张无层级的参数墙：`This stone / Deze steen` 展示商品编号、重量、形状和切工；`What is known / Wat bekend is` 展示处理、报告状态与每项信息的证据来源，并把未知信息明确标为 `Unknown / Onbekend`。这两个小组都保持可见，不折叠关键证据。

首屏后的相册采用纵向编辑式证据序列，不使用主图加缩略图的传统图库或整齐图片网格。它依次展示同一实物的中性光整体、微距或侧面组合、毫米参照、报告及短视频；每张图配功能性图注，说明视角、光线或证据类型。生活化首图不替代证据影像。手机端统一收束为“商品身份、生活化首图、核心事实、图库、报告、联系入口”的单列顺序。

预览期唯一的商品行动入口置于证据序列之后，使用安静的 `Ask about this stone / Vraag naar deze steen` 文字区，而非首屏重复 CTA 或侧边常驻按钮。该区须明确说明询问不锁定宝石、不形成订单或优先购买权；不显示价格、购物车、库存、预约成交或付款暗示。

### 售出后与故事的关系

每颗售出宝石继续使用原 Stone URL 作为永久事实档案。只有顾客另行授权发布 Rubiae Moment，并单独授予“故事与宝石关联授权”时，Stone 档案才在事实与报告之后显示一张故事摘要卡，链接到独立 Moment 详情页；完整故事不复制进商品事实区。匿名故事默认不显示宝石编号，也不建立双向链接；获得单独关联授权后才可关联。没有故事授权时不创建故事页，也不显示空故事模块。撤回关联授权只移除链接和具体宝石标识，不删除仍获发布授权的故事或永久宝石档案。

### 开场

**English**

- Eyebrow: `STONE {{stone_id}}`
- Heading: `{{gemstone_name}}`
- Status: `Preview — not yet available for purchase`
- Intro: `A closer look at this individual stone, including what is known, what remains unknown, and the evidence available.`

**Nederlands**

- Eyebrow: `STEEN {{stone_id}}`
- Heading: `{{gemstone_name_nl}}`
- Status: `Voorvertoning — nog niet te koop`
- Intro: `Bekijk deze afzonderlijke steen van dichtbij, met wat bekend is, wat nog onbekend is en welk bewijs beschikbaar is.`

### 必填事实字段

| 数据字段 | English | Nederlands |
| --- | --- | --- |
| `stone_id` | Stone ID | Steennummer |
| `material_type` | Natural or synthetic | Natuurlijk of synthetisch |
| `weight_ct` | Weight | Gewicht |
| `dimensions_mm` | Dimensions | Afmetingen |
| `shape` | Shape | Vorm |
| `cut` | Cut | Slijpvorm |
| `colour_description` | Colour | Kleur |
| `clarity_transparency` | Transparency and clarity | Transparantie en zuiverheid |
| `treatment` | Treatment | Behandeling |
| `origin_opinion` | Geographic origin opinion | Oordeel over geografische herkomst |
| `laboratory` | Laboratory | Laboratorium |
| `report_number` | Report number | Rapportnummer |
| `report_date` | Report date | Rapportdatum |
| `evidence_source` | Source of this information | Bron van deze informatie |

值缺失时显示 `Unknown / Onbekend`，不得省略字段制造“已确认”的错觉。

### 事实说明

**English**

- Heading: `What is known`
- Body: `We separate laboratory conclusions, supplier statements, and information that is still unknown. Ask us if you would like to understand the limits of any statement or report.`
- CTA: `Ask about this stone`

**Nederlands**

- Heading: `Wat bekend is`
- Body: `We maken onderscheid tussen laboratoriumconclusies, verklaringen van leveranciers en informatie die nog onbekend is. Vraag ons gerust naar de beperkingen van een verklaring of rapport.`
- CTA: `Vraag naar deze steen`

### 图库要求

真实商品相册使用同一实物的生活化首图、中性光整体照、毫米参照、正反面、侧面、微距、报告及短视频。生活化首图也必须是真实商品摄影；AI 场景图只可作为内部构图参考，不进入商品相册，也不得绑定真实商品编号或报告。

## Stories / Rubiae Moments

公开内容仍区分 Stories 聚合界面、具有独立 URL 的 Moment 和永久 Stone 档案，但 Stories 与 Moment 在视觉上共用一个直接可读的界面。左侧纵览全部已授权故事，右侧立即显示当前 Moment 的获授权物品／影像与完整故事，不经过独立封面或摘要中间页。Story 与 Stone 只有取得独立的“故事与宝石关联授权”时才互相链接；匿名发布默认不包含该授权。故事内容与商品事实始终分区呈现。

### 左侧故事纵览

左侧窄栏以顾客确认的总结性标题和一句概括纵览所有故事，当前选择清楚高亮；不使用商品卡或缩略图网格。标题与概括可由顾客提供，也可由顾客明确委托 Rubiae 提议。Rubiae 的提议不得冒充顾客原话；顾客必须在发布前确认它们在 Stories 目录中的最终预览。

只要第一篇 Rubiae Moment 已取得完整发布授权并通过发布检查，`Stories` 就由无故事状态切换为公开故事列表；不等待凑满三篇或形成固定发布频率。

**English**

- Eyebrow: `RUBIAE MOMENTS`
- Heading: `Stories, shared on her terms.`
- Intro: `A stone may mark a beginning, a change, a promise, or something that needs no public name. Each story belongs first to the person who lived it.`
- No-story state: `Rubiae Moments is being prepared. No personal story is published without clear permission.`

**Nederlands**

- Eyebrow: `RUBIAE MOMENTS`
- Heading: `Verhalen, gedeeld op haar voorwaarden.`
- Intro: `Een steen kan een begin, een verandering, een belofte of iets zonder openbare naam markeren. Elk verhaal behoort in de eerste plaats toe aan degene die het heeft geleefd.`
- No-story state: `Rubiae Moments wordt voorbereid. Geen persoonlijk verhaal wordt zonder duidelijke toestemming gepubliceerd.`

### 右侧 Moment 展台与全文

- 必须由真实授权内容填入：`{{story_title}}`、`{{story_text}}`、`{{display_name_or_anonymous}}`、`{{approved_images}}`、`{{permission_record}}`。
- `{{approved_images}}` 使用顾客自愿提供并授权的“顾客故事影像”。顾客决定呈现形式：可以是裸石、后来自行镶嵌的首饰、手、物件、地点或抽象画面，也可以完全不提供图片。该影像只用于故事表达，不作为商品证据，也不自动建立与 Stone 档案的链接。
- Rubiae 只可为页面适配进行裁切、缩放、轻微曝光或白平衡校正，以及在必要时隐藏意外出现的个人资料。不增删画面物件，不用 AI 重构或风格化顾客图片；发布前必须让顾客确认最终图片与页面预览。
- Rubiae 可对故事正文进行轻度编辑：修正错字、语法与段落，但不改变顾客的经历、语气或含义，也不把品牌解读写成顾客原话。顾客必须在发布前逐稿确认编辑后全文及它在 Moment 中的最终预览。
- 顾客原始语言的文稿保留为可读取原文。EN／NL 页面默认显示对应站点语言的已审核译文，使用 `Translated from {{original_language}} / Vertaald uit het {{original_language}}` 标明，并提供 `Read the original / Lees het origineel` 入口。不在浏览器中即时自动翻译，也不以译文覆盖或删除原文。
- 只有顾客对“将 Moment 文稿交由 AI 生成翻译初稿”单独给予明确同意时，Rubiae 才可使用该流程。AI 输出只是初稿，必须经目标语言的人工复核后才能进入发布预览；禁止将 AI 译文自动发布。未取得该同意时，使用纯人工翻译流程或暂不提供译文。
- 顾客无法阅读目标语言时，由具备目标语言能力的人工复核者对译文准确性与语气负责。顾客仍确认原文；涉及意义选择、敏感表达或无法直译的地方，Rubiae 必须以顾客能理解的语言说明处理方式并取得确认。
- 每个已发布 Moment 使用独立 URL；只有授权允许公开关联时，才显示对应 Stone 档案链接。完整故事只保存在 Moment 详情页，Stone 档案使用摘要卡链接，不重复全文。
- 右侧沿用全站冷灰、纸白、编辑式衬线标题与克制非对称摄影，以安静展台呈现顾客授权的物品／影像，并在同一区域直接给出完整故事；不复制 Stone 页的 65/35 首屏、商品事实栏或询问 CTA。“展台”只描述页面构图，不暗示 Rubiae 制作或销售顾客图片中的饰品。
- 点击左侧总结性标题后，展台物品／影像、署名与完整故事同步切换，同时更新到该 Moment 的独立 URL，不再出现第二次“阅读全文”点击。切换不自动播放，支持鼠标、键盘与手机触摸；普通模式可使用克制淡换和轻位移，`prefers-reduced-motion` 下直接替换。长故事自然纵向阅读，不人为拆成翻书页。
- 取得故事与宝石关联授权时，在全文结束后显示紧凑 Stone 档案卡，包含真实宝石照片、获授权公开名称或石种、商品编号、`Sold` 和档案链接。未授权时宝石不进入故事展台，也不穿插进正文事实。
- English label: `Shared in her own words.`
- Nederlands label: `Verteld in haar eigen woorden.`
- 不补写经历、不制造引语、不暗示购买是成长的证明。

## How to Choose

### English

- Eyebrow: `HOW TO CHOOSE`
- Heading: `Look slowly. Ask clearly. Choose freely.`
- Intro: `A gemstone can be beautiful before it is perfect, rare, or expensive. Start with what you notice, then ask what can be known.`
- Section 1 heading: `Begin with colour and character`
- Section 1 body: `Notice the colour in different light, the shape, the cut, and the natural features that make the stone individual.`
- Section 2 heading: `Read the description carefully`
- Section 2 body: `Weight, dimensions, treatment, origin opinions, and reports answer different questions. Unknown information should remain visible as unknown.`
- Section 3 heading: `Separate fact from interpretation`
- Section 3 body: `A laboratory conclusion, a supplier statement, and a personal impression do not carry the same certainty. Rubiae labels the source of each claim.`
- Section 4 heading: `Ask before deciding`
- Section 4 body: `Ask about the report, treatment, visible features, photography, or anything that affects your choice. A careful question is part of choosing well.`
- Section 5 heading: `Choose on your terms`
- Section 5 body: `You do not need a dramatic reason. You may choose for colour, curiosity, a private milestone, or simply because the stone feels right to you.`
- CTA: `Explore the stones`

### Nederlands

- Eyebrow: `HOE KIES JE`
- Heading: `Kijk rustig. Vraag door. Kies vrij.`
- Intro: `Een edelsteen kan mooi zijn voordat hij perfect, zeldzaam of kostbaar is. Begin met wat je opvalt en vraag daarna wat er bekend kan zijn.`
- Section 1 heading: `Begin bij kleur en karakter`
- Section 1 body: `Bekijk de kleur in verschillend licht, de vorm, het slijpsel en de natuurlijke kenmerken die de steen eigen maken.`
- Section 2 heading: `Lees de beschrijving aandachtig`
- Section 2 body: `Gewicht, afmetingen, behandeling, herkomstoordelen en rapporten beantwoorden verschillende vragen. Onbekende informatie moet zichtbaar onbekend blijven.`
- Section 3 heading: `Scheid feiten van interpretatie`
- Section 3 body: `Een laboratoriumconclusie, een verklaring van een leverancier en een persoonlijke indruk bieden niet dezelfde zekerheid. Rubiae vermeldt de bron van elke bewering.`
- Section 4 heading: `Vraag voordat je beslist`
- Section 4 body: `Vraag naar het rapport, de behandeling, zichtbare kenmerken, fotografie of alles wat jouw keuze beïnvloedt. Een zorgvuldige vraag hoort bij goed kiezen.`
- Section 5 heading: `Kies op jouw voorwaarden`
- Section 5 body: `Je hebt geen groot verhaal nodig. Je kunt kiezen om de kleur, uit nieuwsgierigheid, voor een persoonlijk moment of eenvoudigweg omdat de steen bij je past.`
- CTA: `Bekijk de stenen`

## About

### English

- Eyebrow: `ABOUT RUBIAE`
- Heading: `A quieter way to choose a gemstone.`
- Paragraph 1: `Rubiae brings natural gemstones into view without turning them into promises about the person who chooses them.`
- Paragraph 2: `We believe in looking slowly, describing honestly, and leaving space for personal meaning. The stone is presented with its character and the evidence available; the choice remains yours.`
- Paragraph 3: `Rubiae is being built in the Netherlands. The public site is currently a preview, while the collection, reports, and future service are prepared with care.`
- CTA: `Contact Rubiae`

### Nederlands

- Eyebrow: `OVER RUBIAE`
- Heading: `Een rustigere manier om een edelsteen te kiezen.`
- Paragraph 1: `Rubiae brengt natuurlijke edelstenen in beeld zonder er beloften van te maken over de persoon die ze kiest.`
- Paragraph 2: `We geloven in rustig kijken, eerlijk beschrijven en ruimte laten voor persoonlijke betekenis. De steen wordt getoond met zijn karakter en het beschikbare bewijs; de keuze blijft van jou.`
- Paragraph 3: `Rubiae wordt opgebouwd in Nederland. De openbare website is nu een voorvertoning, terwijl de collectie, rapporten en toekomstige dienstverlening zorgvuldig worden voorbereid.`
- CTA: `Neem contact op met Rubiae`

## For Trade

### English

- Eyebrow: `FOR TRADE`
- Heading: `Clear stones. Clear information.`
- Intro: `Rubiae is preparing a focused supply of coloured gemstones for jewellers, designers, collectors, and other professional buyers.`
- Offer heading: `Current areas of focus`
- Offer list: `Selected cutting rough` / `Commercial cutting rough parcels` / `Ruby specimens with matrix` / `Finished loose stones`
- Process heading: `A professional enquiry starts with the facts.`
- Process body: `Tell us the material, format, quantity, quality range, and documentation you need. Wholesale inventory, pricing, and terms are shared only after professional-buyer verification.`
- CTA: `Introduce your requirements`

### Nederlands

- Eyebrow: `VOOR PROFESSIONALS`
- Heading: `Duidelijke stenen. Duidelijke informatie.`
- Intro: `Rubiae bereidt een gerichte selectie gekleurde edelstenen voor juweliers, ontwerpers, verzamelaars en andere professionele kopers voor.`
- Offer heading: `Huidige aandachtspunten`
- Offer list: `Geselecteerd slijpruw` / `Commerciële partijen slijpruw` / `Robijnspecimens met moedergesteente` / `Geslepen losse stenen`
- Process heading: `Een professionele aanvraag begint bij de feiten.`
- Process body: `Vertel welk materiaal, formaat, volume, kwaliteitsniveau en welke documentatie je nodig hebt. Groothandelsvoorraad, prijzen en voorwaarden worden pas gedeeld nadat de professionele koper is geverifieerd.`
- CTA: `Beschrijf je aanvraag`

## Contact 与兴趣表单

### Contact 页面

**English**

- Heading: `Ask clearly.`
- Intro: `Ask about a stone, a report, the future collection, or a professional requirement. Rubiae aims to reply personally within one working day.`

**Nederlands**

- Heading: `Vraag gerust door.`
- Intro: `Vraag naar een steen, een rapport, de toekomstige collectie of een professionele behoefte. Rubiae streeft ernaar binnen één werkdag persoonlijk te antwoorden.`

### 表单字段

| 字段 | English | Nederlands | 规则 |
| --- | --- | --- | --- |
| `name` | Name | Naam | 必填 |
| `email` | Email | E-mail | 必填 |
| `stone_id` | Stone ID | Steennummer | 兴趣表单必填，普通联系可选 |
| `preferred_language` | Preferred language | Voorkeurstaal | EN / NL |
| `message` | Message (optional) | Bericht (optioneel) | 可选 |

隐私说明：

- EN: `We use these details to answer your enquiry. See our Privacy notice.`
- NL: `We gebruiken deze gegevens om je vraag te beantwoorden. Lees onze privacyverklaring.`

独立开售通知许可，默认不勾选：

- EN: `Email me when Rubiae opens for purchasing. I understand that I must confirm this separately by email.`
- NL: `E-mail mij wanneer aankopen bij Rubiae mogelijk worden. Ik begrijp dat ik dit apart per e-mail moet bevestigen.`

提交按钮：`Send enquiry / Verstuur aanvraag`。

### 成功确认

**English:** `Thank you. Your message has been received. This does not reserve the stone, create an order, require payment, or give priority. Rubiae aims to reply personally within one working day.`

**Nederlands:** `Dank je. Je bericht is ontvangen. Dit reserveert de steen niet, vormt geen bestelling, vereist geen betaling en geeft geen voorrang. Rubiae streeft ernaar binnen één werkdag persoonlijk te antwoorden.`

确认页必须 `noindex`。

### 表单错误

| English | Nederlands |
| --- | --- |
| Enter your name. | Vul je naam in. |
| Enter a valid email address. | Vul een geldig e-mailadres in. |
| Select your preferred language. | Kies je voorkeurstaal. |
| Enter the stone ID. | Vul het steennummer in. |
| We could not send your message. Your information has not been submitted. Try again or email {{CONTACT_EMAIL}}. | We konden je bericht niet versturen. Je gegevens zijn niet verzonden. Probeer het opnieuw of mail naar {{CONTACT_EMAIL}}. |

## Privacy 页面内容

发布前必须填写 `{{LEGAL_NAME}}`、`{{PRIVACY_EMAIL}}`、`{{CONTACT_EMAIL}}`、`{{DOMAIN}}`、实际处理方和版本日期。

### English

- Title: `Privacy`
- Intro: `This notice explains how {{LEGAL_NAME}}, trading as Rubiae, uses personal data on {{DOMAIN}}.`
- Data collected: `We collect the information you choose to provide in contact and interest forms: name, email address, preferred language, stone ID, optional message, and any separate launch-notification consent.`
- Purpose: `We use enquiry data to answer your request and maintain a record of the conversation. We use launch-notification data only after separate consent and email confirmation.`
- Legal basis: `We process enquiries to take steps at your request and, where applicable, for our legitimate interest in answering and documenting genuine enquiries. We send launch notifications only with consent.`
- Sharing: `We share data only with service providers needed to operate the website, forms, email, and security. They may include Shopify and the providers listed in the current processor register. We do not sell personal data.`
- International processing: `If a provider processes data outside the European Economic Area, we use the safeguards described by that provider and required by applicable law.`
- Retention: `Unconverted enquiries are kept for up to 12 months. Launch-notification data is removed when you unsubscribe or after 24 months without interaction, unless a shorter period is required.`
- Rights: `You may ask for access, correction, deletion, restriction, portability, or object to certain processing. You may withdraw consent at any time without affecting earlier lawful processing.`
- Contact: `Email {{PRIVACY_EMAIL}}. You may also complain to the Dutch Data Protection Authority.`
- Version: `Last updated: {{PRIVACY_VERSION_DATE}}`

### Nederlands

- Title: `Privacy`
- Intro: `Deze verklaring legt uit hoe {{LEGAL_NAME}}, handelend onder de naam Rubiae, persoonsgegevens gebruikt op {{DOMAIN}}.`
- Data collected: `We verzamelen de gegevens die je zelf invult in contact- en interesseformulieren: naam, e-mailadres, voorkeurstaal, steennummer, optioneel bericht en eventuele afzonderlijke toestemming voor een lanceringsbericht.`
- Purpose: `We gebruiken aanvraaggegevens om je vraag te beantwoorden en de correspondentie vast te leggen. Gegevens voor lanceringsberichten gebruiken we alleen na afzonderlijke toestemming en bevestiging per e-mail.`
- Legal basis: `We verwerken aanvragen om op jouw verzoek stappen te zetten en, waar van toepassing, op basis van ons gerechtvaardigd belang om echte aanvragen te beantwoorden en vast te leggen. Lanceringsberichten sturen we alleen met toestemming.`
- Sharing: `We delen gegevens alleen met dienstverleners die nodig zijn voor de website, formulieren, e-mail en beveiliging. Daaronder kunnen Shopify en de leveranciers uit het actuele verwerkingsregister vallen. We verkopen geen persoonsgegevens.`
- International processing: `Als een dienstverlener gegevens buiten de Europese Economische Ruimte verwerkt, gebruiken we de waarborgen die de leverancier beschrijft en die de toepasselijke wet vereist.`
- Retention: `Aanvragen die niet tot een klantrelatie leiden bewaren we maximaal 12 maanden. Gegevens voor lanceringsberichten verwijderen we na afmelding of na 24 maanden zonder interactie, tenzij een kortere termijn vereist is.`
- Rights: `Je kunt vragen om inzage, correctie, verwijdering, beperking of overdraagbaarheid, of bezwaar maken tegen bepaalde verwerkingen. Toestemming kun je altijd intrekken zonder dat dit eerdere rechtmatige verwerking aantast.`
- Contact: `E-mail {{PRIVACY_EMAIL}}. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.`
- Version: `Laatst bijgewerkt: {{PRIVACY_VERSION_DATE}}`

## Cookies 页面内容

实际 Cookie 名称、用途、提供方和保存期限必须在 Shopify 主题与应用确定后通过扫描填写。公开文案如下。

### English

- Title: `Cookies`
- Intro: `Rubiae uses necessary cookies to operate and secure the website. Optional analytics or marketing technologies remain off unless you actively accept them.`
- Choice: `You may accept, reject, or choose optional categories. Refusing optional cookies does not block the public website or future checkout.`
- Change: `You can change or withdraw your choice at any time through Cookie settings.`
- Inventory labels: `Name` / `Provider` / `Purpose` / `Category` / `Duration`
- Version: `Last updated: {{COOKIE_VERSION_DATE}}`

### Nederlands

- Title: `Cookies`
- Intro: `Rubiae gebruikt noodzakelijke cookies om de website te laten werken en te beveiligen. Optionele analyse- of marketingtechnologie blijft uit totdat je deze actief accepteert.`
- Choice: `Je kunt optionele categorieën accepteren, weigeren of zelf kiezen. Het weigeren van optionele cookies blokkeert de openbare website of toekomstige checkout niet.`
- Change: `Je kunt je keuze altijd wijzigen of intrekken via Cookie-instellingen.`
- Inventory labels: `Naam` / `Aanbieder` / `Doel` / `Categorie` / `Duur`
- Version: `Laatst bijgewerkt: {{COOKIE_VERSION_DATE}}`

Cookie 横幅按钮：

| English | Nederlands |
| --- | --- |
| Accept optional cookies | Optionele cookies accepteren |
| Reject optional cookies | Optionele cookies weigeren |
| Choose settings | Voorkeuren kiezen |
| Save choices | Keuzes opslaan |

## Footer

### English

- Closing line: `Choose on your terms.`
- Links: `Stones` / `Stories` / `How to Choose` / `About` / `For Trade` / `Privacy` / `Cookies` / `Contact` / `Instagram`
- Preview note: `Rubiae is preparing for launch. Purchasing is not yet available.`
- Copyright: `© {{CURRENT_YEAR}} Rubiae`

### Nederlands

- Closing line: `Kies op jouw voorwaarden.`
- Links: `Stenen` / `Verhalen` / `Hoe kies je` / `Over Rubiae` / `Voor professionals` / `Privacy` / `Cookies` / `Contact` / `Instagram`
- Preview note: `Rubiae bereidt de lancering voor. Aankopen is nog niet mogelijk.`
- Copyright: `© {{CURRENT_YEAR}} Rubiae`

## 系统页面与无障碍文字

| 状态 | English | Nederlands |
| --- | --- | --- |
| 404 heading | This page is not here. | Deze pagina is er niet. |
| 404 body | Return to the stones or continue exploring Rubiae. | Ga terug naar de stenen of ontdek Rubiae verder. |
| 404 CTA | Return home | Terug naar home |
| 加载 | Loading | Laden |
| 无结果 | No stones match this view. | Geen stenen passen bij deze weergave. |
| 重试 | Try again | Probeer opnieuw |
| 菜单 | Open menu / Close menu | Menu openen / Menu sluiten |
| 语言 | Change language | Taal wijzigen |

图片替代文字必须描述画面功能与内容，不写 `image of`，不把情绪当作事实。示例：

- EN: `Ruby jewellery beside a worn notebook on a cool grey table.`
- NL: `Robijnsieraad naast een gebruikt notitieboek op een koelgrijze tafel.`
- 纯装饰纹理使用空 `alt`。

## SEO 内容

| 页面 | English title | English description | Nederlandse titel | Nederlandse beschrijving |
| --- | --- | --- | --- | --- |
| Home | Rubiae — Natural gemstones, honestly described | Choose a natural gemstone slowly, with clear information and room for personal meaning. Rubiae is preparing for launch in the Netherlands. | Rubiae — Natuurlijke edelstenen, eerlijk beschreven | Kies rustig een natuurlijke edelsteen, met heldere informatie en ruimte voor persoonlijke betekenis. Rubiae bereidt de lancering in Nederland voor. |
| Stones | Stones — Rubiae | Preview individual gemstones with the facts currently known. Purchasing is not yet available. | Stenen — Rubiae | Bekijk afzonderlijke edelstenen met de feiten die nu bekend zijn. Aankopen is nog niet mogelijk. |
| Stories | Rubiae Moments — Stories on her terms | Personal moments shared only with permission and in her own words. | Rubiae Moments — Verhalen op haar voorwaarden | Persoonlijke momenten, alleen met toestemming en in haar eigen woorden gedeeld. |
| How to Choose | How to choose a gemstone — Rubiae | Look at colour and character, understand the facts, ask clearly, and choose on your terms. | Hoe kies je een edelsteen — Rubiae | Bekijk kleur en karakter, begrijp de feiten, vraag door en kies op jouw voorwaarden. |
| About | About Rubiae | A quieter, honest way to discover and choose natural gemstones in the Netherlands. | Over Rubiae | Een rustigere, eerlijke manier om natuurlijke edelstenen in Nederland te ontdekken en te kiezen. |
| For Trade | Gemstones for professional buyers — Rubiae | Rubiae is preparing selected coloured gemstone material for verified professional buyers. | Edelstenen voor professionele kopers — Rubiae | Rubiae bereidt geselecteerd gekleurd edelsteenmateriaal voor geverifieerde professionele kopers voor. |
| Contact | Contact Rubiae | Ask about a gemstone, report, future collection, or professional requirement. | Contact met Rubiae | Vraag naar een edelsteen, rapport, toekomstige collectie of professionele behoefte. |
| Privacy | Privacy — Rubiae | How Rubiae handles personal data submitted through the preview website. | Privacy — Rubiae | Hoe Rubiae omgaat met persoonsgegevens die via de voorvertoningswebsite worden verstrekt. |
| Cookies | Cookies — Rubiae | How Rubiae uses necessary and optional cookies and how you can manage your choice. | Cookies — Rubiae | Hoe Rubiae noodzakelijke en optionele cookies gebruikt en hoe je jouw keuze beheert. |

首页结构化数据只使用可证实的 `Organization` / `WebSite` 数据。商品不可购买期间不得输出虚假的 `Offer`、价格或库存状态。

## 图片与页面映射

### 已批准参考

- [高清全页参考](../brand/rubiae-homepage-still-life-concept-v5.png)：主要版式、节奏、冷灰色调、宝石亮度和静物叙事参考。
- [用户再次确认的版式截图](../brand/rubiae-homepage-approved-layout-reference.jpg)：本次附图的原始归档，用于证明最终选定方向。
- [首屏参考](../brand/rubiae-home-hero-approved-reference.png)：首屏雨窗、人物背影、桌面与故事卡构图参考。

这些文件是设计证据，不是商品真实性证据，也不进入商品相册。

### 明日视觉替换要求（`GEM-005`）

- 已批准版式、首屏场景和内容顺序不变。
- 将网页场景中作为焦点的裸红宝石颗粒替换为真实感强、比例合理的红宝石成品饰品。
- 每个场景仍须出现红宝石；红色沿用已确认的冷调深莓红、酒红暗部和亮玫红受光面，并保持足够亮度。
- 有手、书、钥匙、腕表等参照物时，饰品尺寸必须符合真实佩戴与产品尺度；无参照物时按构图美感决定，但不得形成夸张商品暗示。
- 只保留首屏完整人物背影；后续最多一次局部手部。全页保持冷灰，仅灯光、木材和红宝石反射带少量暖意。
- 若具体饰品尚未确定，先用明确标记的设计参考图占位；正式商品与商品卡只用真实、对应实物的摄影。

## 发布前数据清单

文案和页面状态已齐。以下是必须从真实经营或商品资料填入的数据，不属于待写文案：

1. `{{LEGAL_NAME}}`、`{{DOMAIN}}`、`{{CONTACT_EMAIL}}`、`{{PRIVACY_EMAIL}}`。
2. 每颗商品的编号、事实、证据来源、报告与真实相册。
3. 获授权的 Rubiae Moments 故事；没有时使用已写好的无故事状态。
4. Shopify 主题与应用确定后的实际 Cookie 清单及处理方登记。
5. 用于正式页面的红宝石饰品类型、实拍素材和每个场景映射。

## 公开预览验收

- Home、Stones、Stone Detail、Stories、How to Choose、About、For Trade、Contact、Privacy、Cookies 均有 EN/NL 内容。
- 全站无价格、购物车、结账、付款、预约成交或可购买暗示。
- 商品询盘与开售通知许可分离；确认页明确不锁货、不成单、不产生优先权。
- 公开页面可索引；确认页、测试主题、隐藏交易页与客户数据页 `noindex`。
- 图片符合 [网站视觉规范](../brand/rubiae-web-visual-spec.md)，商品相册符合真实性要求。
- 键盘、焦点、对比度、表单标签、错误提示、语言切换及响应式布局达到 WCAG 2.2 AA 目标。
