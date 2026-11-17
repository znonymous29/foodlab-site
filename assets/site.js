/* ============================================================
   The Food Lab · 第一章
   ============================================================ */

/* ---------- 117 张原书图片的中文图注 ---------- */
const FIGURES = {
  "001": "章节扉页：鸡蛋、乳制品与早餐的科学。",
  "002": "蛋白与蛋黄：一颗蛋里有两套不同的蛋白系统，决定了它既能凝固，又能被打发。",
  "003": "培根与鸡蛋——作者心中“两种完美食物”的经典组合。",
  "004": "超市里的鸡蛋：大小、等级、饲养方式和新鲜度，都比想象中复杂。",
  "005": "蛋黄约占整颗蛋 75% 的热量；它其实是“装在水袋里的蛋白质和脂肪”。",
  "006": "存放较久的蛋，蛋白会变稀，打进锅里就摊得很开——这是新鲜度最直观的信号。",
  "007": "书里把“加盐、加醋、冷水下锅”等煮蛋说法逐一做了对照实验。",
  "008": "一颗剥得干净的蛋。真正决定好不好剥的，是下锅时的温度，而不是冰水、针孔或小苏打。",
  "009": "溏心蛋剥壳后的样子：蛋白刚刚凝固，蛋黄仍然流动。",
  "010": "在流动的冷水下，从气室所在的“大头”开始剥，壳膜最容易分离。",
  "011": "边冲水边剥还能把碎壳冲走；作者会在水槽里放个滤篮接壳，收拾起来更省事。",
  "012": "沉水测试：新鲜蛋会沉底并平躺；气室变大后，蛋会立起来，浮起就别吃了。",
  "013": "盲测实验：把不同来源的蛋染成绿色，排除颜色干扰后再尝味道。",
  "014": "同样的炒蛋，只做了颜色调整——你觉得哪一盘更好吃？",
  "015": "另一版调色对照。答案：眼睛会替舌头“加戏”。",
  "016": "每隔 30 秒捞出一颗蛋，切开排成一排：时间如何改变熟度，一目了然。",
  "017": "将沸未沸的“微颤水”（低于 77°C）：小气泡在锅底形成，水面轻轻抖动。",
  "018": "低于 90°C 的“次沸水”：气泡成串上升，但水面还没有全面翻滚。",
  "019": "0 到 12 分钟的水煮蛋切片阵列：蛋白和蛋黄的凝固并不同步。",
  "020": "沸水下锅的典型问题：外层蛋白已经橡皮化，蛋黄中心却还没熟。",
  "021": "沸点随海拔下降：海拔越高，水越“温”，豆子、意面、炖菜都会变难煮。",
  "022": "完美的溏心蛋切面：蛋白完全凝固，蛋黄仍然流心。",
  "023": "溏心蛋配吐司：蛋黄就是最好的酱汁。",
  "024": "全熟蛋的理想状态：蛋白凝固但不橡皮，蛋黄亮黄、细腻不发粉。",
  "025": "剥好的全熟蛋，撒盐就能吃；关键是避免过熟产生绿灰色的硫化亚铁圈。",
  "026": "水波蛋：蛋白包住流心蛋黄，切开时缓缓流出。",
  "027": "先把蛋打进小碗，便于控制下落位置。",
  "028": "倒入细网筛：稀薄的“散蛋白”会漏下去，紧实的蛋白和蛋黄留下。",
  "029": "让稀蛋白充分滴走——这一步能做出没有“飞边”的水波蛋。",
  "030": "连筛子一起沉入次沸水，让热水先包住蛋。",
  "031": "轻轻把蛋滑入水中，蛋白立刻开始定型。",
  "032": "用木勺推动水流、轻轻翻转，让蛋受热均匀、形状更圆。",
  "033": "一锅水波蛋：水应保持“次沸”而非大滚，避免把蛋白冲散。",
  "034": "荷兰酱的基础：蛋黄、柠檬汁和一点水先在搅拌机里打匀。",
  "035": "黄油加热到 82–88°C 后，缓慢倒入正在搅打的蛋黄中。",
  "036": "乳化成奶油般浓稠的荷兰酱——成品温度窗口是 71–82°C。",
  "037": "做好的荷兰酱应能缓慢地从勺背流下，裹住蛋而不是流成汤。",
  "038": "澄清黄油的分层：上层蛋白泡沫、中层纯黄油脂肪、下层水与蛋白。",
  "039": "班尼迪克蛋：英式松饼 + 火腿 + 水波蛋 + 荷兰酱。",
  "040": "组装顺序：松饼、煎过的加拿大培根、水波蛋。",
  "041": "最后浇上荷兰酱，撒辣椒粉和香草。",
  "042": "切开时蛋黄与荷兰酱一起流出——这道菜的全部意义所在。",
  "043": "煎蛋前把蛋过筛，能得到边缘整齐的“广告级”煎蛋。",
  "044": "小火煎蛋：蛋白干韧、蛋黄底部发粉，只有最里面一点流心。",
  "045": "中火煎蛋：底部微焦、蛋白全熟，蛋黄顶部仍流动——作者最常用的折中。",
  "046": "炒蛋的分歧：有人要蓬松干爽，有人要浓稠奶油状（连狗都在等）。",
  "047": "加盐前后的蛋液：盐会拆散蛋黄里的蛋白球，让蛋液从亮黄不透明变成深橙半透明。",
  "048": "出锅后才加盐的炒蛋：蛋白质收缩过度，盘底会渗水。",
  "049": "提前 15 分钟加盐的炒蛋：凝乳更嫩、更保水，盘底干净。",
  "050": "蓬松炒蛋（一）：蛋液回打至起泡，中高火下锅。",
  "051": "蓬松炒蛋（二）：用刮刀不断刮底、折叠，形成大而湿的凝乳。",
  "052": "蓬松炒蛋（三）：看起来还略欠熟时立刻离火装盘，余温会补熟。",
  "053": "奶油炒蛋（一）：冷黄油块直接放进蛋液，小火下锅。",
  "054": "奶油炒蛋（二）：持续快速搅动，把大凝乳打碎，让质地像卡仕达。",
  "055": "奶油炒蛋（三）：离火拌入淡奶油或法式酸奶油，终止加热。",
  "056": "自制法式酸奶油（crème fraîche）：只有奶油和酪乳，室温静置 6–12 小时。",
  "057": "美式 diner 煎蛋卷：内部蓬松、表面金黄，折叠后塞满馅料。",
  "058": "法式煎蛋卷：颜色浅黄、质地柔嫩，像雪茄一样卷起。",
  "059": "diner 煎蛋卷（一）：先用黄油把火腿煎香。",
  "060": "diner 煎蛋卷（二）：火腿与奶酪拌匀，利用余温开始融化。",
  "061": "diner 煎蛋卷（三）：倒入蛋液，推边、倾斜，让生蛋液流到锅底。",
  "062": "火腿奶酪煎蛋卷成品：表面金黄，切开奶酪刚好融化。",
  "063": "切甜椒（一）：纵向对半切，去蒂、去籽。",
  "064": "切甜椒（二）：去白筋后切面朝下切条，避免压软果肉。",
  "065": "法式煎蛋卷（一）：小火、冷黄油块，持续搅动。",
  "066": "法式煎蛋卷（二）：蛋液刚能留下划痕时，敲锅让它偏向一侧。",
  "067": "法式煎蛋卷（三）：让底部稍稍定型，从薄的一边开始卷。",
  "068": "法式煎蛋卷（四）：卷好后翻扣到盘子上，整理形状。",
  "069": "煎培根（一）：培根平铺入厚底锅，中火起步。",
  "070": "煎培根（二）：脂肪慢慢逼出，低火可减少卷曲和爆油。",
  "071": "煎培根（三）：翻面并调整位置，直到两面金黄酥脆。",
  "072": "rösti 土豆饼：外脆内糯，切开能看到一丝丝土豆。",
  "073": "带窝蛋的土豆哈希：铸铁锅直接进烤箱，蛋白刚凝固、蛋黄还流。",
  "074": "蔬菜下得太早的后果：洋葱焦了，土豆还没脆。",
  "075": "哈希步骤（一）：土豆微波预熟，先单独下锅煎出脆壳。",
  "076": "哈希步骤（二）：土豆煎到一半再下甜椒和洋葱。",
  "077": "哈希步骤（三）：挖四个窝，打蛋进去，整锅进烤箱。",
  "078": "切土豆（一）：削皮、去芽眼。",
  "079": "切土豆（二）：先切一片做出稳定底面，再切片。",
  "080": "切土豆（三）：切片→切条→切丁，尺寸均匀才能同时熟。",
  "081": "美式酪乳松饼：边缘脆、中心蓬松，浇上温热的枫糖浆。",
  "082": "小苏打用量实验：颜色由浅到深；过量会焦苦、发皂味，而且反而塌陷。",
  "083": "松饼内部的气孔：面糊没过度搅拌、且下锅及时，才有这种轻盈结构。",
  "084": "双效泡打粉的“第二次发力”：受热时再产生一批气泡，让松饼在锅里继续长高。",
  "085": "加入打发蛋白的松饼（左）明显更高、更松。",
  "086": "普通全蛋面糊（右）对比：高度和轻盈度都逊一筹。",
  "087": "面糊只需拌到“刚成团”，留些干粉疙瘩没关系，煎的时候会消失。",
  "088": "平底锅上的松饼：表面出现气泡、边缘定型再翻面。",
  "089": "自制里科塔：温热、湿润、带一点酸香，和烤面包是绝配。",
  "090": "柠檬里科塔松饼：比普通松饼更厚实、更湿润，带着清新柑橘香。",
  "091": "超级酥层的酪乳比司吉：掰开能看到一层层的“页片”。",
  "092": "比司吉（一）：料理机把冷黄油和面粉打成粗砂状。",
  "093": "比司吉（二）：加入酪乳后用刮刀折叠，尽量少揉，避免起筋。",
  "094": "比司吉（三）：整形成团后擀成方形——折叠的起点。",
  "095": "比司吉（四）：擀成 30 厘米见方，把右三分之一折向中间。",
  "096": "比司吉（五）：再把左三分之一折过来，形成三层。",
  "097": "比司吉（六）：上下各折三分之一，完成第一轮“三折三”。",
  "098": "比司吉（七）：第二轮折叠前可撒奶酪碎和葱花，做成咸味比司吉。",
  "099": "比司吉（八）：折叠完成后擀开、切圆片；边角轻轻团起再切，不要反复揉。",
  "100": "比司吉（九）：切好的比司吉排入烤盘，表面刷融化黄油。",
  "101": "比司吉（十）：烘烤中途旋转烤盘，让上色均匀。",
  "102": "比司吉（十一）：出炉放凉 5 分钟——这是最难的等待。",
  "103": "掰开的比司吉：外层酥脆、内部柔软，层理清晰。",
  "104": "焦糖山核桃 sticky buns：倒扣脱模后，糖浆裹住每一圈。",
  "105": "拉丝、黏糯的断面：面包体柔软，焦糖浆浓稠。",
  "106": "肉桂卷（一）：混合面团材料，揉到光滑。",
  "107": "肉桂卷（二）：第一次发酵至两倍大；同时熬焦糖酱。",
  "108": "肉桂卷（三）：焦糖酱铺底，面团擀成长方形。",
  "109": "肉桂卷（四）：面团抹黄油、撒肉桂糖。",
  "110": "肉桂卷（五）：从长边卷起，卷紧成圆柱。",
  "111": "肉桂卷（六）：切成 12 段，切面朝上排入烤盘。",
  "112": "肉桂卷（七）：二次发酵至两倍大，面团彼此挤在一起。",
  "113": "肉桂卷（八）：175°C 烤约 30 分钟，中途转盘。",
  "114": "肉桂卷（九）：出炉静置 5 分钟，倒扣脱模并刮下焦糖。",
  "115": "肉桂卷（十）：淋橙香奶油奶酪糖霜，趁热吃。",
  "116": "自制热可可粉：黑巧克力、可可粉、糖和玉米淀粉一起打碎。",
  "117": "冲好的热可可：玉米淀粉让口感更厚、更滑，也防止粉结块。"
};

