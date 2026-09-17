/* ─────────────────────────────────────────────────────────────
   i18n for the résumé site.

   How it works
   ------------
   - The HTML carries the ENGLISH text inline (so the page is fully
     readable with JS disabled and crawlable by search engines).
   - Every translatable element has a data-i18n="key" attribute.
     i18n.js replaces the element's innerHTML with the value for the
     active language, so keys may contain inline markup (<strong>).
   - Language is chosen by: saved preference -> browser language -> en.
   - {year} in a value is replaced with the current year.
   - Add a language: add a top-level block under I18N, add a button in
     the .lang switcher, done. Keep the key sets of every language in
     sync — apply() warns in the console when a key is missing.
   ───────────────────────────────────────────────────────────── */

const I18N = {

  en: {
    "doc.title": "Ruifeng Liang — Data Scientist",
    "doc.desc": "Ruifeng Liang — data scientist in Melbourne. Master of Data Science (Monash), three years of operations and engineering experience. Data analysis, visualisation and machine learning.",

    "a11y.skip": "Skip to content",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "sec.about": "About",
    "sec.experience": "Experience",
    "sec.projects": "Projects",
    "sec.education": "Education",
    "sec.skills": "Skills",
    "sec.leadership": "Leadership",
    "sec.contact": "Contact",

    "hero.eyebrow": "Data Scientist · Melbourne, Australia",
    "hero.lede": "Master of Data Science (Monash University) with three years of professional experience in service sales and engineering. I turn operational data into decisions — building dashboards, running customer segmentation, and automating the pipelines in between — and I work comfortably on both the business and the technical side of a problem.",
    "hero.fact1": "3 years industry experience",
    "hero.fact2": "Available within 2 months",
    "hero.fact3": "English · Mandarin · Cantonese",
    "hero.fact4": "IELTS 7.5",
    "hero.email": "Email me",
    "hero.github": "GitHub",

    "about.p1": "I started out in mechanical engineering and equipment maintenance, then moved into service sales at Otis Elevator, where I managed 300+ maintenance contracts covering 1,500+ assets. That role is where data became the job: I built the KPI reporting the service team ran on, and used customer segmentation to lift retention.",
    "about.p2": "I completed a Master of Data Science at Monash in 2025 to formalise the technical side — machine learning, statistical modelling, big data and NLP. What I want from a role is the same thing that kept me interested at Otis: messy operational data, a decision that depends on it, and room to build the pipeline that connects the two.",

    "exp.otis.role": "Maintenance Service Sales Representative",
    "exp.otis.meta": "<span class=\"org\">Otis Elevator Company</span> · Guangzhou, China",
    "exp.otis.dates": "Sep 2021 – May 2023",
    "exp.otis.b1": "Managed <strong>300+ maintenance contracts</strong> covering <strong>1,500+ assets</strong>.",
    "exp.otis.b2": "Built interactive KPI reports used by the service team, lifting the contract renewal rate to <strong>95%</strong>.",
    "exp.otis.b3": "Ran customer segmentation and retention analysis, increasing repeat business by <strong>10%</strong>.",
    "exp.otis.b4": "Kept account health in range: receivable recovery <strong>above 98%</strong>, bad-debt rate <strong>below 0.5%</strong>.",
    "exp.otis.b5": "Integrated IoT equipment monitoring for real-time performance tracking, cutting customer complaints by <strong>10%+</strong>.",

    "exp.sgd.role": "Intern Equipment Engineer",
    "exp.sgd.meta": "<span class=\"org\">SGD Pharma</span> · Zhanjiang, China",
    "exp.sgd.dates": "Dec 2020 – Jun 2021",
    "exp.sgd.b1": "Collected and analysed production data across <strong>5+ plant improvement projects</strong>, including efficiency work on furnace flue-gas desulfurisation and denitrification (FGD/DeNOx) systems.",
    "exp.sgd.b2": "Designed a cooling system for the glass-furnace monitoring unit — real-time temperature sensors plus pre-alarm logic — improving equipment reliability and safety near high-temperature furnaces.",

    "exp.yl.role": "Retail Associate",
    "exp.yl.meta": "<span class=\"org\">Yilian Trading Co., Ltd.</span> · Guangzhou, China",
    "exp.yl.dates": "Jul 2018 – Sep 2018",
    "exp.yl.b1": "Managed sales data and forecasting, reaching <strong>¥100,000+ in monthly personal sales</strong>.",
    "exp.yl.b2": "Ran product demonstrations and consultations that measurably improved conversion.",
    "exp.yl.b3": "Maintained the inventory database behind supply-chain decisions.",

    "proj.ongoing": "Ongoing",
    "proj.siril.title": "Siril Deep Space Image Processing Workflow",
    "proj.siril.desc": "An end-to-end astrophotography pipeline in Siril: calibration (bias/dark/flat), registration, stacking, photometric colour calibration and background extraction. Scripted with Siril batch commands (.ssf/.txt) for automated preprocessing and quality-weighted stacking (FWHM/SNR filtering), with denoising and deconvolution (wavelet/à trous, Richardson–Lucy) to recover faint structure without smearing star profiles. Results are evaluated quantitatively with SNR, PSNR/SSIM and star FWHM.",
    "proj.siril.t1": "Siril", "proj.siril.t2": "Scripting", "proj.siril.t3": "Image processing", "proj.siril.t4": "SNR / PSNR / SSIM",

    "proj.micro.title": "Micro Oasis — Full-stack Web Platform",
    "proj.micro.desc": "Designed and implemented the full-stack architecture (Vue + Flask + MySQL) for a dynamic, database-driven site, including interactive dashboards for real-time visualisation. Fine-tuned and deployed open-source image-generation models, cutting response time by <strong>30%</strong> while improving output quality.",
    "proj.micro.t1": "Vue", "proj.micro.t2": "Flask", "proj.micro.t3": "MySQL", "proj.micro.t4": "Model deployment",

    "proj.crime.title": "Victorian Crime EDA",
    "proj.crime.desc": "Collected and cleaned crime statistics from multiple Victorian regions, integrating open government datasets, then applied clustering and geospatial analysis to surface hotspots and temporal patterns. Delivered Tableau dashboards with interactive heatmaps and time-series trend charts so non-technical stakeholders could read distribution and change at a glance.",
    "proj.crime.t1": "Python", "proj.crime.t2": "Clustering", "proj.crime.t3": "Geospatial", "proj.crime.t4": "Tableau",

    "proj.kb.title": "Ergonomic Keyboard Design",
    "proj.kb.desc": "Designing a split ergonomic mechanical keyboard on an STM32 microcontroller platform: QMK/VIAL firmware with programmable layouts and macros, human-factors decisions around split layout, adjustable tenting and key mapping, and PCB/case prototyping through CAD and 3D printing.",
    "proj.kb.t1": "STM32", "proj.kb.t2": "QMK / VIAL", "proj.kb.t3": "CAD", "proj.kb.t4": "3D printing",

    "edu.monash.degree": "Master of Data Science",
    "edu.monash.meta": "<span class=\"org\">Monash University</span> · Melbourne, Australia",
    "edu.monash.dates": "Jul 2023 – May 2025",
    "edu.monash.b1": "Key courses: Machine Learning, Data Mining, Statistical Modelling, Big Data, NLP.",
    "edu.monash.b2": "Capstone: a data-driven website with full-stack architecture, database-backed dashboards and AI image-generation capabilities.",

    "edu.dgut.degree": "Bachelor of Mechanical Design, Manufacturing and Automation",
    "edu.dgut.meta": "<span class=\"org\">Dongguan University of Technology</span> · China",
    "edu.dgut.dates": "Sep 2017 – Jun 2021",
    "edu.dgut.b1": "Relevant coursework: Project Management, Statistics, CAD.",
    "edu.dgut.b2": "Head of the Student Union Publicity Department for two years.",
    "edu.dgut.b3": "Two-time university third-class scholarship.",

    "edu.cnam.degree": "Exchange Program",
    "edu.cnam.meta": "<span class=\"org\">Conservatoire National des Arts et Métiers</span> · France",
    "edu.cnam.dates": "Sep 2019 – Jul 2020",
    "edu.cnam.b1": "Focus: Mechanical Vibration, Solid Mechanics, Structural Mechanics, Project Management.",

    "skills.pg": "Programming &amp; databases",
    "skills.pg.d": "Python, R, SQL, HTML/CSS/JavaScript",
    "skills.av": "Analysis &amp; visualisation",
    "skills.av.d": "Pandas, NumPy, Matplotlib, Seaborn, Tableau, Power BI",
    "skills.ml": "Machine learning &amp; statistics",
    "skills.ml.d": "Regression, classification, clustering, NLP, feature engineering",
    "skills.dp": "Data processing",
    "skills.dp.d": "ETL, text preprocessing, language data analysis, logical database design",
    "skills.tools": "Tools",
    "skills.tools.d": "Git, MS Office Suite",
    "skills.lang": "Languages",
    "skills.lang.d": "English (IELTS 7.5), Mandarin (native), Cantonese (native)",

    "lead.b1": "Head of Publicity for the Student Union at Dongguan University of Technology — two years running student events and campus campaigns.",
    "lead.b2": "Initiated a weekly cross-departmental technical exchange during my factory internship, bringing interns from different disciplines together on engineering practice, programming and data analysis.",

    "contact.intro": "Based in Melbourne and available within two months. Open to data science, analytics and operations roles.",
    "contact.fine": "© {year} Ruifeng Liang · Melbourne, Australia"
  },

  zh: {
    "doc.title": "Ruifeng Liang — 数据科学家",
    "doc.desc": "Ruifeng Liang——墨尔本数据科学家。数据科学硕士（蒙纳士大学），三年运营与工程领域经验。擅长数据分析、可视化与机器学习。",

    "a11y.skip": "跳到正文",

    "nav.about": "关于",
    "nav.experience": "经历",
    "nav.projects": "项目",
    "nav.education": "教育",
    "nav.skills": "技能",
    "nav.contact": "联系",

    "sec.about": "关于我",
    "sec.experience": "工作经历",
    "sec.projects": "项目",
    "sec.education": "教育背景",
    "sec.skills": "技能",
    "sec.leadership": "领导力与活动",
    "sec.contact": "联系方式",

    "hero.eyebrow": "数据科学家 · 墨尔本，澳大利亚",
    "hero.lede": "数据科学硕士（蒙纳士大学），拥有三年服务销售与工程领域的从业经验。我擅长把运营数据转化为决策——搭建看板、做客户分群，以及打通两者之间那条数据管线——习惯在业务与技术之间工作。",
    "hero.fact1": "3 年行业经验",
    "hero.fact2": "2 个月内可入职",
    "hero.fact3": "英语 · 普通话 · 粤语",
    "hero.fact4": "雅思 7.5",
    "hero.email": "邮件联系",
    "hero.github": "GitHub",

    "about.p1": "我从机械工程和设备维护起步，之后进入奥的斯电梯做维保服务销售，期间管理 300+ 份维保合同、覆盖 1,500+ 台设备。也是在那个岗位上，数据变成了主业：我搭建了服务团队日常使用的 KPI 报表，并用客户分群提升了续约率。",
    "about.p2": "2025 年我在蒙纳士大学读完数据科学硕士，把技术这一侧补齐——机器学习、统计建模、大数据与 NLP。我想要的岗位，和当年让我留在奥的斯的原因是一样的：真实的、杂乱的运营数据，一个依赖它做出的决策，以及由我来打通两者的空间。",

    "exp.otis.role": "维保服务销售代表",
    "exp.otis.meta": "<span class=\"org\">奥的斯电梯（Otis Elevator）</span> · 广州，中国",
    "exp.otis.dates": "2021.09 – 2023.05",
    "exp.otis.b1": "管理 <strong>300+ 份维保合同</strong>，覆盖 <strong>1,500+ 台设备</strong>。",
    "exp.otis.b2": "搭建服务团队日常使用的交互式 KPI 报表，合同续约率提升至 <strong>95%</strong>。",
    "exp.otis.b3": "负责客户分群与留存分析，复购业务增长 <strong>10%</strong>。",
    "exp.otis.b4": "维持账户健康度：应收账款回收率 <strong>高于 98%</strong>，坏账率 <strong>低于 0.5%</strong>。",
    "exp.otis.b5": "整合 IoT 设备监控实现设备性能实时跟踪，客户投诉减少 <strong>10%+</strong>。",

    "exp.sgd.role": "设备工程实习生",
    "exp.sgd.meta": "<span class=\"org\">SGD Pharma</span> · 湛江，中国",
    "exp.sgd.dates": "2020.12 – 2021.06",
    "exp.sgd.b1": "采集并分析生产数据，支撑 <strong>5+ 个厂区改善项目</strong>，其中包括窑炉烟气脱硫脱硝（FGD/DeNOx）系统的效率优化。",
    "exp.sgd.b2": "为玻璃窑炉监测装置设计冷却系统——整合实时温度传感器与预警逻辑——提升高温窑炉旁的设备可靠性与安全性。",

    "exp.yl.role": "零售专员",
    "exp.yl.meta": "<span class=\"org\">Yilian Trading Co., Ltd.</span> · 广州，中国",
    "exp.yl.dates": "2018.07 – 2018.09",
    "exp.yl.b1": "负责销售数据与销售预测，个人月销售额达 <strong>¥100,000+</strong>。",
    "exp.yl.b2": "开展产品演示与咨询，转化率有明显提升。",
    "exp.yl.b3": "维护库存数据库，支撑供应链决策。",

    "proj.ongoing": "进行中",
    "proj.siril.title": "Siril 深空图像处理流程",
    "proj.siril.desc": "用 Siril 搭建的端到端天文摄影管线：校准（bias/dark/flat）、配准、叠加、光度色彩校准与背景提取。通过 Siril 批处理命令（.ssf/.txt）脚本化，实现自动预处理和按质量加权叠加（FWHM/SNR 筛选），再以小波/à trous 与 Richardson–Lucy 反卷积去噪，在恢复暗弱结构的同时不破坏星点轮廓。结果用 SNR、PSNR/SSIM 与星点 FWHM 做量化评估。",
    "proj.siril.t1": "Siril", "proj.siril.t2": "脚本化", "proj.siril.t3": "图像处理", "proj.siril.t4": "SNR / PSNR / SSIM",

    "proj.micro.title": "Micro Oasis 全栈网站平台",
    "proj.micro.desc": "设计并实现全栈架构（Vue + Flask + MySQL），支撑动态、可扩展的网站运行，包含用于实时可视化的交互式看板。微调并部署开源图像生成模型，响应时间降低 <strong>30%</strong>，同时提升输出质量。",
    "proj.micro.t1": "Vue", "proj.micro.t2": "Flask", "proj.micro.t3": "MySQL", "proj.micro.t4": "模型部署",

    "proj.crime.title": "维州犯罪数据探索性分析",
    "proj.crime.desc": "整合维州多个地区的开放政府数据集，完成犯罪统计数据的采集与清洗，再用聚类和地理空间分析找出犯罪热点与时间规律。用 Tableau 交付交互式热力图与时间序列趋势图，让非技术背景的相关方也能一眼看懂分布与变化。",
    "proj.crime.t1": "Python", "proj.crime.t2": "聚类", "proj.crime.t3": "地理空间", "proj.crime.t4": "Tableau",

    "proj.kb.title": "人体工学键盘设计",
    "proj.kb.desc": "基于 STM32 微控制器平台设计分体式人体工学机械键盘：QMK/VIAL 固件，可编程布局与宏；从人体工学出发设计分体布局、可调倾角与按键映射；通过 CAD 与 3D 打印完成 PCB 和外壳打样。",
    "proj.kb.t1": "STM32", "proj.kb.t2": "QMK / VIAL", "proj.kb.t3": "CAD", "proj.kb.t4": "3D 打印",

    "edu.monash.degree": "数据科学硕士",
    "edu.monash.meta": "<span class=\"org\">蒙纳士大学（Monash University）</span> · 墨尔本，澳大利亚",
    "edu.monash.dates": "2023.07 – 2025.05",
    "edu.monash.b1": "主要课程：机器学习、数据挖掘、统计建模、大数据、NLP。",
    "edu.monash.b2": "毕业项目：一个数据驱动的网站，包含全栈架构、数据库驱动的看板，以及 AI 图像生成能力。",

    "edu.dgut.degree": "机械设计制造及其自动化 学士",
    "edu.dgut.meta": "<span class=\"org\">东莞理工学院</span> · 中国",
    "edu.dgut.dates": "2017.09 – 2021.06",
    "edu.dgut.b1": "相关课程：项目管理、统计学、CAD。",
    "edu.dgut.b2": "担任校学生会宣传部部长两年。",
    "edu.dgut.b3": "两次获得校级三等奖学金。",

    "edu.cnam.degree": "交换项目",
    "edu.cnam.meta": "<span class=\"org\">法国国立工艺学院（CNAM）</span> · 法国",
    "edu.cnam.dates": "2019.09 – 2020.07",
    "edu.cnam.b1": "方向：机械振动、固体力学、结构力学、项目管理。",

    "skills.pg": "编程与数据库",
    "skills.pg.d": "Python、R、SQL、HTML/CSS/JavaScript",
    "skills.av": "数据分析与可视化",
    "skills.av.d": "Pandas、NumPy、Matplotlib、Seaborn、Tableau、Power BI",
    "skills.ml": "机器学习与统计",
    "skills.ml.d": "回归、分类、聚类、NLP、特征工程",
    "skills.dp": "数据处理",
    "skills.dp.d": "ETL、文本预处理、语言数据分析、逻辑数据库设计",
    "skills.tools": "工具",
    "skills.tools.d": "Git、MS Office 办公套件",
    "skills.lang": "语言",
    "skills.lang.d": "英语（雅思 7.5）、普通话（母语）、粤语（母语）",

    "lead.b1": "东莞理工学院学生会宣传部部长——两年间负责组织学生活动与校园宣传。",
    "lead.b2": "在工厂实习期间发起每周跨部门技术交流会，把不同专业的实习生聚在一起，分享工程实践、编程与数据分析经验。",

    "contact.intro": "现居墨尔本，可在两个月内入职。欢迎数据科学、数据分析与运营类岗位的机会。",
    "contact.fine": "© {year} Ruifeng Liang · 墨尔本，澳大利亚"
  }

};

