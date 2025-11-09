(function(){
  const c = window.HOME_CONTENT || {};
  const $ = (id) => document.getElementById(id);
  const setText = (id, text) => { const el = $(id); if (el && text) el.textContent = text; };
  const setHref = (id, href) => { const el = $(id); if (el && href) el.setAttribute('href', href); };

  const logo = document.querySelector('#logo');
  if (logo && c.logoSrc) logo.src = c.logoSrc;

  if (c.headerCta) {
    setText('primaryCtaHeader', c.headerCta.label);
    setHref('primaryCtaHeader', c.headerCta.href);
  }

  if (c.hero) {
    setText('heroTitle', c.hero.title);
    setText('heroSubtitle', c.hero.subtitle);
    if (c.hero.primaryCta) { setText('primaryCta', c.hero.primaryCta.label); setHref('primaryCta', c.hero.primaryCta.href); }
    if (c.hero.secondaryCta) { setText('secondaryCta', c.hero.secondaryCta.label); setHref('secondaryCta', c.hero.secondaryCta.href); }
    const trustRow = document.querySelector('#trustRow');
    if (trustRow && Array.isArray(c.hero.trust)) {
      c.hero.trust.forEach(item => {
        const img = document.createElement('img');
        img.src = item.src; img.alt = item.alt || '';
        img.className = 'h-8 w-auto grayscale';
        trustRow.appendChild(img);
      });
    }
  }

  if (Array.isArray(c.valueProps)) {
    const grid = document.querySelector('#valueGrid');
    c.valueProps.forEach(v => {
      const card = document.createElement('div');
      card.className = 'rounded-lg border border-gray-200 p-5 bg-white';
      const h = document.createElement('div'); h.className = 'font-semibold'; h.textContent = v.title;
      const p = document.createElement('p'); p.className = 'mt-2 text-ink-600'; p.textContent = v.text;
      card.appendChild(h); card.appendChild(p);
      grid.appendChild(card);
    });
  }

  if (c.services) {
    setHref('servicesAllLink', c.services.allHref);
    const grid = document.querySelector('#servicesGrid');
    c.services.items.forEach(s => {
      const a = document.createElement('a');
      a.href = s.href;
      a.className = 'block rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow';
      const h = document.createElement('div'); h.className = 'text-lg font-semibold'; h.textContent = s.title;
      const p = document.createElement('p'); p.className = 'mt-2 text-ink-600'; p.textContent = s.text;
      const btn = document.createElement('div'); btn.className = 'mt-4 text-primary font-semibold'; btn.textContent = 'Explore service';
      a.appendChild(h); a.appendChild(p); a.appendChild(btn);
      grid.appendChild(a);
    });
  }

  if (c.case) {
    setText('caseTitle', c.case.title);
    setText('caseExcerpt', c.case.excerpt);
    const ul = document.querySelector('#caseBullets');
    if (ul && Array.isArray(c.case.bullets)) {
      c.case.bullets.forEach(b => { const li = document.createElement('li'); li.textContent = b; ul.appendChild(li); });
    }
    if (c.case.cta) { setText('caseCta', c.case.cta.label); setHref('caseCta', c.case.cta.href); }
    if (c.case.metric) { setText('caseMetric', c.case.metric.value); setText('caseMetricDesc', c.case.metric.desc); }
  }

  if (Array.isArray(c.process)) {
    const ol = document.querySelector('#processSteps');
    c.process.forEach((step, idx) => {
      const li = document.createElement('li');
      li.className = 'rounded-xl border border-gray-200 bg-white p-6';
      const num = document.createElement('div'); num.className = 'h-8 w-8 flex items-center justify-center rounded-full bg-primary.light text-primary font-semibold'; num.textContent = String(idx+1);
      const title = document.createElement('div'); title.className = 'mt-3 font-semibold'; title.textContent = step.title;
      const text = document.createElement('p'); text.className = 'mt-1 text-ink-600'; text.textContent = step.text;
      li.appendChild(num); li.appendChild(title); li.appendChild(text);
      ol.appendChild(li);
    });
  }

  if (Array.isArray(c.testimonials)) {
    const grid = document.querySelector('#testimonialGrid');
    c.testimonials.forEach(t => {
      const card = document.createElement('div'); card.className = 'rounded-xl border border-gray-200 bg-white p-6';
      const q = document.createElement('p'); q.className = 'text-ink-800'; q.textContent = '“' + t.quote + '”';
      const a = document.createElement('div'); a.className = 'mt-3 text-sm text-ink-600'; a.textContent = t.author;
      card.appendChild(q); card.appendChild(a); grid.appendChild(card);
    });
  }

  if (c.about) {
    setText('aboutTitle', c.about.title);
    setText('aboutBlurb', c.about.blurb);
    if (c.about.cta) { setText('aboutCta', c.about.cta.label); setHref('aboutCta', c.about.cta.href); }
    const ul = document.querySelector('#teamList');
    if (ul && Array.isArray(c.about.team)) {
      c.about.team.forEach(m => { const li = document.createElement('li'); li.className = 'text-ink-700'; li.textContent = m; ul.appendChild(li); });
    }
  }

  if (c.careers) {
    setText('careersTitle', c.careers.title);
    setText('careersBlurb', c.careers.blurb);
    if (c.careers.cta) { setText('careersCta', c.careers.cta.label); setHref('careersCta', c.careers.cta.href); }
    const ul = document.querySelector('#careersPerks');
    if (ul && Array.isArray(c.careers.perks)) {
      c.careers.perks.forEach(p => { const li = document.createElement('li'); li.textContent = p; ul.appendChild(li); });
    }
  }

  if (c.ctaBand) {
    setText('ctaTitle', c.ctaBand.title);
    setText('ctaSubtitle', c.ctaBand.subtitle);
    if (c.ctaBand.button) { setText('ctaButton', c.ctaBand.button.label); setHref('ctaButton', c.ctaBand.button.href); }
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