/* ---------- 渲染图片占位 ---------- */
const allFigs = [];

function renderGalleries() {
  const store = window.CHAPTER_FIGS;
  if (!store) return;
  document.querySelectorAll('[data-gallery]').forEach(g => {
    Object.keys(store).forEach(id => {
      if (document.querySelector(`[data-fig="${id}"]`)) return;
      const f = document.createElement('figure');
      f.dataset.fig = id;
      f.dataset.cap = store[id].caption || '';
      g.appendChild(f);
    });
  });
}
function renderFigures() {
  const store = window.CHAPTER_FIGS || null;
  document.querySelectorAll('[data-fig]').forEach(el => {
    const id = el.dataset.fig;
    const entry = store ? store[id] : null;
    const cap = el.dataset.cap || (entry ? entry.caption : FIGURES[id]) || '';
    const src = el.dataset.src || (entry ? entry.src : `assets/ch1web/img-${id}.webp`);
    el.classList.add('fig');
    el.innerHTML = `<img src="${src}" alt="原书插图 ${id}：${cap}" loading="lazy" decoding="async">
      <figcaption><b>图 ${id}</b>${cap}</figcaption>`;
    const img = el.querySelector('img');
    img.addEventListener('load', () => {
      if (img.naturalWidth / img.naturalHeight > 2.15) el.classList.add('fig--wide');
      if (id === '022' || id === '024' || id === '001') el.classList.add('fig--tall');
    });
    img.addEventListener('click', () => openLightbox(id));
    allFigs.push({ id, el, src, cap });
  });
}