/* ── Runtime ─────────────────────────────────────────────── */

(function () {
  const STORAGE_KEY = 'resume-lang';
  const SUPPORTED = Object.keys(I18N);
  const YEAR = String(new Date().getFullYear());

  // Keys are flat strings ("nav.about", "exp.otis.b1"), not nested paths.
  const lookup = (dict, key) =>
    Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : undefined;

  function apply(lang) {
    const dict = I18N[lang] || I18N.en;

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = lookup(dict, el.dataset.i18n);
      if (typeof value === 'string') {
        el.innerHTML = value.replace(/\{year\}/g, YEAR);
      } else {
        console.warn('[i18n] missing key:', el.dataset.i18n, 'for language:', lang);
      }
    });

    // <title>, meta description and Open Graph copies
    if (dict['doc.title']) {
      document.title = dict['doc.title'];
      for (const sel of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
        const m = document.querySelector(sel);
        if (m) m.setAttribute('content', dict['doc.title']);
      }
    }
    if (dict['doc.desc']) {
      for (const sel of 'meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]'.split(',')) {
        const m = document.querySelector(sel);
        if (m) m.setAttribute('content', dict['doc.desc']);
      }
    }
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'zh' ? 'zh_CN' : 'en_AU');

    // switcher state
    document.querySelectorAll('.lang button').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    // FOUC guard set by the inline <head> script
    document.documentElement.classList.remove('i18n-loading');
  }

  function detect() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* storage blocked — fall through to browser language */ }
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  // Apply immediately: this script sits at the end of <body>, so the swap
  // happens before first paint in practice.
  apply(detect());

  document.querySelectorAll('.lang button').forEach((btn) => {
    btn.addEventListener('click', () => {
      apply(btn.dataset.lang);
      try { localStorage.setItem(STORAGE_KEY, btn.dataset.lang); } catch (e) { /* ignore */ }
    });
  });
})();
