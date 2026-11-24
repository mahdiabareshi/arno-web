/* ============================================================
   ARNO ADMIN PANEL — v4.8 TEST EDITION
   Hidden access: 4 quick taps on the ARNO logo → PIN gate → panel.
   Self-contained (no backend): settings persist in localStorage
   of this browser and are applied on every page load.
   Sections: dashboard · content · pages(82) · articles · projects ·
             messages inbox · appearance · settings · live edit
   ============================================================ */
(function () {
  'use strict';

  if (window.__arnoAdminBooted) return;
  window.__arnoAdminBooted = true;

  /* ---------------- registry (generated from the 82-page audit) ---------------- */
  var REGISTRY = [["about", "fa", "about", "درباره گروه مهندسین آرنو", "رویکرد و هویت گروه مهندسین آرنو.", 10.6, 4, 5], ["academy", "fa", "academy", "ARNO Academy", "آموزش پروژه‌محور ساختمان.", 8.8, 4, 4], ["architecture", "fa", "service", "طراحی معماری | ARNO", "از تحلیل زمین و برنامه فیزیکی تا کانسپت، فاز یک و دو، نما و طراحی داخلی.", 9.8, 4, 5], ["article-award-ready", "fa", "article", "طراحی برای دیده‌شدن، بدون طراحی صرفاً برای جایزه | ARNO", "پروژه‌ای که قابلیت دیده‌شدن و داوری دارد معمولاً ایده روشن، پاسخ مرتبط به زمینه، انسجام فنی و مستندسازی عالی دارد. دنبال‌کردن یک ترفند بصری از ساخت دا", 11.0, 3, 5], ["article-bms-value", "fa", "article", "BMS به‌عنوان ابزار بهره‌برداری، نه مجموعه‌ای از نمایشگرها | ARNO", "سیستم مدیریت ساختمان زمانی ارزش ایجاد می‌کند که حسگر، تجهیزات، هشدار، برنامه زمانی و تصمیم بهره‌برداری را به هم متصل کند. داده بیشتر لزوماً هوشمندی بی", 11.0, 3, 5], ["article-buildability", "fa", "article", "ساخت‌پذیری؛ تصمیم‌های طراحی که زمان کارگاه را نجات می‌دهند | ARNO", "جزئیات زیبا وقتی ارزش دارد که بتوان آن را با مصالح موجود، توالی اجرایی روشن و تلرانس قابل کنترل ساخت. ساخت‌پذیری یعنی واقعیت‌های کارگاه، دسترسی، تداخل", 11.2, 3, 5], ["article-concrete-readiness", "fa", "article", "آمادگی بتن‌ریزی؛ یک گیت قبل از اجرا، نه چک دقیقه نود | ARNO", "بازبینی قبل از بتن‌ریزی باید آن‌قدر زود انجام شود که اصلاح ایرادها بدون معطل‌کردن تراک امکان‌پذیر باشد. آرماتور، کاور، قطعات مدفون، غلاف‌ها، پایداری ق", 11.0, 3, 5], ["article-delivery-model", "fa", "article", "انتخاب مدل اجرای پروژه؛ سطح کنترل را با ریسک هماهنگ کنید | ARNO", "مدیریت پیمان، پیمان عمومی، طراحی-ساخت و مشارکت، ریسک، اطلاعات و حق تصمیم‌گیری را متفاوت توزیع می‌کنند. هیچ مدل واحدی برای همه پروژه‌ها بهترین نیست.", 10.9, 3, 5], ["article-facade-buildability", "fa", "article", "طراحی نما؛ هویت، آب، حرکت و نگهداری | ARNO", "نما هم‌زمان تصویر ساختمان، پوسته محیطی و یک سیستم قابل نگهداری است. بازبینی طراحی باید مسیر آب، حرکت حرارتی، زهکشی، اتصالات، تلرانس، امکان تعویض و دست", 10.7, 3, 5], ["article-handover", "fa", "article", "تحویل پروژه از هفته آخر شروع نمی‌شود | ARNO", "تحویل یک فرآیند است نه یک رویداد. فهرست تجهیزات، نتایج تست و راه‌اندازی، نقشه‌های As-Built، ضمانت‌ها، آموزش و Punch List باید به‌تدریج جمع شوند.", 10.6, 3, 5], ["article-lean-lookahead", "fa", "article", "Lean Construction؛ چرا Lookahead شش‌هفته‌ای رفتار کارگاه را عوض می‌کند | ARNO", "برنامه کلان مقصد را نشان می‌دهد؛ Lookahead کار را قابل اجرا می‌کند. تیم پیش‌نیازها، محدودیت‌ها، اطلاعات، مصالح و تداخل پیمانکاران را قبل از ورود فعالی", 10.9, 3, 5], ["article-management-contract", "fa", "article", "مدیریت پیمان؛ شفافیت فراتر از درصد حق‌الزحمه | ARNO", "مدیریت پیمان زمانی واقعاً شفاف است که خرید، تأییدها، فاکتورها، دامنه پیمانکاران جزء، برنامه زمان‌بندی و تغییرات قابل ردیابی باشند. درصد مدیریت فقط یک", 11.0, 3, 5], ["article-mep-coordination", "fa", "article", "هماهنگی تأسیسات قبل از نازک‌کاری؛ هزینه تصمیم دیرهنگام | ARNO", "سقف‌ها، آشپزخانه، سرویس‌ها و نما مناطق متراکم تداخل هستند. تصمیم دیرهنگام به تخریب، لکه‌گیری، مصالحه بصری و تأخیر منجر می‌شود. ترازها، دریچه‌های دسترس", 11.0, 3, 5], ["article-partnership-due-diligence", "fa", "article", "پیش از مذاکره مشارکت در ساخت چه چیزهایی باید روشن شود؟ | ARNO", "مذاکرات مشارکت معمولاً با درصد شروع می‌شوند؛ درحالی‌که فرآیند حرفه‌ای از واقعیت‌ها آغاز می‌شود: وضعیت مالکیت، ظرفیت زمین، سطح کیفیت، توان مالی، زمان،", 11.1, 3, 5], ["article-permit-path", "fa", "article", "پروژه آماده اخذ مجوز؛ سازماندهی اطلاعات پیش از ارائه | ARNO", "مسیر مجوز بسته به شهر، نوع پروژه و مقررات روز متفاوت است. بااین‌حال تیم پروژه می‌تواند با سازماندهی مدارک مالکیت، نقشه‌برداری، مسئولیت‌های طراحی، مطال", 10.9, 3, 5], ["article-plan-efficiency", "fa", "article", "کارایی پلان فقط نسبت سطح مفید به ناخالص نیست | ARNO", "پلان کارآمد فقط راهرو را کم نمی‌کند؛ نور، مبلمان، حریم، دسترسی تأسیسات، انعطاف و انتظار بازار را هم حل می‌کند. یک پلان کوچک اما حل‌شده می‌تواند از پلا", 10.8, 3, 5], ["article-rebar-control", "fa", "article", "کنترل میلگرد ورودی؛ از پلاک تا نتیجه آزمایش | ARNO", "کنترل میلگرد ورودی باید مدارک تحویل، مشخصات حک‌شده، قطرها، شرایط انبارش و الزامات پروژه را به هم متصل کند. هرجا آزمایش لازم است، هویت نمونه باید از مح", 10.9, 3, 5], ["article-renovation-before-demolition", "fa", "article", "بازسازی پیش از تخریب؛ پنج تصمیمی که باید اول بسته شوند | ARNO", "تخریب حس شروع پروژه می‌دهد اما می‌تواند پروژه را وارد ابهام کند. قبل از شروع، وضع موجود ثبت، اجزای حفظ‌شونده مشخص، مسیر تأسیسات بررسی، بودجه تصمیم‌گیر", 11.0, 3, 5], ["article-roof-control", "fa", "article", "کنترل اجرای سقف؛ خطا را قبل از تکرار متوقف کنید | ARNO", "کارهای تکرارشونده سازه‌ای می‌توانند یک اشتباه کوچک را در کل طبقه تکثیر کنند. پیش از بستن سیستم سقف، هندسه، تکیه‌گاه‌ها، بازشوها، عبور تأسیسات، لبه‌ها", 10.9, 3, 5], ["article-site-feasibility", "fa", "article", "قبل از اولین اسکیس؛ چارچوب امکان‌سنجی زمین | ARNO", "اولین حرکت معماری باید بعد از یک سؤال توسعه‌ای باشد: این زمین واقعاً چه ظرفیت قابل دفاعی دارد؟ هندسه، دسترسی، همجواری، ضوابط، پارکینگ، ریسک گود، لجستی", 11.0, 3, 5], ["article-site-qc", "fa", "article", "سیستم عملی کنترل کیفیت کارگاه؛ قبل از پوشاندن کنترل کن | ARNO", "گران‌ترین ایرادها معمولاً زمانی کشف می‌شوند که کار پوشانده شده است. سیستم QC باید نقاط توقف مشخصی قبل از بتن‌ریزی، پوشش عایق، سقف کاذب، کف‌سازی، نما و", 11.0, 3, 5], ["article-supervision-role", "fa", "article", "نظارت مؤثر؛ گزارشی که به تصمیم منجر شود | ARNO", "گزارش نظارت مفید باید ایراد، محل، مرجع کنترل، ریسک، مسئول، مهلت و مدرک بسته‌شدن را مشخص کند. بدون پیگیری Closure، یک ایراد می‌تواند هفته‌ها تکرار شود.", 10.7, 3, 5], ["article-survey-control", "fa", "article", "نقشه‌برداری به‌عنوان لایه کنترل؛ قبل از ساخت، فرض را اندازه بگیر | ARNO", "اطلاعات نقشه‌برداری طراحی و اجرا را به واقعیت متصل می‌کند. حدود، ترازها، انتقال آکس، کنترل نما، As-Built و پایش نشست همگی به اندازه‌گیری قابل ردیابی و", 10.9, 3, 5], ["construction", "fa", "service", "اجرا و مدیریت ساخت | ARNO", "مدیریت پیمان، برنامه‌ریزی، تدارکات، کنترل کیفیت و تحویل مستند.", 9.7, 4, 5], ["contact", "fa", "contact", "تماس با آرنو", "ارتباط با گروه مهندسین آرنو.", 8.4, 3, 4], ["development", "fa", "service", "مشارکت و توسعه | ARNO", "امکان‌سنجی، سناریوی اقتصادی، ساختار همکاری و توسعه ارزش ملک.", 9.4, 4, 5], ["engineering", "fa", "service", "خدمات مهندسی | ARNO", "نقشه‌برداری، هماهنگی خدمات آزمایشگاهی، BMS، مدارک و خدمات پروژه.", 9.5, 4, 5], ["index", "fa", "home", "گروه مهندسین آرنو | طراحی، اجرا و توسعه", "معرفی گروه مهندسین آرنو و خدمات طراحی معماری، اجرا، مدیریت ساخت، مشارکت، بازسازی و آموزش.", 20.0, 9, 24], ["insights", "fa", "insights", "مقالات تخصصی آرنو", "مقالات اختصاصی معماری و ساختمان آرنو.", 19.2, 3, 24], ["partnership", "fa", "partnership", "مشارکت و توسعه | آرنو", "امکان‌سنجی، سناریوی اقتصادی، ساختار همکاری و توسعه ارزش ملک.", 9.5, 4, 5], ["project-commercial-study", "fa", "project", "مطالعه توسعه تجاری | ARNO", "توسعه / مطالعه کانسپت", 8.9, 4, 5], ["project-renovation-study", "fa", "project", "مطالعه بازسازی جردن | ARNO", "بازسازی / مطالعه کانسپت", 8.9, 4, 5], ["project-residence-no1", "fa", "project", "مطالعه مسکونی ۰۱ | ARNO", "معماری / مطالعه کانسپت", 8.8, 4, 5], ["project-urban-office", "fa", "project", "مطالعه دفتر شهری | ARNO", "مطالعه معماری + اجرا", 8.8, 4, 5], ["project-urban-residence", "fa", "project", "مطالعه مجتمع شهری | ARNO", "اجرا / مطالعه کانسپت", 8.8, 4, 5], ["project-villa-no2", "fa", "project", "مطالعه ویلایی ۰۲ | ARNO", "معماری / مطالعه کانسپت", 8.8, 4, 5], ["projects", "fa", "projects", "پروژه‌ها | آرنو", "آرشیو پروژه‌ها و مطالعات طراحی آرنو.", 9.0, 3, 10], ["qualified-executor", "fa", "service", "مجری ذی‌صلاح | ARNO", "ساختار اجرایی و مسئولیت‌پذیری فنی در چارچوب مجوزهای معتبر پروژه.", 9.6, 4, 5], ["renovation", "fa", "service", "بازسازی | ARNO", "بازطراحی، برآورد، هماهنگی تأسیسات، خرید و اجرای یکپارچه.", 9.5, 4, 5], ["services", "fa", "services", "خدمات گروه مهندسین آرنو", "طراحی، اجرا، مجری ذی‌صلاح، کنترل کیفیت، مشارکت، بازسازی، خدمات مهندسی و آموزش.", 9.8, 3, 12], ["supervision", "fa", "service", "کنترل و نظارت پروژه | ARNO", "کنترل روند اجرا، نقاط بازرسی، گزارش‌های QC و پیگیری اصلاحات.", 9.6, 4, 5], ["about", "en", "about", "About ARNO Engineers Group", "ARNO Engineers Group approach and identity.", 9.6, 4, 5], ["academy", "en", "academy", "ARNO Academy", "Project-led construction education.", 8.0, 4, 4], ["architecture", "en", "service", "Architecture Design | ARNO", "From site analysis and program to concept, detailed design, façade and interiors.", 8.8, 4, 5], ["article-award-ready", "en", "article", "Designing for Recognition Without Designing for Awards | ARNO", "Award-ready work usually has a clear idea, a relevant response to context, technical coherence and excellent documentation. Chasing a visual trick is", 9.4, 3, 5], ["article-bms-value", "en", "article", "BMS as an Operational Tool, Not a Collection of Screens | ARNO", "A building management system creates value when it links sensors, equipment, alarms, schedules and operating decisions. More data is not automatically", 9.4, 3, 5], ["article-buildability", "en", "article", "Buildability: The Design Decisions That Save Time on Site | ARNO", "A beautiful detail that cannot be procured, coordinated or installed reliably is not a resolved detail. Buildability brings the realities of sequencin", 9.6, 3, 5], ["article-concrete-readiness", "en", "article", "Concrete Pour Readiness: A Pre-Pour Gate, Not a Last-Minute Check | ARNO", "A pre-pour review should happen early enough to correct issues without delaying the truck. Reinforcement, cover, embeds, sleeves, formwork stability,", 9.5, 3, 5], ["article-delivery-model", "en", "article", "Choosing the Project Delivery Model: Match Control to Risk | ARNO", "Management contracting, general contracting, design-build and partnership structures distribute risk, information and decision rights differently. No", 9.4, 3, 5], ["article-facade-buildability", "en", "article", "Façade Design: Identity, Water, Movement and Maintenance | ARNO", "A façade is simultaneously an image, an environmental separator and a maintained construction system. Design reviews should consider water paths, ther", 9.5, 3, 5], ["article-handover", "en", "article", "Handover Starts Before the Last Week | ARNO", "Handover is a process, not an event. Asset registers, test records, commissioning results, as-built drawings, warranties, training and punch lists sho", 9.3, 3, 5], ["article-lean-lookahead", "en", "article", "Lean Construction: Why a Six-Week Lookahead Changes Site Behavior | ARNO", "A master schedule shows destination; a lookahead makes work executable. Teams identify prerequisites, constraints, information needs, materials and tr", 9.4, 3, 5], ["article-management-contract", "en", "article", "Management Contracting: Transparency Beyond a Fee Percentage | ARNO", "A management-contract model only becomes transparent when procurement, approvals, invoices, subcontractor scope, schedule and changes are traceable. T", 9.6, 3, 5], ["article-mep-coordination", "en", "article", "MEP Coordination Before Finishes: The Cost of Late Decisions | ARNO", "Ceilings, kitchens, bathrooms and façades are dense interface zones. Late decisions create cutting, patching, visible compromises and schedule disrupt", 9.5, 3, 5], ["article-partnership-due-diligence", "en", "article", "Partnership Due Diligence: What to Clarify Before Negotiation | ARNO", "Partnership conversations often start with percentages. A more disciplined process starts with facts: title and ownership status, site capacity, deliv", 9.6, 3, 5], ["article-permit-path", "en", "article", "A Permit-Ready Project: Organizing Information Before Submission | ARNO", "Permit pathways vary by city, project type and current regulations. The project team can still reduce friction by organizing ownership documents, surv", 9.5, 3, 5], ["article-plan-efficiency", "en", "article", "Plan Efficiency Is More Than a Net-to-Gross Ratio | ARNO", "An efficient plan reduces unnecessary circulation, but efficiency also includes daylight, furniture logic, privacy, service access, adaptability and m", 9.4, 3, 5], ["article-rebar-control", "en", "article", "Incoming Rebar Control: From Tag to Test Result | ARNO", "Incoming material control should connect delivery documents, bar markings, diameters, storage conditions and project specifications. Where testing is", 9.5, 3, 5], ["article-renovation-before-demolition", "en", "article", "Renovation Before Demolition: Five Decisions to Freeze First | ARNO", "Demolition feels like progress, but it can lock a project into uncertainty. Before starting, document existing conditions, define retained elements, s", 9.6, 3, 5], ["article-roof-control", "en", "article", "Roof Execution Control: Coordination Before Repetition Multiplies Error | ARNO", "Repetitive structural work can multiply a small coordination mistake across an entire floor. Before closing a roof system, review geometry, supports,", 9.5, 3, 5], ["article-site-feasibility", "en", "article", "Before the First Sketch: A Site Feasibility Framework | ARNO", "The first architectural move should follow a development question: what can this site realistically support? Geometry, access, neighboring conditions,", 9.6, 3, 5], ["article-site-qc", "en", "article", "A Practical Site QC System: Inspect Before You Conceal | ARNO", "The most expensive defects are often the ones discovered after work is hidden. A practical QC system defines hold points before concrete, waterproofin", 9.5, 3, 5], ["article-supervision-role", "en", "article", "Supervision That Produces Decisions, Not Just Reports | ARNO", "A useful supervision report identifies the issue, location, reference requirement, risk, responsible party, deadline and closure evidence. Without clo", 9.4, 3, 5], ["article-survey-control", "en", "article", "Surveying as a Control Layer: Verify Before You Build on Assumptions | ARNO", "Survey information anchors design and execution to reality. Site boundaries, levels, grid transfer, façade control, as-built records and settlement mo", 9.4, 3, 5], ["construction", "en", "service", "Construction & Delivery | ARNO", "Construction management, procurement, quality control and documented handover.", 8.7, 4, 5], ["contact", "en", "contact", "Contact ARNO", "Contact ARNO Engineers Group.", 7.6, 3, 4], ["development", "en", "service", "Development & Partnership | ARNO", "Feasibility, project economics, partnership structuring and value development.", 8.6, 4, 5], ["engineering", "en", "service", "Engineering Services | ARNO", "Surveying, laboratory coordination, BMS, documentation and project services.", 8.7, 4, 5], ["index", "en", "home", "ARNO Engineers Group | Architecture, Construction & Development", "ARNO Engineers Group: architecture, construction, development, renovation and project-led education.", 18.0, 9, 24], ["insights", "en", "insights", "ARNO Insights", "Original ARNO architecture and construction insights.", 15.3, 3, 24], ["partnership", "en", "partnership", "Partnership & Development | ARNO", "Feasibility, project economics, partnership structuring and value development.", 8.6, 4, 5], ["project-commercial-study", "en", "project", "Commercial Development Study | ARNO", "Development / Concept Study", 8.0, 4, 5], ["project-renovation-study", "en", "project", "Jordan Renovation Study | ARNO", "Renovation / Concept Study", 8.0, 4, 5], ["project-residence-no1", "en", "project", "Residential Study 01 | ARNO", "Architecture / Concept Study", 8.0, 4, 5], ["project-urban-office", "en", "project", "Urban Office Study | ARNO", "Architecture + Construction Study", 8.0, 4, 5], ["project-urban-residence", "en", "project", "Urban Residence Study | ARNO", "Construction / Concept Study", 8.0, 4, 5], ["project-villa-no2", "en", "project", "Villa Study 02 | ARNO", "Architecture / Concept Study", 7.9, 4, 5], ["projects", "en", "projects", "Projects | ARNO", "ARNO project archive and design studies.", 8.3, 3, 10], ["qualified-executor", "en", "service", "Qualified Executor | ARNO", "Technical execution and accountable delivery within project-specific legal authorizations.", 8.8, 4, 5], ["renovation", "en", "service", "Renovation | ARNO", "Redesign, budgeting, MEP coordination, procurement and integrated execution.", 8.7, 4, 5], ["services", "en", "services", "ARNO Engineers Group Services", "Architecture, construction, qualified execution, QC, development, renovation, engineering services and education.", 9.0, 3, 12], ["supervision", "en", "service", "Project Supervision & QC | ARNO", "Execution reviews, inspection points, QC reporting and corrective-action tracking.", 8.7, 4, 5]];   /* [slug, lang, type, title, kb, sections, images] */
  var AUDIT = {"pages": 82, "images": 506, "sections": 290, "forms": 2, "altFixed": 252};         /* {pages, images, sections, forms, altFixed} */

  var LS = 'arno_admin_settings_v1';
  var LSM = 'arno_admin_msgs_v1';
  var LSUnlock = 'arno_admin_unlocked';

  /* ---------------- helpers ---------------- */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var FA_D = '۰۱۲۳۴۵۶۷۸۹';
  var toFa = function (n) { return String(n).replace(/\d/g, function (d) { return FA_D[+d]; }); };
  var pageKey = (function () {
    var m = location.pathname.match(/(fa|en)\/([a-z0-9-]+?)(\.html)?$/i);
    return m ? m[1] + '/' + m[2] : 'index';
  })();
  var lang = pageKey.indexOf('fa/') === 0 ? 'fa' : 'en';

  var REG_BY_KEY = {};
  REGISTRY.forEach(function (r) { REG_BY_KEY[r[1] + '/' + r[0]] = { title: r[3], desc: r[4], type: r[2] }; });

  var ICONS = {
    dash: '<rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.2"/><rect x="13" y="3.5" width="7.5" height="4.5" rx="1.2"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1.2"/><rect x="13" y="10" width="7.5" height="10.5" rx="1.2"/>',
    sliders: '<path d="M4 8h10M18 8h2M4 16h4M12 16h8"/><circle cx="16" cy="8" r="2.2"/><circle cx="10" cy="16" r="2.2"/>',
    pages: '<path d="M7 3.5h7l4 4v13H7z"/><path d="M14 3.5V8h4"/><path d="M10 12h5M10 15.5h5M10 19h3"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>',
    layers: '<path d="M12 3.5 21 8l-9 4.5L3 8z"/><path d="M3 12.5 12 17l9-4.5"/><path d="M3 16.8 12 21.3l9-4.5"/>',
    inbox: '<path d="M3.5 13.5h5l1.5 2.5h4l1.5-2.5h5"/><path d="M5 5.5h14l1.5 8v7h-17v-7z"/>',
    palette: '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.4 0 2-.8 2-1.7 0-1.9 1.3-1.8 2.7-1.8H19a2.5 2.5 0 0 0 2.5-2.5c0-6.4-4-11-9.5-11z"/><circle cx="8" cy="9.5" r="1.1"/><circle cx="12.5" cy="7.5" r="1.1"/><circle cx="16.5" cy="10" r="1.1"/>',
    gear: '<circle cx="12" cy="12" r="3.1"/><path d="M12 2.9v2.3M12 18.8v2.3M2.9 12h2.3M18.8 12h2.3M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/>',
    eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
    pencil: '<path d="M4 20l1-4L16.5 4.5a1.8 1.8 0 0 1 2.6 0l.4.4a1.8 1.8 0 0 1 0 2.6L8 19z"/><path d="M14.5 6.5l3 3"/>',
    trash: '<path d="M4 6.5h16M9 6.5V4.5h6v2M6.5 6.5l1 13.5h9l1-13.5"/><path d="M10 10.5v6M14 10.5v6"/>',
    down: '<path d="M12 3.5v12M7 11l5 5 5-5M4 20.5h16"/>',
    up: '<path d="M12 20.5v-12M7 13l5-5 5 5M4 3.5h16"/>',
    ext: '<path d="M9 4.5h10.5V15"/><path d="M19.5 4.5 8 16"/><path d="M14 4.5H4.5V19.5H19V10"/>',
    search: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15.5 15.5 21 21"/>'
  };
  var ico = function (k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[k] + '</svg>'; };

  /* ---------------- state ---------------- */
  function defaults() {
    return {
      pin: '1234',
      site: { phone: '021 7780 5206', email: 'info@arnoarc.com', web: 'www.arnoarc.com', insta: '@arno_civil' },
      theme: { accent: '', preloader: false, noise: false, cursor: false },
      hideFormNote: false,
      footerNote: '',
      seo: {},
      texts: {},
      hidden: { articles: [], projects: [], nav: [] },
      msgsSeen: 0
    };
  }
  function loadS() { try { var s = JSON.parse(localStorage.getItem(LS)); return s && typeof s === 'object' ? Object.assign(defaults(), s) : defaults(); } catch (e) { return defaults(); } }
  function loadM() { try { return JSON.parse(localStorage.getItem(LSM)) || []; } catch (e) { return []; } }
  var S = loadS();
  var save = function () { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} };
  var toastT = null;
  function toast(txt) {
    var t = $('.aa-toast');
    if (!t) { t = document.createElement('div'); t.className = 'aa-toast'; document.body.appendChild(t); }
    t.textContent = txt;
    requestAnimationFrame(function () { t.classList.add('show'); });
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  /* ---------------- apply overrides (every page load) ---------------- */
  var ACCENTS = {
    '': null,
    gold: ['#c6a05f', '#e2c381'],
    champagne: ['#d1b48c', '#ecd0a5'],
    bronze: ['#a8783c', '#cfa469'],
    copper: ['#c07a4a', '#e2a276'],
    silver: ['#a9a9a5', '#d5d5d0']
  };
  function applyTheme() {
    var st = $('#arno-admin-style');
    if (!st) { st = document.createElement('style'); st.id = 'arno-admin-style'; document.head.appendChild(st); }
    var rules = [];
    var acc = ACCENTS[S.theme.accent];
    if (acc) rules.push(':root{--gold:' + acc[0] + ';--gold2:' + acc[1] + ';--line:rgba(198,160,95,.28)}');
    if (S.theme.preloader) rules.push('.preloader{display:none!important}html.is-loading{overflow:auto!important}');
    if (S.theme.noise) rules.push('.noise{display:none!important}');
    if (S.theme.cursor) rules.push('.cursor,.cursor-dot{display:none!important}');
    st.textContent = rules.join('\n');
    if (S.theme.preloader) { var p = $('.preloader'); if (p) { p.classList.add('out'); p.style.display = 'none'; document.documentElement.classList.remove('is-loading'); } }
  }
  function applySite() {
    var ph = S.site.phone || '', digits = ph.replace(/[^\d+]/g, '');
    $$('a[href^="tel:"]').forEach(function (a) {
      if (digits) a.setAttribute('href', 'tel:' + digits);
      var v = a.querySelector('.c-val');
      if (v) v.textContent = ph; else a.textContent = ph;
    });
    if (S.site.email) $$('a[href^="mailto:"]').forEach(function (a) { a.setAttribute('href', 'mailto:' + S.site.email); a.textContent = S.site.email; });
    if (S.site.web) $$('a[href="https://www.arnoarc.com"]').forEach(function (a) { a.textContent = S.site.web; });
    if (S.site.insta) $$('a[href*="instagram.com/arno"]').forEach(function (a) { a.textContent = S.site.insta; });
    if (S.footerNote) $$('.footer-bottom span:last-child').forEach(function (s) { s.textContent = S.footerNote; });
    $$('.form-note').forEach(function (n) { n.style.display = S.hideFormNote ? 'none' : ''; });
  }
  function applySeo() {
    var o = S.seo[pageKey];
    if (!o) return;
    if (o.title) {
      document.title = o.title;
      var og = $('meta[property="og:title"]'), tw = $('meta[name="twitter:title"]');
      if (og) og.setAttribute('content', o.title);
      if (tw) tw.setAttribute('content', o.title);
    }
    if (o.desc) {
      var md = $('meta[name="description"]');
      if (md) md.setAttribute('content', o.desc);
      var od = $('meta[property="og:description"]'), td = $('meta[name="twitter:description"]');
      if (od) od.setAttribute('content', o.desc);
      if (td) td.setAttribute('content', o.desc);
    }
  }
  function slugOf(href) { var m = String(href || '').match(/([a-z0-9-]+)\.html/i); return m ? m[1] : ''; }
  function applyHidden() {
    $$('.article-card').forEach(function (c) {
      var a = c.getAttribute('href') || (c.querySelector('a') && c.querySelector('a').getAttribute('href')) || '';
      if (S.hidden.articles.indexOf(slugOf(a)) >= 0) c.style.display = 'none';
    });
    $$('.project-card').forEach(function (c) {
      var a = c.getAttribute('href') || '';
      if (S.hidden.projects.indexOf(slugOf(a)) >= 0) c.style.display = 'none';
    });
    S.hidden.nav.forEach(function (slug) {
      $$('.nav a[href$="' + slug + '.html"], .mobile-menu a[href$="' + slug + '.html"]').forEach(function (a) { a.style.display = 'none'; });
    });
  }
  function applyTexts() {
    var map = S.texts[pageKey];
    if (!map) return;
    Object.keys(map).forEach(function (key) {
      var parts = key.split('||');
      var sel = parts[0], idx = parseInt(parts[1] || '0', 10);
      var el = $$(sel)[idx];
      if (el) el.innerHTML = map[key];
    });
  }

  /* ---------------- editable registry (live edit) ---------------- */
  var EDITABLES = [
    ['.hero h1, .page-hero h1', 'عنوان اصلی (Hero)', true],
    ['.hero-copy p, .page-hero p', 'متن زیر عنوان', false],
    ['.eyebrow, .page-hero .index', 'برچسب بالای عنوان', false],
    ['.section-head h2', 'عنوان بخش‌ها', false],
    ['.cta h2', 'عنوان بخش دعوت', false],
    ['.cta p', 'متن بخش دعوت', false],
    ['.footer-bottom span:last-child', 'یادداشت پاورقی', false]
  ];
  function collectEditables() {
    var out = [];
    EDITABLES.forEach(function (d) {
      $$(d[0]).forEach(function (el, i) {
        if (!el || el.closest('.aa-panel') || el.closest('.aa-lock')) return;
        out.push({ el: el, key: d[0] + '||' + i, label: d[1] + ($$(d[0]).length > 1 ? ' ' + toFa(i + 1) : ''), rich: d[2] });
      });
    });
    return out;
  }
  var editing = false, editBar = null;
  function enterEdit() {
    closePanel();
    var cands = collectEditables();
    editing = true;
    document.documentElement.classList.add('arno-editing');
    cands.forEach(function (c, i) { c.el.setAttribute('data-aa-edit', i); });
    editBar = document.createElement('div');
    editBar.className = 'aa-editbar';
    editBar.innerHTML = '<span>حالت ویرایش زنده — ' + toFa(cands.length) + ' مورد قابل ویرایش روی این صفحه</span>';
    var done = document.createElement('button');
    done.className = 'aa-btn gold'; done.textContent = 'پایان ویرایش';
    done.addEventListener('click', exitEdit);
    editBar.appendChild(done);
    document.body.appendChild(editBar);
    document.body.addEventListener('click', onEditClick, true);
    toast('روی هر عنصر دورخط‌دار کلیک کنید');
  }
  function exitEdit() {
    editing = false;
    document.documentElement.classList.remove('arno-editing');
    $$('[data-aa-edit]').forEach(function (el) { el.removeAttribute('data-aa-edit'); });
    if (editBar) { editBar.remove(); editBar = null; }
    document.body.removeEventListener('click', onEditClick, true);
    closePop();
    toast('ویرایش این صفحه ذخیره شد');
  }
  var pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function onEditClick(e) {
    var el = e.target.closest && e.target.closest('[data-aa-edit]');
    if (!el || pop && pop.contains(e.target)) return;
    e.preventDefault(); e.stopPropagation();
    closePop();
    var cands = collectEditables();
    var c = cands[+el.getAttribute('data-aa-edit')];
    if (!c) return;
    pop = document.createElement('div');
    pop.className = 'aa-pop';
    pop.innerHTML = '<div class="aa-pop-t"><b>' + esc(c.label) + '</b><button class="aa-mini" type="button">بستن</button></div>' +
      '<textarea></textarea>' +
      '<label class="aa-html"><input type="checkbox"> حفظ کد HTML (برای عنوان‌های چندرنگ)</label>' +
      '<div class="aa-pop-a"><button class="aa-btn ghost" type="button">انصراف</button><button class="aa-btn gold" type="button">ذخیره</button></div>';
    var ta = pop.querySelector('textarea');
    ta.value = c.el.innerHTML;
    var htmlChk = pop.querySelector('.aa-html input');
    htmlChk.checked = !!c.rich;
    pop.querySelector('.aa-pop-t button').addEventListener('click', closePop);
    pop.querySelector('.aa-pop-a .ghost').addEventListener('click', closePop);
    pop.querySelector('.aa-pop-a .gold').addEventListener('click', function () {
      var val = ta.value.trim();
      if (!val) { toast('متن خالی است'); return; }
      c.el.innerHTML = val;
      S.texts[pageKey] = S.texts[pageKey] || {};
      S.texts[pageKey][c.key] = val;
      save(); toast('ذخیره شد');
      closePop();
    });
    document.body.appendChild(pop);
    var r = el.getBoundingClientRect();
    pop.style.top = Math.min(Math.max(r.bottom + window.scrollY + 10, 20), document.body.scrollHeight - 320) + 'px';
    pop.style.insetInlineStart = '';
    pop.style.insetInlineEnd = '24px';
    ta.focus();
  }

  /* ---------------- lock screen ---------------- */
  var lockEl = null, pinBuf = '';
  function openLock() {
    if (sessionStorage.getItem(LSUnlock) === '1') { openPanel(); return; }
    if (lockEl) { lockEl.classList.add('show'); try { if (window.__arnoLenis) window.__arnoLenis.stop(); } catch (e) {} return; }
    lockEl = document.createElement('div');
    lockEl.className = 'aa-lock';
    lockEl.setAttribute('data-lenis-prevent', ''); /* native scroll inside lock screen */
    lockEl.innerHTML =
      '<div class="aa-lock-card">' +
      '<button class="aa-lock-close" type="button" aria-label="بستن">✕</button>' +
      '<div class="aa-mono"><img src="' + logoSrc() + '" alt="ARNO"></div>' +
      '<h2>پنل مدیریت آرنو</h2>' +
      '<p class="aa-sub">برای ورود، کد چهاررقمی نسخه‌ی آزمایشی را وارد کنید</p>' +
      '<div class="aa-dots"><i></i><i></i><i></i><i></i></div>' +
      '<div class="aa-pad"></div>' +
      '<div class="aa-hint">کد نسخه تستی: <b>' + esc(S.pin) + '</b></div>' +
      '<div class="aa-err"></div>' +
      '</div>';
    var pad = lockEl.querySelector('.aa-pad');
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', '✕'].forEach(function (k) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = k;
      b.addEventListener('click', function () { padPress(k); });
      pad.appendChild(b);
    });
    lockEl.querySelector('.aa-lock-close').addEventListener('click', closeLock);
    lockEl.addEventListener('click', function (e) { if (e.target === lockEl) closeLock(); });
    document.body.appendChild(lockEl);
    document.body.classList.add('aa-open');
    requestAnimationFrame(function () { lockEl.classList.add('show'); });
    document.addEventListener('keydown', onLockKey);
  }
  function closeLock() {
    if (!lockEl) return;
    lockEl.classList.remove('show');
    startLenis();
    setTimeout(function () { if (lockEl) { lockEl.remove(); lockEl = null; } }, 420);
    document.removeEventListener('keydown', onLockKey);
    if (!$('.aa-panel')) document.body.classList.remove('aa-open');
    pinBuf = '';
  }
  function onLockKey(e) {
    if (/^[0-9]$/.test(e.key)) padPress(e.key);
    else if (e.key === 'Backspace') padPress('⌫');
    else if (e.key === 'Escape') closeLock();
  }
  function padPress(k) {
    if (!lockEl) return;
    if (k === '⌫') pinBuf = pinBuf.slice(0, -1);
    else if (k === '✕') { pinBuf = ''; }
    else if (pinBuf.length < 4) pinBuf += k;
    var dots = lockEl.querySelectorAll('.aa-dots i');
    dots.forEach(function (d, i) { d.classList.toggle('f', i < pinBuf.length); });
    if (pinBuf.length === 4) {
      setTimeout(function () {
        if (pinBuf === String(S.pin)) {
          sessionStorage.setItem(LSUnlock, '1');
          closeLock();
          openPanel();
        } else {
          var err = lockEl.querySelector('.aa-err');
          if (err) err.textContent = 'کد نادرست است — دوباره تلاش کنید';
          pinBuf = '';
          dots.forEach(function (d) { d.classList.remove('f'); });
          var card = lockEl.querySelector('.aa-lock-card');
          card.style.transform = 'translateX(0)';
          card.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-9px)' }, { transform: 'translateX(9px)' }, { transform: 'translateX(0)' }], { duration: 320, iterations: 1 });
        }
      }, 160);
    } else {
      var err = lockEl.querySelector('.aa-err');
      if (err) err.textContent = '';
    }
  }

  /* ---------------- panel ---------------- */
  var panelEl = null, view = 'dash';
  var NAVS = [
    ['dash', 'داشبورد', 'dash'],
    ['content', 'محتوای سایت', 'sliders'],
    ['pages', 'صفحات', 'pages'],
    ['articles', 'مقالات', 'book'],
    ['projects', 'پروژه‌ها', 'layers'],
    ['messages', 'پیام‌ها', 'inbox'],
    ['appearance', 'ظاهر و تم', 'palette'],
    ['settings', 'تنظیمات', 'gear']
  ];
  var VIEW_TITLES = { dash: 'داشبورد', content: 'محتوای سایت', pages: 'مدیریت صفحات', articles: 'مدیریت مقالات', projects: 'مدیریت پروژه‌ها', messages: 'پیام‌های دریافتی', appearance: 'ظاهر و تم', settings: 'تنظیمات', articleNew: 'ساخت مقاله جدید', projectNew: 'ساخت پروژه جدید' };

  function logoSrc() {
    var l = $('.header .logo img, .logo img');
    return (l && l.getAttribute('src')) || 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27/%3E';
  }
  function newMsgs() { var m = loadM(); return Math.max(0, m.length - (S.msgsSeen || 0)); }

  function openPanel() {
    if (panelEl) { panelEl.classList.add('show'); document.body.classList.add('aa-open'); stopLenis(); render(); return; }
    panelEl = document.createElement('div');
    panelEl.className = 'aa-panel';
    panelEl.setAttribute('data-lenis-prevent', ''); /* Lenis: let the panel scroll natively */
    panelEl.innerHTML =
      '<div class="aa-shell">' +
      '<aside class="aa-side">' +
      '<div class="aa-brand"><img src="' + logoSrc() + '" alt="ARNO"><div><b>پنل مدیریت آرنو</b><span>نسخه آزمایشی · v4.8</span></div></div>' +
      '<nav class="aa-nav"></nav>' +
      '<div class="aa-side-foot">تمام تغییرات فقط در مرورگر شما ذخیره می‌شود.<br>اتصال به سرور در نسخه‌ی نهایی فعال خواهد شد.<br><b>ARNO Admin · Test</b></div>' +
      '</aside>' +
      '<div class="aa-main">' +
      '<div class="aa-top"><h1 id="aa-title">داشبورد</h1><span class="aa-save"><i></i>ذخیره خودکار فعال</span>' +
      '<div class="aa-top-actions">' +
      '<button class="aa-btn" id="aa-edit-live" type="button">' + ico('pencil') + '<span>ویرایش زنده صفحه</span></button>' +
      '<button class="aa-btn ghost" id="aa-close" type="button">مشاهده سایت</button>' +
      '</div></div>' +
      '<div class="aa-body" id="aa-body"></div>' +
      '</div></div>';
    document.body.appendChild(panelEl);
    document.body.classList.add('aa-open');
    stopLenis();
    requestAnimationFrame(function () { panelEl.classList.add('show'); });
    var nav = panelEl.querySelector('.aa-nav');
    NAVS.forEach(function (n) {
      var b = document.createElement('button');
      b.type = 'button'; b.dataset.v = n[0];
      b.innerHTML = ico(n[2]) + '<span>' + n[1] + '</span>';
      b.addEventListener('click', function () { view = n[0]; render(); });
      nav.appendChild(b);
    });
    panelEl.querySelector('#aa-close').addEventListener('click', closePanel);
    panelEl.querySelector('#aa-edit-live').addEventListener('click', enterEdit);
    document.addEventListener('keydown', onPanelKey);
    render();
  }
  function stopLenis() { try { if (window.__arnoLenis) window.__arnoLenis.stop(); } catch (e) {} }
  function startLenis() { try { if (window.__arnoLenis) window.__arnoLenis.start(); } catch (e) {} }

  function closePanel() {
    if (!panelEl) return;
    panelEl.classList.remove('show');
    startLenis();
    setTimeout(function () { if (panelEl && !panelEl.classList.contains('show')) { panelEl.remove(); panelEl = null; } }, 460);
    document.body.classList.remove('aa-open');
    document.removeEventListener('keydown', onPanelKey);
  }
  function onPanelKey(e) { if (e.key === 'Escape') closePanel(); }

  function render() {
    if (!panelEl) return;
    $$('.aa-nav button', panelEl).forEach(function (b) { b.classList.toggle('on', b.dataset.v === view); });
    var t = $('#aa-title'); if (t) t.textContent = VIEW_TITLES[view];
    var body = $('#aa-body'); if (!body) return;
    body.scrollTop = 0;
    body.innerHTML = '';
    var v = document.createElement('div');
    v.className = 'aa-view on';
    if (view === 'dash') vDash(v);
    else if (view === 'content') vContent(v);
    else if (view === 'pages') vPages(v);
    else if (view === 'articles') vArticles(v);
    else if (view === 'projects') vProjects(v);
    else if (view === 'messages') vMessages(v);
    else if (view === 'appearance') vAppearance(v);
    else if (view === 'settings') vSettings(v);
    else if (view === 'articleNew') vBuilder(v, 'article');
    else if (view === 'projectNew') vBuilder(v, 'project');
    body.appendChild(v);
  }
  function reRender() { render(); }


  /* ---------------- v4.8: Article / Project builder ---------------- */
  var LSD = 'arno_admin_drafts_v1';
  var BD = null;
  function loadD() { try { return JSON.parse(localStorage.getItem(LSD)) || []; } catch (e) { return []; } }
  function saveD(l) { try { localStorage.setItem(LSD, JSON.stringify(l)); } catch (e) {} }
  var IMGS = ['about.webp','article-01.webp','article-02.webp','article-03.webp','article-04.webp','article-05.webp','article-06.webp','article-07.webp','article-08.webp','article-09.webp','article-10.webp','article-11.webp','article-12.webp','article-13.webp','article-14.webp','article-15.webp','article-16.webp','article-17.webp','article-18.webp','article-19.webp','article-20.webp','building.webp','commercial.webp','construction.webp','corridor.webp','green.webp','hero.webp','interior1.webp','interior2.webp','interior3.webp','niavaran.webp','office.webp','og-cover.jpg','portfolio.webp','portfolioInterior.webp','renovation.webp','villa.webp','villa2.webp'];
  function imgList(sel) { return '<datalist id="aa-imglist">' + IMGS.map(function (n) { return '<option value="../assets/images/' + n + '">'; }).join('') + '</datalist>'; }
  function imgField(label, val, k) { return '<div class="aa-field"><label>' + esc(label) + '</label><input list="aa-imglist" value="' + esc(val) + '" data-k="' + k + '"></div>'; }
  function hashChips(kw) {
    return String(kw || '').split(/[،,]/).map(function (s) { return s.trim(); }).filter(Boolean)
      .map(function (k) { return '<span class="aa-hash">#' + esc(k.replace(/\s+/g, '_')) + '</span>'; }).join('');
  }
  function ps(p) {
    return String(p || '').trim().split(/\n\s*\n/).filter(Boolean).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
  }
  function safeSlug(s) { return String(s || '').trim().toLowerCase().replace(/[^\w\-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'page'; }
  function draftCard(type) {
    var list = loadD().filter(function (d) { return d.type === type; });
    if (!list.length) return '';
    return '<div class="aa-card"><h3>' + ico('book') + 'پیش‌نویس‌های ذخیره‌شده (' + toFa(list.length) + ')</h3>' + list.map(function (d) {
      var title = d.data.h1 || d.data.seoT || d.data.slug;
      return '<div class="aa-switch-row"><div class="aa-sw-txt"><b>' + esc(title) + '</b><span class="aa-meta"><span>' + esc(String(d.data.savedAt || '').slice(0, 10)) + '</span></span></div>' +
        '<div style="display:flex;gap:8px;flex:none"><button class="aa-mini" data-dd="' + d.id + '" data-da="open" type="button">ادامه</button>' +
        '<button class="aa-mini" data-dd="' + d.id + '" data-da="dl" type="button">دانلود</button>' +
        '<button class="aa-mini danger" data-dd="' + d.id + '" data-da="del" type="button">حذف</button></div></div>';
    }).join('') + '</div>';
  }
  function wireDraftButtons(root) {
    root.querySelectorAll('[data-dd]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.dataset.dd, act = b.dataset.da, l = loadD(), rec = null;
        for (var i = 0; i < l.length; i++) if (l[i].id === id) rec = l[i];
        if (!rec) return;
        if (act === 'open') { BD = rec.data; BD.type = rec.type; view = rec.type === 'article' ? 'articleNew' : 'projectNew'; render(); }
        else if (act === 'dl') { var keep = BD; BD = rec.data; BD.type = rec.type; bDownload(); BD = keep; }
        else { saveD(l.filter(function (x) { return x.id !== id; })); render(); toast('پیش‌نویس حذف شد'); }
      });
    });
  }
  function draftArticle() {
    return { type: 'article', lang: 'fa', slug: 'article-new-topic', seoT: '', seoD: '', kw: '', og: '../assets/images/og-cover.jpg',
      label: '', h1: '', sub: '', heroImg: '../assets/images/article-01.webp', intro: '',
      blocks: [{ t: 'h', h: '', p: '' }] };
  }
  function draftProject() {
    return { type: 'project', lang: 'fa', slug: 'project-new-study', seoT: '', seoD: '', kw: '', og: '../assets/images/og-cover.jpg',
      label: 'SELECTED CONCEPT STUDY', h1: '', sub: 'معماری / مطالعه کانسپت', heroImg: '../assets/images/villa.webp',
      storyH: '', lead: '', whyH: '', whyP: '', storyImg: '../assets/images/villa.webp',
      fLabel: 'CASE STUDY STRUCTURE', fH2: 'زمینه ← مسئله ← تصمیم ← اجرا ← نتیجه',
      features: [{ h: 'زمینه', p: 'موقعیت، برنامه، محدودیت‌ها و اهداف کارفرما.' }, { h: 'راهکار طراحی', p: '' }, { h: 'ساخت‌پذیری', p: '' }],
      gallery: [] };
  }
  var CHECK_ICONS = [
    '<rect x="5.5" y="3.2" width="13" height="17.6" rx="1.8"/><path d="M9 8h6M9 12h6M9 16h3.6"/>',
    '<circle cx="12" cy="4.6" r="1.7"/><path d="M10.9 6.2 5.6 19.6M13.1 6.2 18.4 19.6M7.3 15.2a9.6 9.6 0 0 1 9.4 0"/>',
    '<circle cx="9.8" cy="8.3" r="3.4"/><path d="M3.8 19.2c.7-3.2 3-5.1 6-5.1 1.5 0 2.8.45 3.9 1.3"/><circle cx="16.8" cy="16.8" r="4.1"/><path d="M16.8 14.9v1.9l1.4 1.4"/>',
    '<path d="M12 3.6 21.4 20H2.6z"/><path d="M12 9.8v4.4"/><path d="M12 16.9v.2"/>',
    '<path d="M6.8 3.4h7.4l4 4v13.2H6.8z"/><path d="M14.2 3.4V8h4"/><path d="M9.6 14.6l2.1 2.1 3.6-4"/>'
  ];
  var PHONE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 A19.79 19.79 0 0 1 11.19 18.85 19.5 19.5 0 0 1 5.19 12.85 19.79 19.79 0 0 1 2.08 4.18 A2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11 L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7 A2 2 0 0 1 22 16.92z"/></svg>';
  var CHROME = {
    fa: {
      nav: [['index.html', 'خانه'], ['about.html', 'درباره آرنو'], ['services.html', 'خدمات'], ['projects.html', 'پروژه‌ها'], ['partnership.html', 'مشارکت و توسعه'], ['academy.html', 'آکادمی'], ['insights.html', 'مقالات'], ['contact.html', 'تماس']],
      activeNav: { article: 'insights.html', project: 'projects.html' },
      langLabel: 'EN', iconAria: 'تماس با آرنو', menuAria: ['باز کردن منو', 'بستن منو'],
      cta: { idx: 'ARNO / START A PROJECT', h2: 'بیایید چیزی بسازیم که ماندگار باشد.', p: 'برای طراحی، اجرا، مدیریت پیمان، مشارکت در ساخت یا بازسازی، اطلاعات اولیه پروژه را برای تیم آرنو ارسال کنید.', b1: 'شروع پروژه', b2: 'مشارکت در ساخت' },
      footH: ['ارتباط', 'شرکت', 'خدمات'], footCompany: [['about.html', 'درباره ما'], ['projects.html', 'پروژه‌ها'], ['academy.html', 'آکادمی'], ['insights.html', 'مقالات']],
      footSvc: [['architecture.html', 'طراحی معماری'], ['construction.html', 'اجرا و مدیریت ساخت'], ['qualified-executor.html', 'مجری ذی‌صلاح'], ['supervision.html', 'کنترل و نظارت پروژه'], ['development.html', 'مشارکت در ساخت'], ['renovation.html', 'بازسازی']],
      footNote: 'مطالب فنی و مقرراتی باید متناسب با شرایط و ضوابط روز هر پروژه راستی‌آزمایی شوند.',
      imgAltA: 'تصویر مقاله: ', imgAltP: 'تصویر پروژه: ', dir: 'rtl'
    },
    en: {
      nav: [['index.html', 'Home'], ['about.html', 'About'], ['services.html', 'Services'], ['projects.html', 'Projects'], ['partnership.html', 'Development'], ['academy.html', 'Academy'], ['insights.html', 'Insights'], ['contact.html', 'Contact']],
      activeNav: { article: 'insights.html', project: 'projects.html' },
      langLabel: 'FA', iconAria: 'Contact ARNO', menuAria: ['Open menu', 'Close menu'],
      cta: { idx: 'ARNO / START A PROJECT', h2: 'Let\u2019s build something that lasts.', p: 'For architecture, construction, management contracting, development partnership or renovation, send ARNO your initial project brief.', b1: 'Start a project', b2: 'Partnership' },
      footH: ['Contact', 'Company', 'Services'], footCompany: [['about.html', 'About'], ['projects.html', 'Projects'], ['academy.html', 'Academy'], ['insights.html', 'Insights']],
      footSvc: [['architecture.html', 'Architecture Design'], ['construction.html', 'Construction & Delivery'], ['qualified-executor.html', 'Qualified Executor'], ['supervision.html', 'Project Supervision & QC'], ['development.html', 'Development & Partnership'], ['renovation.html', 'Renovation']],
      footNote: 'Technical and regulatory content must be verified for each project and current local requirements.',
      imgAltA: 'Article image — ', imgAltP: 'Project image — ', dir: 'ltr'
    }
  };
  function genHead(d, ch, kind) {
    var t = d.seoT || ((d.h1 || d.slug) + ' | ARNO');
    var de = d.seoD || String(d.intro || d.lead || '').slice(0, 158);
    var base = 'https://www.arnoarc.com/' + d.lang + '/' + safeSlug(d.slug) + '.html';
    var kw = String(d.kw || '').trim();
    return '<!doctype html><html lang="' + d.lang + '" dir="' + ch.dir + '" class="no-js"><head><meta charset="utf-8"><script>document.documentElement.classList.remove("no-js")</script><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#090a0a"><link rel="stylesheet" href="../assets/css/site.css"><link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32.png"><link rel="apple-touch-icon" href="../assets/images/favicon-180.png"><meta name="author" content="ARNO Engineers Group">' +
      (kw ? '<meta name="keywords" content="' + esc(kw) + '">' : '') +
      '<title>' + esc(t) + '</title><meta name="description" content="' + esc(de) + '"><link rel="preload" href="../assets/fonts/Vazirmatn-var.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" as="image" href="' + esc(d.heroImg) + '" fetchpriority="high"><meta property="og:site_name" content="ARNO Engineers Group"><meta property="og:type" content="article"><meta property="og:title" content="' + esc(t) + '"><meta property="og:description" content="' + esc(de) + '"><meta property="og:url" content="' + base + '"><meta property="og:image" content="' + esc(d.og) + '"><meta property="og:locale" content="' + (d.lang === 'fa' ? 'fa_IR' : 'en_US') + '"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' + esc(t) + '"><meta name="twitter:description" content="' + esc(de) + '"><meta name="twitter:image" content="' + esc(d.og) + '"><link rel="canonical" href="' + base + '"><link rel="alternate" hreflang="' + d.lang + '" href="' + base + '"><link rel="alternate" hreflang="' + (d.lang === 'fa' ? 'en' : 'fa') + '" href="https://www.arnoarc.com/' + (d.lang === 'fa' ? 'en' : 'fa') + '/' + safeSlug(d.slug) + '.html"><link rel="alternate" hreflang="x-default" href="https://www.arnoarc.com/"></head>';
  }
  function genHeader(d, ch, kind) {
    var nav = ch.nav.map(function (n) { return '<a class="' + (n[0] === ch.activeNav[kind] ? 'active' : '') + '" href="' + n[0] + '">' + n[1] + '</a>'; }).join('');
    var mm = ch.nav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '<a href="../' + (d.lang === 'fa' ? 'en' : 'fa') + '/' + safeSlug(d.slug) + '.html">' + ch.langLabel + '</a>';
    return '<body><noscript><style>.preloader{display:none!important}.cursor,.cursor-dot{display:none!important}</style></noscript><div id="progress"></div><div class="noise"></div><div class="cursor"></div><div class="cursor-dot"></div><div class="preloader"><div class="preloader-inner"><img src="../assets/images/logo-white.png" alt="ARNO Engineers Group"><div class="preline"><span></span></div></div></div><header class="header"><div class="header-inner"><a class="logo" href="index.html"><img src="../assets/images/logo-white.png" alt="ARNO Engineers Group"></a><nav class="nav">' + nav + '</nav><div class="header-actions"><a class="lang" href="../' + (d.lang === 'fa' ? 'en' : 'fa') + '/' + safeSlug(d.slug) + '.html">' + ch.langLabel + '</a><a class="icon-btn" href="contact.html" aria-label="' + ch.iconAria + '" title="' + ch.iconAria + '">' + PHONE_SVG + '</a><button class="menu-toggle" aria-label="' + ch.menuAria[0] + '" aria-expanded="false"><span></span><span></span></button></div></div></header><div class="mobile-menu">' + mm + '</div>';
  }
  function genCtaFooter(d, ch) {
    return '<section class="cta"><div class="wrap reveal"><div><div class="index">' + ch.cta.idx + '</div><h2 class="duo">' + esc(ch.cta.h2) + '</h2></div><div><p>' + esc(ch.cta.p) + '</p><div class="actions"><a class="btn" href="contact.html"><span>' + ch.cta.b1 + '</span><b>↗</b></a><a class="btn" href="development.html"><span>' + ch.cta.b2 + '</span><b>↗</b></a></div></div></div></section>' +
      '<footer class="footer"><div class="wrap"><div class="footer-top"><div class="footer-logo"><img loading="lazy" decoding="async" src="../assets/images/logo-white.png" alt="ARNO"><p class="muted">Architecture · Construction · Development · Education</p></div><div><h4>' + ch.footH[0] + '</h4><a href="tel:+982177805206">021 7780 5206</a><a href="https://www.arnoarc.com">www.arnoarc.com</a><a href="https://www.instagram.com/arno_civil" target="_blank" rel="noopener">@arno_civil</a><a href="mailto:info@arnoarc.com">info@arnoarc.com</a></div><div><h4>' + ch.footH[1] + '</h4>' + ch.footCompany.map(function (x) { return '<a href="' + x[0] + '">' + x[1] + '</a>'; }).join('') + '</div><div><h4>' + ch.footH[2] + '</h4>' + ch.footSvc.map(function (x) { return '<a href="' + x[0] + '">' + x[1] + '</a>'; }).join('') + '</div></div><div class="footer-bottom"><span>© <span data-year></span> ARNO Engineers Group</span><span>' + ch.footNote + '</span></div></div></footer><script src="../assets/js/vendor/gsap.min.js" defer></script><script src="../assets/js/vendor/ScrollTrigger.min.js" defer></script><script src="../assets/js/vendor/lenis.min.js" defer></script><script src="../assets/js/site.js" defer></script></body></html>';
  }
  function buildArticleHTML(d) {
    var ch = CHROME[d.lang] || CHROME.fa;
    var alt = ch.imgAltA + (d.h1 || d.slug);
    var blocks = (d.blocks || []).map(function (b) {
      if (b.t === 'img') return '<div class="image-frame reveal-image" style="min-height:430px;margin:45px 0"><img loading="lazy" decoding="async" src="' + esc(b.src || '../assets/images/article-01.webp') + '" alt="' + esc(b.alt || alt) + '"></div>';
      if (b.t === 'note') return '<div class="article-note">' + esc(b.p) + '</div>';
      if (b.t === 'check') {
        var items = String(b.items || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
        if (!items.length) return '';
        return '<div class="reveal"><h2>' + esc(b.h || 'چک‌لیست تصمیم') + '</h2><ul class="check-list">' + items.map(function (t, i) {
          return '<li class="check-item"><span class="c-ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + CHECK_ICONS[i % CHECK_ICONS.length] + '</svg></span><p>' + esc(t) + '</p></li>';
        }).join('') + '</ul></div>';
      }
      var ps = ps_join(b.p);
      if (!b.h && !ps) return '';
      return '<div class="reveal">' + (b.h ? '<h2>' + esc(b.h) + '</h2>' : '') + ps + '</div>';
    }).join('');
    return genHead(d, ch, 'article') + genHeader(d, ch, 'article') +
      '<section class="page-hero article-hero"><div class="bg"><img fetchpriority="high" decoding="async" src="' + esc(d.heroImg) + '" alt="' + esc(alt) + '" data-parallax=".035"></div><div class="wrap"><div class="index">' + esc(d.label || 'ARNO INSIGHT') + '</div><h1 class="duo">' + esc(d.h1) + '</h1><p>' + esc(d.sub) + '</p></div></section>' +
      '<section class="section"><article class="article-body"><p class="intro reveal">' + esc(d.intro) + '</p>' + blocks + '</article></section>' +
      genCtaFooter(d, ch);
  }
  function ps_join(p) { return ps(p); }
  function buildProjectHTML(d) {
    var ch = CHROME[d.lang] || CHROME.fa;
    var alt = ch.imgAltP + (d.h1 || d.slug);
    var feats = (d.features || []).filter(function (f) { return f.h || f.p; }).map(function (f) {
      return '<div class="feature"><h3>' + esc(f.h) + '</h3><p>' + esc(f.p) + '</p></div>';
    }).join('');
    var gal = (d.gallery || []).filter(function (g) { return g.src; }).map(function (g) {
      return '<section class="section" style="padding-top:0"><div class="wrap"><div class="image-frame reveal-image" style="min-height:430px"><img loading="lazy" decoding="async" src="' + esc(g.src) + '" alt="' + esc(g.alt || alt) + '"></div></div></section>';
    }).join('');
    return genHead(d, ch, 'project') + genHeader(d, ch, 'project') +
      '<section class="page-hero"><div class="bg"><img fetchpriority="high" decoding="async" src="' + esc(d.heroImg) + '" alt="' + esc(alt) + '" data-parallax=".035"></div><div class="wrap"><div class="index">' + esc(d.label || 'SELECTED CONCEPT STUDY') + '</div><h1 class="duo">' + esc(d.h1) + '</h1><p>' + esc(d.sub) + '</p></div></section>' +
      '<section class="section story-dark"><div class="wrap split"><div class="reveal"><div class="index">PROJECT STORY</div><h2 class="duo">' + esc(d.storyH) + '</h2><p class="lead">' + esc(d.lead) + '</p><div class="why-note"><span class="why-note-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 3.2h8.3l3.7 3.7v13.9H6.2z"/><path d="M14.5 3.2v3.7h3.7"/><path d="M9.5 11.5h5"/><path d="M9.5 14.6h5"/><path d="M9.5 17.7h3"/></svg></span><div><h3>' + esc(d.whyH) + '</h3><p>' + esc(d.whyP) + '</p></div></div></div><div class="image-frame reveal-image"><img loading="lazy" decoding="async" src="' + esc(d.storyImg) + '" alt="' + esc(alt) + '"></div></div></section>' +
      '<section class="section"><div class="wrap"><div class="section-head reveal"><div class="index">' + esc(d.fLabel || 'CASE STUDY STRUCTURE') + '</div><h2 class="duo">' + esc(d.fH2) + '</h2></div><div class="feature-grid stagger">' + feats + '</div></div></section>' + gal +
      genCtaFooter(d, ch);
  }
  function builderHTML() { return BD.type === 'article' ? buildArticleHTML(BD) : buildProjectHTML(BD); }
  function bPreview() {
    if (!BD) return;
    var w = window.open('', '_blank');
    if (!w) { toast('مرورگر اجازه بازکردن تب نداد'); return; }
    var u = URL.createObjectURL(new Blob([builderHTML()], { type: 'text/html' }));
    w.location.href = u;
    toast('پیش‌نمایش در تب جدید باز شد');
  }
  function bDownload() {
    if (!BD) return;
    var name = safeSlug(BD.slug) + '.html';
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([builderHTML()], { type: 'text/html' }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    toast('فایل ' + name + ' دانلود شد — در پوشه fa/ یا en/ قرار دهید');
  }
  function bSaveDraft() {
    if (!BD) return;
    if (!BD.draftId) BD.draftId = 'd' + Date.now();
    BD.savedAt = new Date().toISOString();
    var l = loadD(), i = -1;
    for (var k = 0; k < l.length; k++) if (l[k].id === BD.draftId) i = k;
    var rec = { id: BD.draftId, type: BD.type, data: BD };
    if (i >= 0) l[i] = rec; else l.push(rec);
    saveD(l);
    toast('پیش‌نویس ذخیره شد');
  }
  function seoSide() {
    var base = 'https://www.arnoarc.com/<span id="aa-can-l">' + esc(BD.lang) + '</span>/<span id="aa-can-s">' + esc(safeSlug(BD.slug)) + '</span>.html';
    return '<div class="aa-card aa-seo-card"><h3>' + ico('sliders') + 'منوی سئو (SEO)</h3>' +
      '<div class="aa-field"><label>نام فایل (slug)</label><input value="' + esc(BD.slug) + '" data-k="slug"><p class="aa-note" style="margin:6px 0 0">آدرس نهایی: ' + base + '</p></div>' +
      '<div class="aa-field"><label>عنوان سئو (Meta Title — مثال: طراحی برای دیده‌شدن، بدون طراحی صرفاً برای جایزه | ARNO)</label><input value="' + esc(BD.seoT) + '" data-k="seoT"></div>' +
      '<div class="aa-field"><label>توضیح سئو (Meta Description — ۱۵۰ تا ۱۶۰ کاراکتر)</label><textarea data-k="seoD">' + esc(BD.seoD) + '</textarea></div>' +
      '<div class="aa-field"><label>کلمات کلیدی و هشتگ‌ها (با ویرگول جدا کنید — مثل: طراحی معماری، داوری معماری، مستندسازی پروژه)</label><input value="' + esc(BD.kw) + '" data-k="kw" id="aa-kw"><div id="aa-hash-preview" style="margin-top:8px">' + hashChips(BD.kw) + '</div><p class="aa-note" style="margin:8px 0 0">در متای صفحه اعمال می‌شود و پیش‌نویس کپشن شبکه‌های اجتماعی هم هست.</p></div>' +
      imgField('تصویر OG (پیش‌نمایش اشتراک‌گذاری)', BD.og, 'og') +
      '<div class="aa-field"><label>زبان صفحه</label><select data-k="lang"><option value="fa"' + (BD.lang === 'fa' ? ' selected' : '') + '>فارسی (fa/)</option><option value="en"' + (BD.lang === 'en' ? ' selected' : '') + '>English (en/)</option></select></div>' +
      '<p class="aa-note">همه‌ی فیلدها در <code>&lt;head&gt;</code> صفحه‌ی خروجی (title, description, keywords, OG, Twitter, canonical, hreflang) اعمال می‌شوند.</p></div>';
  }
  function toolbar(type) {
    var isA = type === 'article';
    return '<div class="aa-btool"><button class="aa-btn ghost" id="aa-bback" type="button">بازگشت</button><b style="color:var(--white);font-size:14px">' + (isA ? 'ساخت مقاله جدید' : 'ساخت پروژه جدید') + '</b><button class="aa-btn ghost" id="aa-bseo" type="button">منوی سئو ↑↓</button><div style="margin-inline-start:auto;display:flex;gap:10px;flex-wrap:wrap"><button class="aa-btn ghost" id="aa-bdraft" type="button">ذخیره پیش‌نویس</button><button class="aa-btn" id="aa-bdl" type="button">دانلود HTML</button><button class="aa-btn gold" id="aa-bprev" type="button">پیش‌نمایش صفحه</button></div></div>';
  }
  function heroCard(type) {
    var isA = type === 'article';
    return '<div class="aa-card"><h3>' + ico('pages') + '۱ — سرصفحه (Hero)</h3>' +
      '<div class="aa-row"><div class="aa-field"><label>برچسب بالای عنوان — مثال: ARNO INSIGHT / فرهنگ طراحی</label><input value="' + esc(BD.label) + '" data-k="label"></div>' +
      '<div class="aa-field"><label>تصویر بزرگ صفحه</label><input list="aa-imglist" value="' + esc(BD.heroImg) + '" data-k="heroImg"></div></div>' +
      '<div class="aa-field"><label>عنوان اصلی (H1) — مثال: طراحی برای دیده‌شدن، بدون طراحی صرفاً برای جایزه</label><input value="' + esc(BD.h1) + '" data-k="h1"></div>' +
      '<div class="aa-field"><label>زیرعنوان — مثال: ' + (isA ? 'فرهنگ طراحی' : 'معماری / مطالعه کانسپت') + '</label><input value="' + esc(BD.sub) + '" data-k="sub"></div></div>';
  }
  function blockRow(b, i) {
    var head = '<div class="aa-bblock-head"><b>' + (b.t === 'h' ? 'بخش متنی' : b.t === 'img' ? 'تصویر میانی' : b.t === 'check' ? 'چک‌لیست' : 'یادداشت') + '</b>' +
      '<button class="aa-mini" data-bmv="-1" data-bidx="' + i + '" type="button">↑</button><button class="aa-mini" data-bmv="1" data-bidx="' + i + '" type="button">↓</button><button class="aa-mini danger" data-bdel="' + i + '" type="button">حذف</button></div>';
    if (b.t === 'h') return '<div class="aa-bblock">' + head + '<div class="aa-field"><label>تیتر بخش (H2) — مثال: چرا این موضوع مهم است؟</label><input value="' + esc(b.h) + '" data-bi="' + i + '" data-bk="h"></div><div class="aa-field"><label>متن بخش (پاراگراف‌ها را با یک خط خالی جدا کنید)</label><textarea data-bi="' + i + '" data-bk="p">' + esc(b.p) + '</textarea></div></div>';
    if (b.t === 'img') return '<div class="aa-bblock">' + head + '<div class="aa-row">' + '<div class="aa-field"><label>تصویر</label><input list="aa-imglist" value="' + esc(b.src || '') + '" data-bi="' + i + '" data-bk="src"></div><div class="aa-field"><label>متن جایگزین تصویر (Alt)</label><input value="' + esc(b.alt || '') + '" data-bi="' + i + '" data-bk="alt"></div></div></div>';
    if (b.t === 'check') return '<div class="aa-bblock">' + head + '<div class="aa-field"><label>تیتر چک‌لیست (پیش‌فرض: چک‌لیست تصمیم)</label><input value="' + esc(b.h) + '" data-bi="' + i + '" data-bk="h"></div><div class="aa-field"><label>موارد چک‌لیست (هر مورد در یک خط — با آیکون‌های اختصاصی آرنو رندر می‌شود)</label><textarea data-bi="' + i + '" data-bk="items">' + esc(b.items || '') + '</textarea></div></div>';
    return '<div class="aa-bblock">' + head + '<div class="aa-field"><label>متن یادداشت (کادر طلایی پایین مقاله — مثل یادداشت آموزشی/حقوقی)</label><textarea data-bi="' + i + '" data-bk="p">' + esc(b.p) + '</textarea></div></div>';
  }
  function vBuilder(root, type) {
    if (!BD || BD.type !== type) { BD = type === 'article' ? draftArticle() : draftProject(); BD.type = type; }
    var isA = type === 'article';
    var main;
    if (isA) {
      main = heroCard(type) +
        '<div class="aa-card"><h3>' + ico('book') + '۲ — مقدمه و بدنه مقاله</h3>' +
        '<div class="aa-field"><label>مقدمه (کادر ویژه ابتدای مقاله) — مثال: پروژه‌ای که قابلیت دیده‌شدن و داوری دارد معمولاً ایده روشن و مستندسازی عالی دارد…</label><textarea data-k="intro">' + esc(BD.intro) + '</textarea></div>' +
        '<div class="aa-btype"><span class="aa-note" style="margin:0">افزودن بخش:</span><button class="aa-mini" data-badd="h" type="button">＋ تیتر و متن</button><button class="aa-mini" data-badd="img" type="button">＋ تصویر</button><button class="aa-mini" data-badd="check" type="button">＋ چک‌لیست</button><button class="aa-mini" data-badd="note" type="button">＋ یادداشت</button></div>' +
        '<div id="aa-blocks">' + (BD.blocks || []).map(blockRow).join('') + '</div></div>';
    } else {
      main = heroCard(type) +
        '<div class="aa-card"><h3>' + ico('layers') + '۲ — داستان پروژه (PROJECT STORY)</h3>' +
        '<div class="aa-field"><label>تیتر داستان (H2) — مثال: یک مطالعه برای نشان‌دادن روش تصمیم‌گیری آرنو.</label><input value="' + esc(BD.storyH) + '" data-k="storyH"></div>' +
        '<div class="aa-field"><label>متن اصلی (Lead) — داستان، چالش و راهکار پروژه</label><textarea data-k="lead">' + esc(BD.lead) + '</textarea></div>' +
        '<div class="aa-row"><div class="aa-field"><label>تیتر کادر نکته (Why-note)</label><input value="' + esc(BD.whyH) + '" data-k="whyH"></div>' +
        '<div class="aa-field"><label>تصویر کنار داستان</label><input list="aa-imglist" value="' + esc(BD.storyImg) + '" data-k="storyImg"></div></div>' +
        '<div class="aa-field"><label>متن کادر نکته</label><textarea data-k="whyP">' + esc(BD.whyP) + '</textarea></div></div>' +
        '<div class="aa-card"><h3>' + ico('gear') + '۳ — ساختار کیس‌استادی</h3>' +
        '<div class="aa-row"><div class="aa-field"><label>برچسب بخش — پیش‌فرض: CASE STUDY STRUCTURE</label><input value="' + esc(BD.fLabel) + '" data-k="fLabel"></div>' +
        '<div class="aa-field"><label>تیتر ساختار — مثال: زمینه ← مسئله ← تصمیم ← اجرا ← نتیجه</label><input value="' + esc(BD.fH2) + '" data-k="fH2"></div></div>' +
        '<div id="aa-feats">' + (BD.features || []).map(function (f, i) {
          return '<div class="aa-bblock"><div class="aa-bblock-head"><b>ویژگی ' + toFa(i + 1) + '</b><button class="aa-mini danger" data-fdel="' + i + '" type="button">حذف</button></div><div class="aa-field"><label>تیتر</label><input value="' + esc(f.h) + '" data-fi="' + i + '" data-fk="h"></div><div class="aa-field"><label>توضیح</label><textarea data-fi="' + i + '" data-fk="p">' + esc(f.p) + '</textarea></div></div>';
        }).join('') + '</div>' +
        '<button class="aa-mini" data-fadd="1" type="button">＋ ویژگی</button></div>' +
        '<div class="aa-card"><h3>' + ico('pages') + '۴ — گالری تصاویر (اختیاری)</h3>' +
        '<div id="aa-gal">' + (BD.gallery || []).map(function (g, i) {
          return '<div class="aa-bblock"><div class="aa-bblock-head"><b>تصویر ' + toFa(i + 1) + '</b><button class="aa-mini danger" data-gdel="' + i + '" type="button">حذف</button></div><div class="aa-row"><div class="aa-field"><label>تصویر</label><input list="aa-imglist" value="' + esc(g.src) + '" data-gi="' + i + '" data-gk="src"></div><div class="aa-field"><label>Alt</label><input value="' + esc(g.alt) + '" data-gi="' + i + '" data-gk="alt"></div></div></div>';
        }).join('') + '</div>' +
        '<button class="aa-mini" data-gadd="1" type="button">＋ تصویر گالری</button></div>';
    }
    root.innerHTML = toolbar(type) + '<div class="aa-grid2">' + '<div>' + main + '</div>' + seoSide() + '</div>' + imgList();
    /* --- bind simple fields --- */
    root.querySelectorAll('[data-k]').forEach(function (el) {
      el.addEventListener('input', function () {
        BD[el.dataset.k] = el.value;
        if (el.dataset.k === 'kw') { var pv = root.querySelector('#aa-hash-preview'); if (pv) pv.innerHTML = hashChips(el.value); }
        if (el.dataset.k === 'slug' || el.dataset.k === 'lang') {
          var l = root.querySelector('#aa-can-l'), s = root.querySelector('#aa-can-s');
          if (l) l.textContent = BD.lang; if (s) s.textContent = safeSlug(BD.slug);
        }
      });
      if (el.tagName === 'SELECT') el.addEventListener('change', function () { BD[el.dataset.k] = el.value; var l = root.querySelector('#aa-can-l'); if (l) l.textContent = BD.lang; });
    });
    /* --- bind block fields --- */
    root.querySelectorAll('[data-bi]').forEach(function (el) {
      var i = +el.dataset.bi, k = el.dataset.bk;
      el.addEventListener('input', function () {
        var v = el.value;
        BD.blocks[i][k] = (k === 'items') ? v.split('\n').join('\n') : v;
      });
    });
    root.querySelectorAll('[data-fi]').forEach(function (el) { var i = +el.dataset.fi, k = el.dataset.fk; el.addEventListener('input', function () { BD.features[i][k] = el.value; }); });
    root.querySelectorAll('[data-gi]').forEach(function (el) { var i = +el.dataset.gi, k = el.dataset.gk; el.addEventListener('input', function () { BD.gallery[i][k] = el.value; }); });
    /* --- structural buttons --- */
    root.querySelectorAll('[data-badd]').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.dataset.badd;
        BD.blocks.push(t === 'h' ? { t: 'h', h: '', p: '' } : t === 'img' ? { t: 'img', src: '', alt: '' } : t === 'check' ? { t: 'check', h: '', items: '' } : { t: 'note', p: '' });
        render();
      });
    });
    root.querySelectorAll('[data-bdel]').forEach(function (b) { b.addEventListener('click', function () { BD.blocks.splice(+b.dataset.bdel, 1); render(); }); });
    root.querySelectorAll('[data-bmv]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.dataset.bidx, d = +b.dataset.bmv, j = i + d;
        if (j < 0 || j >= BD.blocks.length) return;
        var tmp = BD.blocks[i]; BD.blocks[i] = BD.blocks[j]; BD.blocks[j] = tmp;
        render();
      });
    });
    var fa = root.querySelector('[data-fadd]'); if (fa) fa.addEventListener('click', function () { BD.features.push({ h: '', p: '' }); render(); });
    root.querySelectorAll('[data-fdel]').forEach(function (b) { b.addEventListener('click', function () { BD.features.splice(+b.dataset.fdel, 1); render(); }); });
    var ga = root.querySelector('[data-gadd]'); if (ga) ga.addEventListener('click', function () { BD.gallery.push({ src: '', alt: '' }); render(); });
    root.querySelectorAll('[data-gdel]').forEach(function (b) { b.addEventListener('click', function () { BD.gallery.splice(+b.dataset.gdel, 1); render(); }); });
    /* --- toolbar actions --- */
    root.querySelector('#aa-bback').addEventListener('click', function () { view = isA ? 'articles' : 'projects'; render(); });
    root.querySelector('#aa-bseo').addEventListener('click', function () {
      var g = root.querySelector('.aa-grid2');
      g.classList.toggle('no-seo');
      toast(g.classList.contains('no-seo') ? 'منوی سئو بسته شد' : 'منوی سئو باز شد');
    });
    root.querySelector('#aa-bdraft').addEventListener('click', bSaveDraft);
    root.querySelector('#aa-bdl').addEventListener('click', bDownload);
    root.querySelector('#aa-bprev').addEventListener('click', bPreview);
    try { if (window.gsap && anim) gsap.from(root.children, { y: 14, opacity: 0, duration: .4, stagger: .06, ease: 'power2.out', overwrite: true }); } catch (e) {}
  }

  /* ---------------- views ---------------- */
  function vDash(root) {
    var msgs = loadM();
    var articles = REGISTRY.filter(function (r) { return r[2] === 'article' && r[1] === 'fa'; }).length;
    var projects = REGISTRY.filter(function (r) { return r[2] === 'project' && r[1] === 'fa'; }).length;
    root.innerHTML =
      '<div class="aa-hero"><span class="aa-tag">نسخه آزمایشی پنل مدیریت</span>' +
      '<h2>خوش آمدید — همه‌ی ' + toFa(AUDIT.pages) + ' صفحه بررسی و به پنل متصل شد.</h2>' +
      '<p>بررسی خط‌به‌خط کامل انجام شد: ' + toFa(AUDIT.images) + ' تصویر (متن جایگزین ' + toFa(AUDIT.altFixed) + ' تصویر تکمیل شد)، ' + toFa(AUDIT.sections) + ' بخش، ' + toFa(AUDIT.forms) + ' فرم تماس. هر موردی که نیازمند تغییر، افزودن یا حذف بود در همین پنل قابل مدیریت است.</p></div>' +
      '<div class="aa-stats">' +
      stat(toFa(AUDIT.pages), 'صفحه (فا + انگلیسی)') +
      stat(toFa(articles), 'مقاله') +
      stat(toFa(projects), 'پروژه') +
      stat(toFa(msgs.length), 'پیام دریافتی') +
      stat(toFa(AUDIT.sections), 'بخش محتوایی') +
      stat(toFa(AUDIT.images), 'تصویر') +
      '</div>' +
      '<div class="aa-grid2">' +
      '<div class="aa-card"><h3>' + ico('sliders') + 'کلیدهای سریع</h3><div id="aa-quick"></div></div>' +
      '<div class="aa-card"><h3>' + ico('inbox') + 'آخرین پیام‌ها</h3><div id="aa-recent"></div></div>' +
      '</div>';
    var q = root.querySelector('#aa-quick');
    q.appendChild(swRow('حذف صفحه‌ی پیش‌بارگذاری (لودینگ)', 'نمایش مستقیم سایت بدون انیمیشن ورود', S.theme.preloader, function (v) { S.theme.preloader = v; save(); applyTheme(); }));
    q.appendChild(swRow('حذف افکت نویز پس‌زمینه', 'لایه‌ی دانه‌ای ظریف روی کل سایت', S.theme.noise, function (v) { S.theme.noise = v; save(); applyTheme(); }));
    q.appendChild(swRow('حذف نشانگر سفارشی موس', 'بازگشت به نشانگر پیش‌فرض مرورگر', S.theme.cursor, function (v) { S.theme.cursor = v; save(); applyTheme(); }));
    q.appendChild(swRow('پنهان‌کردن یادداشت فرم نمایشی', 'متن «این فرم به سرور متصل نیست» زیر فرم تماس', S.hideFormNote, function (v) { S.hideFormNote = v; save(); applySite(); }));
    var rc = root.querySelector('#aa-recent');
    if (!msgs.length) rc.innerHTML = '<div class="aa-empty">' + ico('inbox') + '<br>هنوز پیامی ثبت نشده است.<br>پیام‌های فرم تماس سایت همین‌جا نمایش داده می‌شوند.</div>';
    else msgs.slice(0, 3).forEach(function (m) { rc.appendChild(msgCard(m, false)); });
  }
  function stat(b, s) { return '<div class="aa-stat"><b>' + b + '</b><span>' + s + '</span></div>'; }
  function swRow(t, d, val, cb) {
    var row = document.createElement('div');
    row.className = 'aa-switch-row';
    row.innerHTML = '<div class="aa-sw-txt"><b>' + esc(t) + '</b><span>' + esc(d) + '</span></div>';
    var sw = document.createElement('button');
    sw.type = 'button'; sw.className = 'aa-sw' + (val ? ' on' : '');
    sw.setAttribute('aria-label', t);
    sw.addEventListener('click', function () { val = !val; sw.classList.toggle('on', val); cb(val); toast('ذخیره شد'); });
    row.appendChild(sw);
    return row;
  }

  function field(label, val, id) {
    return '<div class="aa-field"><label>' + esc(label) + '</label><input id="' + id + '" value="' + esc(val) + '"></div>';
  }
  function vContent(root) {
    root.innerHTML =
      '<div class="aa-card"><h3>' + ico('sliders') + 'اطلاعات تماس — در همه‌ی ' + toFa(AUDIT.pages) + ' صفحه اعمال می‌شود</h3>' +
      '<div class="aa-row">' + field('شماره تماس', S.site.phone, 'aa-f-phone') + field('ایمیل', S.site.email, 'aa-f-email') + '</div>' +
      '<div class="aa-row">' + field('وب‌سایت', S.site.web, 'aa-f-web') + field('اینستاگرام', S.site.insta, 'aa-f-insta') + '</div>' +
      '<p class="aa-note">شامل لینک‌های tel و mailto، مقدار صفحه‌ی تماس و پاورقی همه‌ی صفحات.</p></div>' +
      '<div class="aa-card"><h3>' + ico('pages') + 'پاورقی و یادداشت‌ها</h3>' +
      '<div class="aa-field"><label>یادداشت پایین همه‌ی صفحات (خالی = متن فعلی)</label><input id="aa-f-foot" value="' + esc(S.footerNote) + '"></div>' +
      '<div id="aa-f-note"></div></div>' +
      '<div class="aa-card"><h3>' + ico('palette') + 'لوگو</h3>' +
      '<p class="aa-note" style="margin:0 0 14px">فایل لوگو در <code>assets/images/logo-white.png</code> قرار دارد؛ برای تعویض، فایل را با همین نام جایگزین کنید. مسیر سفارشی:</p>' +
      '<div class="aa-field"><label>مسیر تصویر لوگو (اختیاری)</label><input id="aa-f-logo" placeholder="assets/images/logo-white.png" value=""></div></div>';
    bindVal('aa-f-phone', function (v) { S.site.phone = v; });
    bindVal('aa-f-email', function (v) { S.site.email = v; });
    bindVal('aa-f-web', function (v) { S.site.web = v; });
    bindVal('aa-f-insta', function (v) { S.site.insta = v; });
    bindVal('aa-f-foot', function (v) { S.footerNote = v; });
    var note = root.querySelector('#aa-f-note');
    note.appendChild(swRow('پنهان‌کردن یادداشت نسخه‌ی نمایشی فرم', 'متن کوچک زیر فرم تماس', S.hideFormNote, function (v) { S.hideFormNote = v; save(); applySite(); }));
    var sav = document.createElement('button');
    sav.className = 'aa-btn gold'; sav.textContent = 'ذخیره و اعمال روی سایت';
    sav.addEventListener('click', function () { save(); applySite(); applyTheme(); toast('روی همه‌ی صفحات اعمال شد'); });
    root.appendChild(sav);
  }
  function bindVal(id, cb) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function () { cb(el.value); save(); });
  }

  var pageFilter = 'all', pageQuery = '';
  var TYPE_FA = { home: 'اصلی', service: 'خدمات', article: 'مقاله', project: 'پروژه', projects: 'پروژه‌ها', insights: 'مقالات', academy: 'آکادمی', about: 'درباره', contact: 'تماس', partnership: 'مشارکت', other: 'سایر' };
  function vPages(root) {
    root.innerHTML =
      '<div class="aa-toolbar"><div class="aa-search">' + ico('search') + '<input id="aa-pq" placeholder="جست‌وجو بین ۸۲ صفحه…" value="' + esc(pageQuery) + '"></div>' +
      chips(['all', 'fa', 'en', 'service', 'article', 'project'], ['همه', 'فارسی', 'انگلیسی', 'خدمات', 'مقالات', 'پروژه‌ها']) + '</div>' +
      '<div class="aa-card" style="padding:10px 18px" id="aa-plist"></div>';
    root.querySelector('#aa-pq').addEventListener('input', function (e) { pageQuery = e.target.value; renderList(); });
    $$('.aa-chip', root).forEach(function (c) {
      c.addEventListener('click', function () { pageFilter = c.dataset.k; $$('.aa-chip', root).forEach(function (x) { x.classList.toggle('on', x === c); }); renderList(); });
    });
    renderList();
    function renderList() {
      var list = REGISTRY.filter(function (r) {
        if (pageFilter === 'fa' && r[1] !== 'fa') return false;
        if (pageFilter === 'en' && r[1] !== 'en') return false;
        if (['service', 'article', 'project'].indexOf(pageFilter) >= 0 && r[2] !== pageFilter) return false;
        if (pageQuery && (r[3] + ' ' + r[0]).indexOf(pageQuery) < 0 && !fuzzy(r[3] + r[0], pageQuery)) return false;
        return true;
      });
      var host = root.querySelector('#aa-plist');
      host.innerHTML = '';
      if (!list.length) { host.innerHTML = '<div class="aa-empty">موردی پیدا نشد</div>'; return; }
      list.forEach(function (r) { host.appendChild(pageRow(r)); });
    }
  }
  function fuzzy(str, q) { return String(str).toLowerCase().indexOf(q.toLowerCase()) >= 0; }
  function chips(keys, labels) {
    return keys.map(function (k, i) { return '<button class="aa-chip' + (i === 0 ? ' on' : '') + '" data-k="' + k + '" type="button">' + labels[i] + '</button>'; }).join('');
  }
  function pageRow(r) {
    var slug = r[0], lg = r[1], key = lg + '/' + slug;
    var cell = document.createElement('div');
    cell.className = 'aa-pagecell';
    var seo = S.seo[key] || {};
    cell.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap">' +
      '<div style="flex:1;min-width:230px"><b style="color:#e8e4dc;font-size:13px">' + esc(r[3] || slug) + '</b>' +
      '<div class="aa-meta"><span class="aa-lbadge ' + lg + '">' + (lg === 'fa' ? 'FA' : 'EN') + '</span>' +
      '<span class="aa-tbadge">' + (TYPE_FA[r[2]] || r[2]) + '</span>' +
      '<span>' + toFa(r[6]) + ' بخش</span><span>' + toFa(r[7]) + ' تصویر</span><span>' + toFa(r[5]) + ' KB</span></div></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="aa-mini" data-a="view" type="button">' + ico('eye') + 'مشاهده</button>' +
      '<button class="aa-mini" data-a="seo" type="button">SEO</button>' +
      '<button class="aa-mini" data-a="edit" type="button">' + ico('pencil') + 'ویرایش زنده</button>' +
      '</div></div>' +
      '<div class="aa-seo">' +
      '<div class="aa-field"><label>عنوان صفحه (Title) — فعلی: ' + esc((REG_BY_KEY[key] || {}).title || '') + '</label><input data-seo="t" value="' + esc(seo.title || '') + '" placeholder="عنوان سفارشی…"></div>' +
      '<div class="aa-field"><label>توضیحات متا (Description) — فعلی: ' + esc(((REG_BY_KEY[key] || {}).desc || '').slice(0, 70)) + '…</label><textarea data-seo="d" placeholder="توضیح سفارشی…">' + esc(seo.desc || '') + '</textarea></div>' +
      '<button class="aa-btn gold" data-a="seosave" type="button">ذخیره SEO</button>' +
      '</div>';
    cell.querySelector('[data-a=view]').addEventListener('click', function () { window.open(pathOf(key), '_blank'); });
    cell.querySelector('[data-a=seo]').addEventListener('click', function () { cell.querySelector('.aa-seo').classList.toggle('on'); });
    cell.querySelector('[data-a=edit]').addEventListener('click', function () {
      sessionStorage.setItem('arno_edit_go', '1');
      window.open(pathOf(key), '_blank');
    });
    cell.querySelector('[data-a=seosave]').addEventListener('click', function () {
      var t = cell.querySelector('[data-seo=t]').value.trim();
      var d = cell.querySelector('[data-seo=d]').value.trim();
      S.seo[key] = { title: t, desc: d };
      save();
      if (key === pageKey) applySeo();
      toast('SEO ذخیره شد');
    });
    return cell;
  }
  function pathOf(key) {
    var p = key.split('/');
    var base = location.href.replace(/(fa|en)\/[a-z0-9-]+\.html.*$/i, '');
    return base + p[0] + '/' + p[1] + '.html';
  }

  function wireNewButtons(root) {
    var nb = root.querySelector('#aa-new-article');
    if (nb) nb.addEventListener('click', function () { BD = null; view = 'articleNew'; render(); });
    var pb = root.querySelector('#aa-new-project');
    if (pb) pb.addEventListener('click', function () { BD = null; view = 'projectNew'; render(); });
  }

  function vArticles(root) {
    var list = REGISTRY.filter(function (r) { return r[2] === 'article' && r[1] === 'fa'; });
    root.innerHTML = '<div class="aa-btool"><button class="aa-btn gold" id="aa-new-article" type="button">＋ افزودن مقاله جدید</button><span class="aa-note" style="margin:0">مقاله را کامل بسازید: پیش‌نمایش، دانلود HTML و منوی سئو دارد.</span></div>' + draftCard('article') + '<p class="aa-note" style="margin:0 0 16px">خاموش‌کردن هر مقاله، کارت آن را از صفحه‌ی «مقالات» در هر دو زبان حذف می‌کند. تغییر ترتیب و متن مقاله‌ها با «ویرایش زنده» در صفحه‌ی خود مقاله انجام می‌شود.</p><div class="aa-card" style="padding:6px 18px" id="aa-alist"></div>';
    wireDraftButtons(root);
    wireNewButtons(root);
    var host = root.querySelector('#aa-alist');
    list.forEach(function (r) {
      var slug = r[0], key = 'fa/' + slug;
      var row = document.createElement('div');
      row.className = 'aa-switch-row';
      row.innerHTML = '<div class="aa-sw-txt"><b>' + esc(r[3] || slug) + '</b><span class="aa-meta" style="margin-top:2px"><span>' + toFa(r[6]) + ' بخش</span><span>' + toFa(r[5]) + ' KB</span></span></div>';
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'aa-mini' + (S.hidden.articles.indexOf(slug) < 0 ? ' on' : '');
      b.textContent = S.hidden.articles.indexOf(slug) < 0 ? 'نمایش' : 'مخفی';
      b.addEventListener('click', function () {
        var i = S.hidden.articles.indexOf(slug);
        if (i >= 0) { S.hidden.articles.splice(i, 1); b.textContent = 'نمایش'; b.classList.add('on'); }
        else { S.hidden.articles.push(slug); b.textContent = 'مخفی'; b.classList.remove('on'); }
        save(); applyHidden(); toast('ذخیره شد');
      });
      var eye = document.createElement('button');
      eye.type = 'button'; eye.className = 'aa-mini';
      eye.innerHTML = ico('ext') + 'مشاهده';
      eye.addEventListener('click', function () { window.open(pathOf(key), '_blank'); });
      row.appendChild(eye); row.appendChild(b);
      host.appendChild(row);
    });
  }

  function vProjects(root) {
    var list = REGISTRY.filter(function (r) { return r[2] === 'project' && r[1] === 'fa'; });
    root.innerHTML = '<div class="aa-btool"><button class="aa-btn gold" id="aa-new-project" type="button">＋ افزودن پروژه جدید</button><span class="aa-note" style="margin:0">پروژه را روی قالب کیس‌استادی آرنو بسازید: پیش‌نمایش، دانلود HTML و منوی سئو دارد.</span></div>' + draftCard('project') + '<p class="aa-note" style="margin:0 0 16px">مدیریت ۶ پروژه‌ی نمونه — خاموش‌کردن، کارت را از صفحه‌ی «پروژه‌ها» حذف می‌کند.</p><div class="aa-card" style="padding:6px 18px" id="aa-prlist"></div>';
    wireDraftButtons(root);
    wireNewButtons(root);
    var host = root.querySelector('#aa-prlist');
    list.forEach(function (r) {
      var slug = r[0];
      var row = document.createElement('div');
      row.className = 'aa-switch-row';
      row.innerHTML = '<div class="aa-sw-txt"><b>' + esc(r[3] || slug) + '</b></div>';
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'aa-mini' + (S.hidden.projects.indexOf(slug) < 0 ? ' on' : '');
      b.textContent = S.hidden.projects.indexOf(slug) < 0 ? 'نمایش' : 'مخفی';
      b.addEventListener('click', function () {
        var i = S.hidden.projects.indexOf(slug);
        if (i >= 0) { S.hidden.projects.splice(i, 1); b.textContent = 'نمایش'; b.classList.add('on'); }
        else { S.hidden.projects.push(slug); b.textContent = 'مخفی'; b.classList.remove('on'); }
        save(); applyHidden(); toast('ذخیره شد');
      });
      var eye = document.createElement('button');
      eye.type = 'button'; eye.className = 'aa-mini';
      eye.innerHTML = ico('ext') + 'مشاهده';
      eye.addEventListener('click', function () { window.open(pathOf('fa/' + slug), '_blank'); });
      row.appendChild(eye); row.appendChild(b);
      host.appendChild(row);
    });
  }

  function fmtDate(iso) {
    try {
      var d = new Date(iso);
      return toFa(d.getFullYear()) + '/' + toFa(('0' + (d.getMonth() + 1)).slice(-2)) + '/' + toFa(('0' + d.getDate()).slice(-2)) + ' — ' + toFa(('0' + d.getHours()).slice(-2)) + ':' + toFa(('0' + d.getMinutes()).slice(-2));
    } catch (e) { return iso; }
  }
  function msgCard(m, actions) {
    var c = document.createElement('div');
    c.className = 'aa-msg' + (m.read ? '' : ' unread');
    c.innerHTML =
      '<div class="aa-msg-head"><b>' + esc(m.name || 'بدون نام') + '</b>' +
      (m.type ? '<span class="aa-msg-type">' + esc(m.type) + '</span>' : '') +
      '<span class="aa-msg-phone">' + esc(m.phone || '') + '</span>' +
      '<span class="aa-mtime">' + fmtDate(m.date) + ' · ' + (m.lang === 'en' ? 'EN' : 'FA') + '</span></div>' +
      '<div class="aa-msg-body">' + esc(m.message || '—') + '</div>';
    if (actions) {
      var del = document.createElement('button');
      del.className = 'aa-mini danger'; del.innerHTML = ico('trash') + 'حذف';
      del.addEventListener('click', function () {
        var ms = loadM();
        ms = ms.filter(function (x) { return x.date !== m.date; });
        localStorage.setItem(LSM, JSON.stringify(ms));
        render(); toast('پیام حذف شد');
      });
      c.appendChild(del);
    }
    return c;
  }
  function vMessages(root) {
    S.msgsSeen = loadM().length; save();
    var msgs = loadM();
    var head = document.createElement('div');
    head.className = 'aa-toolbar';
    head.innerHTML = '<span class="aa-save" style="border-color:rgba(198,160,95,.4);color:#a5a19a">' + toFa(msgs.length) + ' پیام</span>';
    var ex = document.createElement('button');
    ex.className = 'aa-btn'; ex.innerHTML = ico('down') + '<span>خروجی CSV</span>';
    ex.addEventListener('click', exportCsv);
    var clr = document.createElement('button');
    clr.className = 'aa-btn danger'; clr.innerHTML = ico('trash') + '<span>پاک‌کردن همه</span>';
    clr.addEventListener('click', function () {
      if (!msgs.length) { toast('پیامی نیست'); return; }
      localStorage.setItem(LSM, '[]'); render(); toast('صندوق پیام خالی شد');
    });
    head.appendChild(ex); head.appendChild(clr);
    root.appendChild(head);
    if (!msgs.length) {
      root.insertAdjacentHTML('beforeend', '<div class="aa-empty">' + ico('inbox') + '<br>صندوق پیام خالی است.<br>هر فرمی که در سایت ارسال شود (فارسی یا انگلیسی) بلافاصله اینجا ثبت می‌شود.</div>');
      return;
    }
    msgs.forEach(function (m) { root.appendChild(msgCard(m, true)); });
  }
  function exportCsv() {
    var ms = loadM();
    if (!ms.length) { toast('پیامی برای خروجی نیست'); return; }
    var rows = [['date', 'name', 'phone', 'type', 'lang', 'message']];
    ms.forEach(function (m) { rows.push([m.date, m.name, m.phone, m.type, m.lang, String(m.message || '').replace(/\s+/g, ' ')]); });
    var csv = '\ufeff' + rows.map(function (r) { return r.map(function (c) { return '"' + esc(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
    var a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = 'arno-messages.csv';
    document.body.appendChild(a); a.click(); a.remove();
    toast('فایل CSV دانلود شد');
  }

  function vAppearance(root) {
    root.innerHTML =
      '<div class="aa-card"><h3>' + ico('palette') + 'رنگ اصلی (طلایی سایت)</h3><div class="aa-row" id="aa-accents"></div><p class="aa-note">رنگ روی کل سایت — دکمه‌ها، خطوط، منوها — بلافاصله اعمال می‌شود.</p></div>' +
      '<div class="aa-card"><h3>' + ico('sliders') + 'جزئیات نمایش</h3><div id="aa-themes"></div></div>' +
      '<div class="aa-card"><h3>' + ico('pages') + 'منوی اصلی سایت</h3><p class="aa-note" style="margin:0 0 10px">خاموش‌کردن هر گزینه، آن را از منوی بالا و منوی موبایل در همه‌ی صفحات حذف می‌کند.</p><div style="display:flex;gap:8px;flex-wrap:wrap" id="aa-navchips"></div></div>';
    var acc = root.querySelector('#aa-accents');
    [['', 'طلایی پیش‌فرض'], ['gold', 'طلایی کلاسیک'], ['champagne', 'شامپاینی'], ['bronze', 'برنز'], ['copper', 'مسی'], ['silver', 'نقره‌ای']].forEach(function (a) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'aa-chip' + (S.theme.accent === a[0] ? ' on' : '');
      b.innerHTML = (a[0] && ACCENTS[a[0]] ? '<i style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + ACCENTS[a[0]][0] + ';margin-left:8px"></i>' : '') + a[1];
      b.addEventListener('click', function () { S.theme.accent = a[0]; save(); applyTheme(); reRender(); toast('رنگ اعمال شد'); });
      acc.appendChild(b);
    });
    var th = root.querySelector('#aa-themes');
    th.appendChild(swRow('بدون صفحه‌ی پیش‌بارگذاری', 'ورود مستقیم به سایت', S.theme.preloader, function (v) { S.theme.preloader = v; save(); applyTheme(); toast('ذخیره شد'); }));
    th.appendChild(swRow('بدون افکت نویز', 'پس‌زمینه کاملاً تمیز', S.theme.noise, function (v) { S.theme.noise = v; save(); applyTheme(); toast('ذخیره شد'); }));
    th.appendChild(swRow('بدون نشانگر سفارشی', 'نشانگر استاندارد مرورگر', S.theme.cursor, function (v) { S.theme.cursor = v; save(); applyTheme(); toast('ذخیره شد'); }));
    var nv = root.querySelector('#aa-navchips');
    [['about', 'درباره آرنو'], ['services', 'خدمات'], ['projects', 'پروژه‌ها'], ['partnership', 'مشارکت'], ['academy', 'آکادمی'], ['insights', 'مقالات'], ['contact', 'تماس']].forEach(function (n) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'aa-chip' + (S.hidden.nav.indexOf(n[0]) < 0 ? ' on' : '');
      b.textContent = n[1];
      b.addEventListener('click', function () {
        var i = S.hidden.nav.indexOf(n[0]);
        if (i >= 0) { S.hidden.nav.splice(i, 1); b.classList.add('on'); }
        else { S.hidden.nav.push(n[0]); b.classList.remove('on'); }
        save(); applyHidden(); toast('ذخیره شد');
      });
      nv.appendChild(b);
    });
  }

  function vSettings(root) {
    root.innerHTML =
      '<div class="aa-card"><h3>' + ico('gear') + 'کد ورود پنل</h3>' +
      '<div class="aa-row">' + field('کد فعلی (چهاررقمی)', S.pin, 'aa-f-pin') + '<div class="aa-field"><label>&nbsp;</label><button class="aa-btn gold" id="aa-pin-save" type="button" style="width:100%">ذخیره کد</button></div></div>' +
      '<p class="aa-note">این کد فقط برای نسخه‌ی آزمایشی است؛ در نسخه‌ی نهایی با ورود امن سرور جایگزین می‌شود.</p></div>' +
      '<div class="aa-card"><h3>' + ico('down') + 'پشتیبان‌گیری تنظیمات</h3>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="aa-btn" id="aa-exp" type="button">' + ico('down') + '<span>دانلود فایل پشتیبان</span></button>' +
      '<label class="aa-btn" style="cursor:pointer">' + ico('up') + '<span>بازیابی از فایل</span><input type="file" id="aa-imp" accept=".json" style="display:none"></label></div>' +
      '<p class="aa-note">شامل همه‌ی تغییرات متن، SEO، مخفی‌سازی‌ها و تم.</p></div>' +
      '<div class="aa-card"><h3>' + ico('trash') + 'ناحیه‌ی حساس</h3>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="aa-btn danger" id="aa-clr" type="button">پاک‌کردن پیام‌ها</button>' +
      '<button class="aa-btn danger" id="aa-reset" type="button">بازنشانی کامل پنل</button></div>' +
      '<p class="aa-note">بازنشانی کامل، همه‌ی تغییرات را به حالت اولیه برمی‌گرداند.</p></div>' +
      '<div class="aa-card"><h3>' + ico('dash') + 'درباره این نسخه</h3>' +
      '<p class="aa-note" style="margin:0">پنل مدیریت آرنو — نسخه‌ی آزمایشی v4.8. تازه‌ها: ساخت مقاله و پروژه با منوی سئو، دانلود HTML و پیش‌نمایش. دسترسی مخفی: ۴ ضربه‌ی سریع روی لوگوی آرنو در بالای سایت. داده‌ها در localStorage مرورگر نگه‌داری می‌شوند و در استقرار نهایی به پنل سرور واقعی (مدیریت محتوا، پرونده‌ها و پیام‌ها) ارتقا داده می‌شود.</p></div>';
    root.querySelector('#aa-pin-save').addEventListener('click', function () {
      var v = document.getElementById('aa-f-pin').value.trim();
      if (!/^\d{4}$/.test(v)) { toast('کد باید دقیقاً ۴ رقم باشد'); return; }
      S.pin = v; save(); toast('کد ورود ذخیره شد');
    });
    root.querySelector('#aa-exp').addEventListener('click', function () {
      var a = document.createElement('a');
      a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(S, null, 1));
      a.download = 'arno-admin-backup.json';
      document.body.appendChild(a); a.click(); a.remove();
      toast('پشتیبان دانلود شد');
    });
    root.querySelector('#aa-imp').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var obj = JSON.parse(rd.result);
          S = Object.assign(defaults(), obj);
          save(); applyAll();
          render(); toast('تنظیمات بازیابی شد');
        } catch (err) { toast('فایل نامعتبر است'); }
      };
      rd.readAsText(f);
    });
    root.querySelector('#aa-clr').addEventListener('click', function () { localStorage.setItem(LSM, '[]'); toast('پیام‌ها پاک شد'); });
    root.querySelector('#aa-reset').addEventListener('click', function () {
      S = defaults(); save(); applyAll(); render(); toast('پنل به حالت اولیه بازگشت');
    });
  }

  /* ---------------- public api ---------------- */
  function applyAll() { applyTheme(); applySite(); applySeo(); applyHidden(); applyTexts(); }
  window.__arnoOpenAdmin = function (ev) {
    if (ev && ev.clientX != null) {
      var r = document.createElement('div');
      r.className = 'aa-ripple';
      r.style.left = ev.clientX + 'px'; r.style.top = ev.clientY + 'px';
      document.body.appendChild(r);
      setTimeout(function () { r.remove(); }, 760);
    }
    openLock();
  };

  /* ---------------- boot ---------------- */
  applyAll();
  if (sessionStorage.getItem('arno_edit_go') === '1') {
    sessionStorage.removeItem('arno_edit_go');
    openPanel();
    setTimeout(enterEdit, 350);
  }
})();