/* ---------- 灯箱 ---------- */
let lbIndex = 0;
function openLightbox(id) {
  const i = allFigs.findIndex(f => f.id === id);
  lbIndex = i < 0 ? 0 : i;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  updateLightbox();
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  const f = allFigs[lbIndex];
  if (!f) return;
  const img = document.getElementById('lb-img');
  img.src = f.src;
  img.alt = f.cap;
  document.getElementById('lb-cap').textContent = `图 ${f.id} · ${f.cap}`;
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function stepLightbox(d) {
  if (!allFigs.length) return;
  lbIndex = (lbIndex + d + allFigs.length) % allFigs.length;
  updateLightbox();
}

/* ---------- 温度实验室 ---------- */
const TEMP_DATA = {
  white: [
    { t: '60°C', title: '卵转铁蛋白开始凝固', text: '蛋白从透明变乳白、像果冻一样颤巍巍；此时还非常嫩。' },
    { t: '68°C', title: '蛋白整体变白、但仍柔软', text: '这是“蛋白刚熟、蛋黄还流”的溏心蛋目标区间。' },
    { t: '82°C', title: '卵白蛋白交联，蛋白完全凝固', text: '蛋白结实却仍嫩；超过这个温度就会越来越干、越来越橡皮。' }
  ],
  yolk: [
    { t: '63°C', title: '蛋黄蛋白开始变性', text: '蛋黄变稠，但仍能流动。' },
    { t: '70°C', title: '蛋黄刚好能切', text: '质地像软糖，颜色仍深、半透明，是很多厨师最爱的状态。' },
    { t: '77°C', title: '蛋黄变粉、出现绿圈', text: '继续升温会越来越粉；蛋白里的硫与蛋黄里的铁反应，生成灰绿色硫化亚铁。' }
  ]
};

function renderTemps() {
  document.querySelectorAll('.temp-lab').forEach(lab => {
    lab.innerHTML = `<h4>把温度调到多少，蛋会发生什么？</h4>
      <p class="hint">点击温度，观察蛋白与蛋黄各自的变化。两种蛋白的凝固温度并不一样，这正是煮蛋所有难题的根源。</p>
      <div class="temp-tracks">
        <div class="track" data-track="white">
          <h5>蛋白 · EGG WHITE</h5>
          <div class="temp-btns"></div>
          <div class="temp-readout"></div>
        </div>
        <div class="track" data-track="yolk">
          <h5>蛋黄 · EGG YOLK</h5>
          <div class="temp-btns"></div>
          <div class="temp-readout"></div>
        </div>
      </div>`;
    ['white', 'yolk'].forEach(track => {
      const wrap = lab.querySelector(`[data-track="${track}"]`);
      const btns = wrap.querySelector('.temp-btns');
      const out = wrap.querySelector('.temp-readout');
      TEMP_DATA[track].forEach((d, i) => {
        const b = document.createElement('button');
        b.className = 'temp-btn' + (i === 0 ? ' active' : '');
        b.type = 'button';
        b.textContent = d.t;
        b.addEventListener('click', () => {
          btns.querySelectorAll('.temp-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          out.innerHTML = `<div class="t">${d.title}</div><p>${d.text}</p>`;
        });
        btns.appendChild(b);
      });
      const first = TEMP_DATA[track][0];
      out.innerHTML = `<div class="t">${first.title}</div><p>${first.text}</p>`;
    });
  });
}

/* ---------- 导航 / 进度 ---------- */
function initNav() {
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const map = new Map();
  links.forEach(a => {
    const s = document.querySelector(a.getAttribute('href'));
    if (s) map.set(s, a);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = map.get(e.target);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  const progress = document.getElementById('progress');
  const sideBar = document.getElementById('side-progress');
  const toTop = document.querySelector('.to-top');
  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    progress.style.width = (p * 100) + '%';
    if (sideBar) sideBar.style.width = (p * 100) + '%';
    if (toTop) toTop.classList.toggle('show', h.scrollTop > 600);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menu = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.scrim');
  const closeMenu = () => { sidebar.classList.remove('open'); scrim.classList.remove('show'); };
  if (menu) menu.addEventListener('click', () => { sidebar.classList.toggle('open'); scrim.classList.toggle('show'); });
  if (scrim) scrim.addEventListener('click', closeMenu);
  links.forEach(a => a.addEventListener('click', closeMenu));
}

/* ---------- 全部展开 ---------- */
function initRecipeTools() {
  document.querySelectorAll('[data-expand]').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.dataset.expand === 'open';
      document.querySelectorAll('details.recipe').forEach(d => d.open = open);
      btn.textContent = open ? '收起全部配方' : '展开全部配方';
      btn.dataset.expand = open ? 'close' : 'open';
    });
  });
}

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderGalleries();
  renderFigures();
  renderTemps();
  initNav();
  initRecipeTools();

  const lb = document.getElementById('lightbox');
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => stepLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', () => stepLightbox(1));
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
  document.querySelector('.to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
