/* ============================================================
   ARNO ENGINEERS GROUP — v4 LUXURY MOTION ENGINE
   GSAP 3.12 + ScrollTrigger + Lenis smooth scroll
   - All assets local, no CDN
   - Full fallback chain: GSAP → CSS transitions → no-JS visible
   - Honors prefers-reduced-motion
   - RTL/FA aware (no letter-splitting of Persian shaping)
   ============================================================ */
(function () {
  'use strict';

  var docEl = document.documentElement;
  docEl.classList.remove('no-js');
  docEl.classList.add('js');

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var lang = docEl.lang === 'fa' ? 'fa' : 'en';
  var rtl = (docEl.getAttribute('dir') || '').toLowerCase() === 'rtl';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var TXT = {
    fa: {
      menuOpen: 'باز کردن منو', menuClose: 'بستن منو',
      sending: 'در حال ارسال…',
      okTitle: 'درخواست شما ثبت شد',
      okBody: 'از توجه شما سپاسگزاریم. تیم آرنو در اولین فرصت با شما تماس می‌گیرد.',
      errFields: 'لطفاً نام، شماره تماس معتبر و نوع درخواست را کامل کنید.',
      demoNote: 'این فرم در نسخه‌ی نمایشی به سرور متصل نیست؛ در استقرار نهایی به ایمیل یا CRM متصل می‌شود.'
    },
    en: {
      menuOpen: 'Open menu', menuClose: 'Close menu',
      sending: 'Sending…',
      okTitle: 'Your request has been received',
      okBody: 'Thank you for your interest. The ARNO team will contact you shortly.',
      errFields: 'Please complete your name, a valid phone number and the request type.',
      demoNote: 'This form is not connected to a server in the demo build; it will be wired to email/CRM in production.'
    }
  };
  var T = TXT[lang];

  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  if (!hasGsap) docEl.classList.add('no-gsap');
  else docEl.classList.add('gsap-on');
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  var anim = hasGsap && !reduced;

  /* ---------- Smooth scroll (Lenis) ---------- */
  var lenis = null;
  if (window.Lenis && hasGsap && !reduced) {
    try {
      lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
      window.__arnoLenis = lenis; /* admin panel: freeze page scroll while open */
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      lenis.stop(); // locked until preloader finishes
    } catch (e) { lenis = null; }
  }

  /* ---------- Header + progress bar ---------- */
  var header = $('.header'), progress = $('#progress'), lastP = -1;
  function onScroll() {
    var y = window.scrollY || docEl.scrollTop || 0;
    if (header) header.classList.toggle('scrolled', y > 30);
    if (progress) {
      var max = docEl.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, y / max) : 0;
      if (Math.abs(p - lastP) > 0.001) { progress.style.transform = 'scaleX(' + p + ')'; lastP = p; }
    }
  }
  if (lenis) lenis.on('scroll', onScroll);
  else window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach(function (x) { x.textContent = new Date().getFullYear(); });

  /* ---------- Mobile menu ---------- */
  var mt = $('.menu-toggle'), mm = $('.mobile-menu'), menuOpen = false;
  if (mt && mm) {
    var setMenu = function (state) {
      menuOpen = state;
      mm.classList.toggle('open', state);
      mt.classList.toggle('open', state);
      document.body.classList.toggle('menu-open', state);
      mt.setAttribute('aria-expanded', state ? 'true' : 'false');
      mt.setAttribute('aria-label', state ? T.menuClose : T.menuOpen);
      if (lenis) { state ? lenis.stop() : lenis.start(); }
    };
    mt.addEventListener('click', function () { setMenu(!menuOpen); });
    $$('a', mm).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) setMenu(false); });
    window.addEventListener('resize', function () { if (menuOpen && window.innerWidth > 980) setMenu(false); });
  }

  /* ---------- Custom cursor ---------- */
  if (finePointer && anim) {
    var cur = $('.cursor'), dot = $('.cursor-dot');
    if (cur && dot) {
      docEl.classList.add('cursor-on');
      gsap.set([cur, dot], { x: window.innerWidth / 2, y: window.innerHeight / 2 });
      var cx = gsap.quickTo(cur, 'x', { duration: .45, ease: 'power3' }), cy = gsap.quickTo(cur, 'y', { duration: .45, ease: 'power3' });
      var dx = gsap.quickTo(dot, 'x', { duration: .12, ease: 'power3' }), dy = gsap.quickTo(dot, 'y', { duration: .12, ease: 'power3' });
      window.addEventListener('mousemove', function (e) {
        cx(e.clientX); cy(e.clientY); dx(e.clientX); dy(e.clientY);
        cur.classList.add('on'); dot.classList.add('on');
      }, { passive: true });
      document.addEventListener('mouseleave', function () { cur.classList.remove('on'); dot.classList.remove('on'); });
      $$('a, button, .project-card, .service-card, .article-card').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cur.classList.add('big'); });
        el.addEventListener('mouseleave', function () { cur.classList.remove('big'); });
      });
    }
  }

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && anim) {
    $$('.btn').forEach(function (b) {
      var xTo = gsap.quickTo(b, 'x', { duration: .4, ease: 'power3' });
      var yTo = gsap.quickTo(b, 'y', { duration: .4, ease: 'power3' });
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .18);
        yTo((e.clientY - r.top - r.height / 2) * .26);
      });
      b.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- Word splitter (word-level → safe for Persian shaping) ---------- */
  function splitWords(el) {
    if (!el || el.dataset.split) return [];
    el.dataset.split = '1';
    var words = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType !== 3) return;
      var frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
        var line = document.createElement('span'); line.className = 'wline';
        var word = document.createElement('span'); word.className = 'wword'; word.textContent = part;
        line.appendChild(word); frag.appendChild(line); words.push(word);
      });
      el.replaceChild(frag, node);
    });
    return words;
  }

  /* ---------- Reveal system ---------- */
  function showAllInstantly() {
    $$('.reveal, .reveal-image, .stagger').forEach(function (el) { el.classList.add('visible'); });
    $$('.hero h1 i, .hero .eyebrow, .hero-copy p, .hero-copy .btn, .header, .page-hero .index, .page-hero p, .page-hero h1').forEach(function (el) {
      el.style.opacity = ''; el.style.transform = ''; el.style.visibility = '';
    });
  }

  function setupReveals() {
    $$('.reveal').forEach(function (el) {
      gsap.fromTo(el, { y: 34, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onComplete: function () { el.classList.add('visible'); gsap.set(el, { clearProps: 'all' }); }
      });
    });
    $$('.reveal-image').forEach(function (el) {
      var from = rtl ? 'inset(0px 0px 0px 100%)' : 'inset(0px 100% 0px 0px)';
      el.classList.add('visible'); // lock final CSS state first — image can never fall back to hidden
      gsap.fromTo(el, { clipPath: from }, {
        clipPath: 'inset(0px 0% 0px 0%)', duration: 1.15, ease: 'power3.inOut',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true, toggleActions: 'play none none none' },
        onComplete: function () { gsap.set(el, { clearProps: 'clipPath' }); }
      });
    });
    $$('.stagger').forEach(function (grid) {
      var kids = Array.prototype.slice.call(grid.children);
      gsap.fromTo(kids, { y: 26, opacity: 0 }, {
        y: 0, opacity: 1, duration: .85, ease: 'power3.out', stagger: .07,
        scrollTrigger: { trigger: grid, start: 'top 88%', once: true },
        onComplete: function () {
          grid.classList.add('visible');
          kids.forEach(function (k) { gsap.set(k, { clearProps: 'all' }); });
        }
      });
    });
  }

  /* ---------- Parallax (ScrollTrigger scrub — no layout thrash) ---------- */
  function setupParallax() {
    $$('[data-parallax]').forEach(function (el) {
      if (el.closest('.hero-bg')) return; // hero has its own rig
      var sp = parseFloat(el.dataset.parallax) || .08;
      if (el.tagName === 'IMG') gsap.set(el, { scale: 1.14 });
      var trig = el.closest('.page-hero') || el.parentElement || el;
      gsap.fromTo(el, { yPercent: -sp * 100 }, {
        yPercent: sp * 100, ease: 'none',
        scrollTrigger: { trigger: trig, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    $$('.image-frame img, .featured img, .quote-image img').forEach(function (img) {
      var box = img.closest('.image-frame, .featured, .quote-image') || img.parentElement;
      gsap.set(img, { scale: 1.14 });
      gsap.fromTo(img, { yPercent: -6 }, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    var hb = $('.hero-bg');
    if (hb) gsap.fromTo(hb, { yPercent: -3.5 }, {
      yPercent: 3.5, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- Hero intro (home page) ---------- */
  function primeHeroStates() {
    if (!anim || !$('.hero')) return;
    var heroLines = $$('.hero h1 i');
    gsap.set(heroLines, { yPercent: 115 });
    gsap.set('.hero .eyebrow, .hero-copy p, .hero-copy .btn', { y: 20, opacity: 0 });
    gsap.set('.header', { y: -16, opacity: 0 });
  }
  function heroIntro() {
    if (!anim || !$('.hero')) return;
    gsap.timeline()
      .fromTo('.hero h1 i', { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: .09 }, .05)
      .fromTo('.header', { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out' }, .3)
      .fromTo('.hero .eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out' }, .35)
      .fromTo('.hero-copy p', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out' }, .55)
      .fromTo('.hero-copy .btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', stagger: .08, clearProps: 'all' }, .68);
  }

  /* ---------- Page-hero intro (inner pages) ---------- */
  function setupPageHero() {
    var ph = $('.page-hero');
    if (!ph) return;
    if (!anim) return;
    var h1 = $('h1', ph);
    if (h1 && h1.classList.contains('duo')) {
      // gradient (background-clip:text) headings must not be word-split
      gsap.set('.page-hero .index, .page-hero p', { opacity: 0, y: 18 });
      gsap.timeline({ scrollTrigger: { trigger: ph, start: 'top 92%', once: true } })
        .fromTo('.page-hero .index', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, 0)
        .fromTo(h1, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'all' }, .08)
        .fromTo('.page-hero p', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', clearProps: 'all' }, .45);
      return;
    }
    var words = h1 ? splitWords(h1) : [];
    gsap.set('.page-hero .index, .page-hero p', { opacity: 0, y: 18 });
    if (words.length) gsap.set(words, { yPercent: 115 });
    var tl = gsap.timeline({ scrollTrigger: { trigger: ph, start: 'top 92%', once: true } });
    tl.fromTo('.page-hero .index', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, 0)
      .fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: .05, onComplete: function () { gsap.set(words, { clearProps: 'all' }); } }, .08)
      .fromTo('.page-hero p', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', clearProps: 'all' }, .45);
  }

  /* ---------- CTA headline words ---------- */
  function setupCta() {
    if (!anim) return;
    $$('.cta h2').forEach(function (h2) {
      if (h2.classList.contains('duo')) {
        // gradient (background-clip:text) headings must not be word-split
        gsap.fromTo(h2, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.05, ease: 'power3.out',
          scrollTrigger: { trigger: h2, start: 'top 90%', once: true },
          onComplete: function () { gsap.set(h2, { clearProps: 'all' }); }
        });
        return;
      }
      var words = splitWords(h2);
      if (!words.length) return;
      gsap.set(words, { yPercent: 115 });
      gsap.fromTo(words, { yPercent: 115 }, {
        yPercent: 0, duration: .95, ease: 'power4.out', stagger: .045,
        scrollTrigger: { trigger: h2, start: 'top 90%', once: true },
        onComplete: function () { gsap.set(words, { clearProps: 'all' }); }
      });
    });
  }

  /* ---------- Hero slider (real 5-slide crossfade) ---------- */
  function setupHeroSlider() {
    var bg = $('.hero-bg'), first = bg ? bg.querySelector('img') : null;
    var counter = $('.hero-counter strong');
    if (!bg || !first) return;
    if (!anim) return; // static hero under reduced motion / no GSAP

    var sources = ['hero', 'niavaran', 'villa', 'office', 'interior1'];
    var slides = [];
    var holder = document.createElement('div');
    first.parentNode.insertBefore(holder, first);
    holder.className = 'hero-slide';
    holder.appendChild(first);
    slides.push(holder);
    sources.slice(1).forEach(function (name) {
      var s = document.createElement('div'); s.className = 'hero-slide';
      var img = document.createElement('img');
      img.src = '../assets/images/' + name + '.webp';
      img.alt = ''; img.decoding = 'async';
      s.appendChild(img); bg.appendChild(s);
      slides.push(s);
    });

    var idx = 0, timer = null, inView = true;
    function pad(n) { return ('0' + n).slice(-2); }
    function kenBurns(slide) {
      var img = slide.querySelector('img');
      gsap.fromTo(img, { scale: 1.08 }, { scale: 1.16, duration: 8, ease: 'none', overwrite: true });
    }
    function counterTick(n) {
      if (!counter) return;
      counter.textContent = pad(n);
      gsap.fromTo(counter, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .55, ease: 'power3.out' });
    }
    function activate(n) {
      if (n === idx) return;
      var prev = slides[idx];
      idx = n;
      gsap.to(prev, { opacity: 0, duration: 1.3, ease: 'power2.inOut' });
      gsap.to(slides[n], { opacity: 1, duration: 1.3, ease: 'power2.inOut' });
      kenBurns(slides[n]);
      counterTick(n + 1);
    }
    function schedule() {
      if (timer) timer.kill();
      timer = gsap.delayedCall(6, function () {
        if (inView && !document.hidden) activate((idx + 1) % slides.length);
        schedule();
      });
    }
    gsap.set(slides[0], { opacity: 1 });
    kenBurns(slides[0]);
    schedule();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        inView = es[0].isIntersecting;
      }, { threshold: .05 }).observe($('.hero'));
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (timer) timer.pause(); } else { if (timer) timer.resume(); }
    });
  }

  /* ---------- Insights: show 6 cards, toggle the rest (show more / less) ---------- */
  function setupInsightsToggle() {
    var grid = $('.article-grid');
    if (!grid) return;
    var cards = $$('.article-card', grid);
    if (cards.length <= 6) return;
    var L = lang === 'fa'
      ? { more: 'نمایش بیشتر', less: 'نمایش کمتر' }
      : { more: 'Show more', less: 'Show less' };
    grid.classList.add('collapsed');
    cards.slice(6).forEach(function (c) { c.classList.add('is-extra'); });
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'articles-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
    btn.querySelector('span').textContent = L.more;
    var wrap = document.createElement('div');
    wrap.className = 'articles-more';
    wrap.appendChild(btn);
    grid.parentNode.insertBefore(wrap, grid.nextSibling);
    var busy = false;
    btn.addEventListener('click', function () {
      if (busy) return;
      busy = true;
      var extras = cards.slice(6);
      if (grid.classList.contains('collapsed')) {
        /* expand: reveal the remaining articles with a soft stagger */
        grid.classList.remove('collapsed');
        btn.setAttribute('aria-expanded', 'true');
        extras.forEach(function (c) {
          c.classList.add('visible');
          if (hasGsap) {
            var t = gsap.getTweensOf(c);
            for (var i = 0; i < t.length; i++) t[i].kill();
          }
        });
        if (hasGsap) ScrollTrigger.refresh();
        if (hasGsap && !reduced) {
          gsap.fromTo(extras, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .05,
            onComplete: function () {
              extras.forEach(function (c) { gsap.set(c, { clearProps: 'all' }); });
              busy = false;
            }
          });
        } else {
          extras.forEach(function (c) { c.style.opacity = ''; c.style.transform = ''; });
          busy = false;
        }
        btn.querySelector('span').textContent = L.less;
        btn.classList.add('open');
      } else {
        /* collapse: back to the first 6, bring the reader back to the grid */
        grid.classList.add('collapsed');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('span').textContent = L.more;
        btn.classList.remove('open');
        if (hasGsap) ScrollTrigger.refresh();
        if (lenis) lenis.scrollTo(cards[0], { offset: -150, duration: .8 });
        else window.scrollTo({ top: cards[0].getBoundingClientRect().top + window.scrollY - 150, behavior: reduced ? 'auto' : 'smooth' });
        setTimeout(function () { busy = false; }, 400);
      }
    });
  }

  /* ---------- Project filters ---------- */
  function setupFilters() {
    var btns = $$('[data-filter]');
    if (!btns.length) return;
    var busy = false;
    var matches = function (card, f) {
      if (f === 'all') return true;
      var cats = (card.dataset.category || '').trim().split(/\s+/);
      return cats.indexOf(f) !== -1;
    };
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (busy || btn.classList.contains('active')) return;
        btns.forEach(function (x) { x.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        var cards = $$('[data-category]');
        if (!anim) {
          cards.forEach(function (c) { c.classList.toggle('hidden', !matches(c, f)); });
          if (hasGsap) ScrollTrigger.refresh();
          return;
        }
        busy = true;
        var hide = [], show = [];
        cards.forEach(function (c) { (matches(c, f) ? show : hide).push(c); });
        var finishIn = function () {
          show.forEach(function (c) { c.classList.remove('hidden'); });
          gsap.fromTo(show, { opacity: 0, y: 22 }, {
            opacity: 1, y: 0, duration: .55, ease: 'power3.out', stagger: .05,
            onComplete: function () {
              show.forEach(function (c) { gsap.set(c, { clearProps: 'all' }); });
              ScrollTrigger.refresh(); busy = false;
            }
          });
        };
        if (!hide.length) { finishIn(); return; }
        gsap.to(hide, {
          opacity: 0, scale: .97, duration: .3, ease: 'power2.in', stagger: .015,
          onComplete: function () {
            hide.forEach(function (c) { c.classList.add('hidden'); gsap.set(c, { clearProps: 'all' }); });
            finishIn();
          }
        });
      });
    });
  }

  /* ---------- Contact form (validation + animated success) ---------- */
  function normDigits(s) {
    return String(s).replace(/[۰-۹]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d); })
      .replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); });
  }
  function setupForms() {
    $$('form[data-demo]').forEach(function (f) {
      f.noValidate = true;
      var btn = f.querySelector('button[type="submit"]');
      var msg = document.createElement('div');
      msg.className = 'form-msg'; msg.setAttribute('aria-live', 'polite');
      if (btn) f.insertBefore(msg, btn); else f.appendChild(msg);
      var note = document.createElement('div');
      note.className = 'form-note'; note.textContent = T.demoNote;
      f.appendChild(note);
      var sel = f.querySelector('select');
      if (sel) {
        var firstOpt = sel.querySelector('option');
        var placeholderVal = firstOpt ? firstOpt.textContent : '';
        sel.addEventListener('change', function () {
          var v = sel.value.trim();
          sel.classList.toggle('filled', !!v && v !== placeholderVal);
          sel.classList.remove('invalid');
        });
      }
      f.addEventListener('input', function (e) {
        if (e.target.classList) e.target.classList.remove('invalid');
        msg.textContent = '';
      });
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        if (f.dataset.busy) return;
        var ok = true;
        $$('input', f).forEach(function (inp) {
          var v = normDigits(inp.value).trim();
          var isPhone = /تماس|phone|mobile/i.test(inp.placeholder || '');
          var bad = v.length < 2 || (isPhone && !/^[+\d][\d\s\-()]{6,}$/.test(v));
          inp.classList.toggle('invalid', bad);
          if (bad) ok = false;
        });
        if (sel && (!sel.value.trim() || sel.value.trim() === (sel.querySelector('option') || {}).textContent)) {
          sel.classList.add('invalid'); ok = false;
        }
        if (!ok) {
          msg.textContent = T.errFields;
          if (anim) gsap.fromTo(msg, { x: -7 }, { x: 0, duration: .5, ease: 'elastic.out(1, .35)' });
          return;
        }
        // demo submit
        f.dataset.busy = '1';
        var span = btn ? btn.querySelector('span') : null;
        var oldLabel = span ? span.textContent : '';
        if (btn) { btn.disabled = true; if (span) span.textContent = T.sending; }
        setTimeout(function () {
          delete f.dataset.busy;
          if (btn) { btn.disabled = false; if (span) span.textContent = oldLabel; }
          /* admin inbox: keep every submission for the ARNO admin panel */
          try {
            var inputs = $$('input,select,textarea', f);
            var rec = {
              date: new Date().toISOString(),
              lang: lang,
              page: (location.pathname.split('/').pop() || 'contact.html'),
              name: inputs[0] ? inputs[0].value.trim() : '',
              phone: inputs[1] ? inputs[1].value.trim() : '',
              type: sel ? sel.value.trim() : '',
              message: ($$('textarea', f)[0] ? $$('textarea', f)[0].value.trim() : '')
            };
            var box = JSON.parse(localStorage.getItem('arno_admin_msgs_v1') || '[]');
            box.unshift(rec);
            localStorage.setItem('arno_admin_msgs_v1', JSON.stringify(box.slice(0, 200)));
          } catch (err) { }
          var okBox = document.createElement('div');
          okBox.className = 'form-success';
          okBox.innerHTML =
            '<svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" fill="none" stroke="#c6a05f" stroke-width="1.4"/><path fill="none" stroke="#e2c381" stroke-width="2" stroke-linecap="round" d="M15 27l8 8 15-17"/></svg>' +
            '<h3></h3><p></p>';
          okBox.querySelector('h3').textContent = T.okTitle;
          okBox.querySelector('p').textContent = T.okBody;
          f.appendChild(okBox);
          requestAnimationFrame(function () {
            okBox.classList.add('show');
            if (anim) {
              var path = okBox.querySelector('path'), circle = okBox.querySelector('circle');
              try {
                var L = path.getTotalLength();
                gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
                gsap.to(path, { strokeDashoffset: 0, duration: .6, delay: .25, ease: 'power2.out' });
                gsap.fromTo(circle, { strokeDasharray: 151, strokeDashoffset: 151 }, { strokeDashoffset: 0, duration: .8, ease: 'power2.inOut' });
              } catch (err) { }
            }
          });
          setTimeout(function () {
            okBox.classList.remove('show');
            setTimeout(function () { okBox.remove(); }, 550);
            f.reset();
            if (sel) { sel.classList.remove('filled', 'invalid'); }
          }, 4200);
        }, 900);
      });
    });
  }

  /* ---------- Services mega menu (nav hover · 2 columns) ---------- */
  var ICONS = {
    compass: '<circle cx="12" cy="5.6" r="2.1"/><path d="M10.7 7.6 4.6 19.6"/><path d="M13.3 7.6l6.1 12"/><path d="M6.9 15.2h10.2"/>',
    crane: '<path d="M3 21h18"/><path d="M8 21V4"/><path d="M8 4h13"/><path d="M21 4v3.2"/><path d="M19.5 7.2v4.2"/><path d="M17.8 11.4h3.4"/>',
    shield: '<path d="M12 3l7 2.8v5.1c0 4.4-2.9 8.3-7 10.1-4.1-1.8-7-5.7-7-10.1V5.8z"/><path d="M9.2 11.9l2 2 3.6-3.9"/>',
    clipboard: '<rect x="5.5" y="4.5" width="13" height="16.5" rx="1.6"/><path d="M9 4.5V2.8h6v1.7"/><path d="M9.3 12.6l1.9 1.9 3.5-3.7"/><path d="M9.3 17h5.4"/>',
    trend: '<path d="M3 17.2l5.6-5.6 4 4L21 7.2"/><path d="M15.6 7.2H21v5.4"/>',
    roller: '<rect x="3.5" y="3.8" width="12.5" height="5" rx="1.2"/><path d="M16 6.3h3.4a1.1 1.1 0 0 1 1.1 1.1v3.2a1.1 1.1 0 0 1-1.1 1.1h-7.6v2.6"/><rect x="10.2" y="14.3" width="3.2" height="6.9" rx="1.1"/>',
    gear: '<circle cx="12" cy="12" r="3.1"/><path d="M12 2.9v2.3M12 18.8v2.3M2.9 12h2.3M18.8 12h2.3M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/>',
    cap: '<path d="M12 4.2 2.6 8.8 12 13.4l9.4-4.6z"/><path d="M6.6 10.7v4.5c0 1.5 2.4 2.9 5.4 2.9s5.4-1.4 5.4-2.9v-4.5"/><path d="M21.4 8.8v5.2"/>'
  };

  var MEGA_DATA = {
    fa: {
      more: 'نمایش همه خدمات', less: 'نمایش کمتر', view: 'مشاهده خدمات',
      items: [
        { t: 'طراحی معماری', d: 'از تحلیل زمین و برنامه فیزیکی تا کانسپت، فاز یک و دو، نما و طراحی داخلی.', icon: 'compass', href: 'architecture.html' },
        { t: 'اجرا و مدیریت ساخت', d: 'مدیریت پیمان، برنامه‌ریزی، تدارکات، کنترل کیفیت و تحویل مستند.', icon: 'crane', href: 'construction.html' },
        { t: 'مجری ذی‌صلاح', d: 'ساختار اجرایی و مسئولیت‌پذیری فنی در چارچوب مجوزهای معتبر پروژه.', icon: 'shield', href: 'qualified-executor.html' },
        { t: 'کنترل و نظارت پروژه', d: 'کنترل روند اجرا، نقاط بازرسی، گزارش‌های QC و پیگیری اصلاحات.', icon: 'clipboard', href: 'supervision.html' },
        { t: 'مشارکت در ساخت', d: 'امکان‌سنجی، سناریوی اقتصادی، ساختار همکاری و توسعه ارزش ملک.', icon: 'trend', href: 'development.html' },
        { t: 'بازسازی', d: 'بازطراحی، برآورد، هماهنگی تأسیسات، خرید و اجرای یکپارچه.', icon: 'roller', href: 'renovation.html' },
        { t: 'خدمات مهندسی', d: 'نقشه‌برداری، هماهنگی خدمات آزمایشگاهی، BMS، مدارک و خدمات پروژه.', icon: 'gear', href: 'engineering.html' },
        { t: 'آموزش پروژه‌محور', d: 'آموزش اجرای ساختمان با اتکا به فرآیند واقعی پروژه، چک‌لیست و کیس‌استادی.', icon: 'cap', href: 'academy.html' }
      ]
    },
    en: {
      more: 'Show all services', less: 'Show less', view: 'View',
      items: [
        { t: 'Architecture Design', d: 'From site analysis and program to concept, detailed design, façade and interiors.', icon: 'compass', href: 'architecture.html' },
        { t: 'Construction & Delivery', d: 'Construction management, procurement, quality control and documented handover.', icon: 'crane', href: 'construction.html' },
        { t: 'Qualified Executor', d: 'Technical execution and accountable delivery within project-specific legal authorizations.', icon: 'shield', href: 'qualified-executor.html' },
        { t: 'Project Supervision & QC', d: 'Execution reviews, inspection points, QC reporting and corrective-action tracking.', icon: 'clipboard', href: 'supervision.html' },
        { t: 'Development & Partnership', d: 'Feasibility, project economics, partnership structuring and value development.', icon: 'trend', href: 'development.html' },
        { t: 'Renovation', d: 'Redesign, budgeting, MEP coordination, procurement and integrated execution.', icon: 'roller', href: 'renovation.html' },
        { t: 'Engineering Services', d: 'Surveying, laboratory coordination, BMS, documentation and project services.', icon: 'gear', href: 'engineering.html' },
        { t: 'ARNO Academy', d: 'Project-led construction education using real workflows, checklists and case studies.', icon: 'cap', href: 'academy.html' }
      ]
    }
  };

  function setupMega() {
    var nav = $('.nav');
    if (!nav) return;
    var link = $$('.nav a').filter(function (a) { return /services\.html/.test(a.getAttribute('href') || ''); })[0];
    if (!link) return;
    var D = MEGA_DATA[lang] || MEGA_DATA.fa;
    var items = D.items;

    var drop = document.createElement('div');
    drop.className = 'nav-drop';
    link.parentNode.insertBefore(drop, link);
    drop.appendChild(link);
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');

    /* small downward caret so visitors see the menu trigger */
    var caret = document.createElement('span');
    caret.className = 'nav-caret';
    caret.setAttribute('aria-hidden', 'true');
    caret.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 9.5l6 6 6-6"/></svg>';
    link.appendChild(caret);

    var mega = document.createElement('div');
    mega.className = 'mega';
    mega.setAttribute('role', 'menu');

    /* column 1 — service list (4 previews + expandable full list) */
    var listCol = document.createElement('div');
    listCol.className = 'mega-col mega-list';
    var anchors = items.map(function (it, i) {
      var a = document.createElement('a');
      a.className = 'mega-item' + (i >= 4 ? ' extra' : '') + (i === 0 ? ' active' : '');
      a.href = it.href;
      a.innerHTML = '<i>' + ('0' + (i + 1)).slice(-2) + '</i><span></span>';
      a.querySelector('span').textContent = it.t;
      listCol.appendChild(a);
      return a;
    });
    var more = document.createElement('button');
    more.type = 'button';
    more.className = 'mega-more';
    more.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5l6 6 6-6"/></svg><span></span>';
    more.querySelector('span').textContent = D.more;
    listCol.appendChild(more);

    /* column 2 — live preview panel (icon + title + desc + view link) */
    var panelCol = document.createElement('div');
    panelCol.className = 'mega-col mega-panel';
    panelCol.innerHTML =
      '<span class="mega-icon"><svg viewBox="0 0 24 24" aria-hidden="true"></svg></span>' +
      '<h4 class="mega-title"></h4><p class="mega-desc"></p>' +
      '<a class="mega-view" href="#"><span></span><b>↗</b></a>';
    var pIcon = panelCol.querySelector('.mega-icon svg');
    var pTitle = panelCol.querySelector('.mega-title');
    var pDesc = panelCol.querySelector('.mega-desc');
    var pView = panelCol.querySelector('.mega-view');
    var pViewLabel = panelCol.querySelector('.mega-view span');

    mega.appendChild(listCol);
    mega.appendChild(panelCol);
    drop.appendChild(mega);

    var active = 0, expanded = false;
    function setPanel(i, instant) {
      active = i;
      var it = items[i];
      pIcon.innerHTML = ICONS[it.icon] || '';
      pTitle.textContent = it.t;
      pDesc.textContent = it.d;
      pView.href = it.href;
      pViewLabel.textContent = D.view + ' ' + it.t;
      anchors.forEach(function (a, j) { a.classList.toggle('active', j === i); });
      if (anim && !instant) gsap.fromTo(panelCol, { opacity: 0, y: 9 }, { opacity: 1, y: 0, duration: .34, ease: 'power2.out', overwrite: true, clearProps: 'opacity,transform' });
    }
    setPanel(0, true);

    var closeTimer = null;
    function openMenu() {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      drop.classList.add('open');
      link.setAttribute('aria-expanded', 'true');
      if (anim) gsap.fromTo(listCol.children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4, stagger: .035, ease: 'power2.out', overwrite: true, clearProps: 'all' });
    }
    function closeMenu() {
      drop.classList.remove('open');
      link.setAttribute('aria-expanded', 'false');
    }
    drop.addEventListener('mouseenter', openMenu);
    drop.addEventListener('mouseleave', function () {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(closeMenu, 200);
    });
    drop.addEventListener('focusin', openMenu);
    drop.addEventListener('focusout', function (e) {
      if (!drop.contains(e.relatedTarget)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drop.classList.contains('open')) { closeMenu(); link.blur(); }
    });
    anchors.forEach(function (a, i) {
      a.addEventListener('mouseenter', function () { setPanel(i); });
      a.addEventListener('focus', function () { setPanel(i); });
    });
    more.addEventListener('click', function () {
      expanded = !expanded;
      listCol.classList.toggle('expanded', expanded);
      more.querySelector('span').textContent = expanded ? D.less : D.more;
      var svg = more.querySelector('svg path');
      if (svg) svg.setAttribute('d', expanded ? 'M18 15.5l-6-6-6 6' : 'M6 9.5l6 6 6-6');
      if (anim) {
        var extras = $$('.mega-item.extra', listCol);
        if (expanded) gsap.fromTo(extras, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: .35, stagger: .05, ease: 'power2.out', clearProps: 'all' });
      }
      if (hasGsap) ScrollTrigger.refresh();
    });
  }

  /* ---------- Soft page transitions ---------- */
  function setupPageExit() {
    if (!anim) return;
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (!href || href.charAt(0) === '#' || /^(mailto|tel|javascript):/i.test(href)) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      if (/^https?:\/\//i.test(href) && href.indexOf(location.host) === -1 && location.host) return;
      try { if (a.href && a.href.split('#')[0] === location.href.split('#')[0]) return; } catch (err) { }
      e.preventDefault();
      gsap.to('body', {
        opacity: 0, duration: .26, ease: 'power1.in',
        onComplete: function () { window.location.href = href; }
      });
      setTimeout(function () { window.location.href = href; }, 700); // safety
    });
  }

  /* ---------- Preloader → intro sequence ---------- */
  function runBoot() {
    var pre = $('.preloader');
    docEl.classList.add('is-loading');
    var finish = function () {
      docEl.classList.remove('is-loading');
      if (lenis) lenis.start();
      heroIntro();
      if (hasGsap) { ScrollTrigger.refresh(); }
    };
    if (!pre) { finish(); return; }
    if (!anim) {
      pre.classList.add('out');
      setTimeout(function () { pre.style.display = 'none'; finish(); }, reduced ? 120 : 850);
      return;
    }
    var line = $('.preline span'), logo = $('.preloader img');
    if (line) line.style.animation = 'none';
    gsap.set(logo, { opacity: 0, scale: .94 });
    var introDone = false, pageLoaded = (document.readyState === 'complete'), outStarted = false;
    var maybeOut = function () {
      if (!introDone || !pageLoaded || outStarted) return;
      outStarted = true;
      gsap.timeline({
        onComplete: function () {
          pre.style.display = 'none';
          finish();
        }
      })
        .to('.preloader-inner', { opacity: 0, y: -26, duration: .45, ease: 'power2.in' })
        .to(pre, { yPercent: -100, duration: .85, ease: 'power4.inOut' }, '-=.12');
    };
    window.addEventListener('load', function () { pageLoaded = true; maybeOut(); });
    setTimeout(function () { pageLoaded = true; maybeOut(); }, 3200); // safety — never stuck
    gsap.timeline({ onComplete: function () { introDone = true; maybeOut(); } })
      .to(logo, { opacity: .95, scale: 1, duration: .7, ease: 'power2.out' })
      .fromTo(line, { scaleX: 0, transformOrigin: '50% 50%' }, { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, '-=.25');
  }

  /* ---------- Hidden admin access: 4 quick taps on the ARNO logo ---------- */
  var ASSET_BASE = (function () {
    var s = $('script[src$="site.js"]');
    return s ? s.src.replace(/js\/site\.js.*$/, '') : '';
  })();
  window.__arnoEnsureAdmin = function (cb) {
    if (window.__arnoAdminBooted) { if (cb) cb(); return; }
    if (!document.getElementById('arno-admin-css')) {
      var l = document.createElement('link');
      l.id = 'arno-admin-css'; l.rel = 'stylesheet'; l.href = ASSET_BASE + 'css/admin.css';
      document.head.appendChild(l);
    }
    var s = document.createElement('script');
    s.src = ASSET_BASE + 'js/admin.js';
    s.defer = true;
    s.addEventListener('load', function () { if (cb) cb(); });
    document.head.appendChild(s);
  };
  (function () {
    var logo = $('.logo');
    if (!logo) return;
    var taps = 0, navT = null, tapT = null;
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      taps++;
      clearTimeout(tapT);
      tapT = setTimeout(function () { taps = 0; }, 2200);
      if (taps >= 4) {
        taps = 0;
        clearTimeout(navT);
        window.__arnoEnsureAdmin(function () { window.__arnoOpenAdmin(e); });
        return;
      }
      clearTimeout(navT);
      navT = setTimeout(function () {
        if (taps === 1) {
          var href = logo.getAttribute('href');
          if (href) window.location.href = href;
        }
      }, 500);
    });
  })();
  /* auto-apply saved admin overrides on every load */
  try { if (localStorage.getItem('arno_admin_settings_v1')) window.__arnoEnsureAdmin(); } catch (err) { }

  /* ---------- Boot ---------- */

  /* ---------- v4.8 Mobile bottom dock (primary nav) + services sheet ---------- */
  function setupDock() {
    if ($('.dock')) return;
    var DT = {
      fa: { services: 'خدمات', about: 'درباره آرنو', home: 'خانه', projects: 'پروژه‌ها', insights: 'مقالات',
            all: 'رفتن به خدمات', sheetTitle: 'خدمات آرنو', sheetIdx: 'ARNO / SERVICES', close: 'بستن منو خدمات', nav: 'ناوبری اصلی' },
      en: { services: 'Services', about: 'About', home: 'Home', projects: 'Projects', insights: 'Insights',
            all: 'All services', sheetTitle: 'ARNO Services', sheetIdx: 'ARNO / SERVICES', close: 'Close services menu', nav: 'Main navigation' }
    }[lang] || {};
    var IK = {
      services: '<rect x="3.5" y="3.5" width="7.2" height="7.2" rx="1.7"/><rect x="13.3" y="3.5" width="7.2" height="7.2" rx="1.7"/><rect x="3.5" y="13.3" width="7.2" height="7.2" rx="1.7"/><rect x="13.3" y="13.3" width="7.2" height="7.2" rx="1.7"/>',
      about: '<circle cx="12" cy="12" r="9.1"/><path d="M12 11.2v5"/><path d="M12 7.9v.2"/>',
      home: '<path d="M4 10.6 12 3.5l8 7.1"/><path d="M6.1 9.4v11h11.8v-11"/><path d="M10.1 20.4v-5.8h3.8v5.8"/>',
      projects: '<rect x="3.2" y="7.4" width="17.6" height="12.8" rx="2"/><path d="M9 7.4V5.5a1.9 1.9 0 0 1 1.9-1.9h2.2A1.9 1.9 0 0 1 15 5.5v1.9"/><path d="M3.2 12.6h17.6"/>',
      insights: '<path d="M12 6.4C10.2 4.9 7.9 4.1 4.5 4.1v13.5c3.4 0 5.7.8 7.5 2.3 1.8-1.5 4.1-2.3 7.5-2.3V4.1c-3.4 0-5.7.8-7.5 2.3z"/><path d="M12 6.4v13.5"/>'
    };
    var dock = document.createElement('nav');
    dock.className = 'dock';
    dock.setAttribute('aria-label', DT.nav);
    var items = [
      ['services', 'services.html', DT.services, ''],
      ['about', 'about.html', DT.about, ''],
      ['home', 'index.html', DT.home, 'd-home'],
      ['projects', 'projects.html', DT.projects, ''],
      ['insights', 'insights.html', DT.insights, '']
    ];
    items.forEach(function (it) {
      var a = document.createElement('a');
      a.className = 'dock-btn ' + it[3];
      a.href = it[1];
      a.dataset.dock = it[0];
      a.innerHTML = '<i class="d-orb"><svg viewBox="0 0 24 24" aria-hidden="true">' + IK[it[0]] + '</svg></i><span>' + it[2] + '</span>';
      dock.appendChild(a);
    });
    document.body.appendChild(dock);

    /* page-aware active state (gray -> gold) */
    var path = location.pathname.split('/').pop() || 'index.html';
    var cur = 'home';
    if (path === 'about.html') cur = 'about';
    else if (path === 'services.html' || ['architecture.html', 'construction.html', 'qualified-executor.html', 'supervision.html', 'development.html', 'renovation.html', 'engineering.html'].indexOf(path) >= 0) cur = 'services';
    else if (path === 'projects.html' || path.indexOf('project-') === 0) cur = 'projects';
    else if (path === 'insights.html' || path.indexOf('article-') === 0) cur = 'insights';
    var on = dock.querySelector('[data-dock="' + cur + '"]');
    if (on) on.classList.add('on');

    /* services bottom sheet */
    var sheet = document.createElement('div');
    sheet.className = 'dock-sheet';
    var rows = (typeof MEGA_DATA !== 'undefined' && MEGA_DATA[lang] && MEGA_DATA[lang].items) || [];
    var list = rows.map(function (r, i) {
      return '<a class="dock-svc" href="' + r.href + '"><span class="dock-svc-i"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[r.icon] || '') + '</svg></span>' + r.t + '</a>';
    }).join('');
    sheet.innerHTML =
      '<div class="dock-veil"></div>' +
      '<div class="dock-card" role="dialog" aria-label="' + DT.sheetTitle + '">' +
      '<div class="dock-grab"></div>' +
      '<button class="dock-close" type="button" aria-label="' + DT.close + '">✕</button>' +
      '<div class="dock-sheet-head"><span class="index">' + DT.sheetIdx + '</span><b>' + DT.sheetTitle + '</b></div>' +
      '<div class="dock-svc-list">' + list + '</div>' +
      '<a class="dock-svc-all" href="services.html">' + DT.all + '<b>↗</b></a>' +
      '</div>';
    document.body.appendChild(sheet);

    var opened = false;
    function openSheet() {
      if (opened) return;
      opened = true;
      sheet.classList.add('open');
      requestAnimationFrame(function () { requestAnimationFrame(function () { sheet.classList.add('show'); }); });
      if (lenis) { try { lenis.stop(); } catch (e) {} }
      try {
        if (window.gsap && anim) {
          gsap.fromTo(sheet.querySelectorAll('.dock-svc'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .38, stagger: .045, delay: .16, ease: 'power2.out', overwrite: true });
        }
      } catch (e) {}
    }
    function closeSheet() {
      if (!opened) return;
      opened = false;
      sheet.classList.remove('show');
      if (lenis && !document.body.classList.contains('menu-open')) { try { lenis.start(); } catch (e) {} }
      setTimeout(function () { if (!opened) sheet.classList.remove('open'); }, 580);
    }
    dock.querySelector('[data-dock="services"]').addEventListener('click', function (e) { e.preventDefault(); openSheet(); });
    sheet.querySelector('.dock-close').addEventListener('click', closeSheet);
    sheet.querySelector('.dock-veil').addEventListener('click', closeSheet);
    sheet.querySelectorAll('.dock-svc, .dock-svc-all').forEach(function (a) { a.addEventListener('click', function () { closeSheet(); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && opened) closeSheet(); });
  }

  try {
    primeHeroStates();
    if (anim) {
      setupReveals();
      setupParallax();
      setupPageHero();
      setupCta();
      setupHeroSlider();
    } else {
      showAllInstantly();
    }
    setupInsightsToggle();
    setupFilters();
    setupForms();
    setupMega();
    setupDock();
    setupPageExit();
    runBoot();
    if (document.fonts && document.fonts.ready && hasGsap) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
    window.addEventListener('load', function () { if (hasGsap) ScrollTrigger.refresh(); });
  } catch (err) {
    // absolute safety: reveal everything, kill preloader
    docEl.classList.add('no-gsap');
    showAllInstantly();
    var pre = $('.preloader');
    if (pre) { pre.classList.add('out'); setTimeout(function () { pre.style.display = 'none'; }, 500); }
    docEl.classList.remove('is-loading');
  }
})();
