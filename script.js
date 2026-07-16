const body=document.body,header=document.getElementById('siteHeader');
const motion=document.createElement('link');motion.rel='stylesheet';motion.href='motion.css';document.head.appendChild(motion);
const luxury=document.createElement('link');luxury.rel='stylesheet';luxury.href='luxury.css';document.head.appendChild(luxury);body.classList.add('luxury-theme');
body.insertAdjacentHTML('afterbegin','<div class="page-loader" id="pageLoader"><div class="loader-brand"><span class="loader-mark"></span><strong>CONS</strong><small>REAL CONSTRUCTION FOOTAGE</small></div><div class="loader-line"><i></i></div></div><div class="scroll-progress" id="scrollProgress"></div><div class="cursor-dot" id="cursorDot"></div><div class="cursor-ring" id="cursorRing"></div>');
const hero=document.querySelector('.hero');hero.classList.add('video-hero');
const heroVideos=[
  {
    eyebrow:'Tower Cranes + Urban Construction',
    title:'Real construction momentum, captured on site.',
    copy:'A cinematic crane time-lapse sets the tone for a contractor built around progress, precision and delivery control.',
    capability:'High-rise construction delivery',
    note:'Structural coordination, lifting plans, site logistics and daily progress visibility aligned into one command rhythm.',
    sector:'Buildings',metric:'25+',metricText:'Years of combined construction expertise',
    video:'https://player.vimeo.com/external/342269134.sd.mp4?s=8edfdab6d6c312125900d4f9bb623afb707cab38&profile_id=139&oauth2_token_id=1223210874',
    poster:'https://pikwizard.com/pw/medium/b4cec2772f08c7a1bd3c1f63426f66f4.jpg'
  },
  {
    eyebrow:'Engineers + Site Planning',
    title:'Decisions happen where the work happens.',
    copy:'Real engineers reviewing plans on a construction site create a stronger, more credible first impression than generic motion graphics.',
    capability:'Engineering-led project control',
    note:'Design coordination, procurement sequencing and site execution are managed together before issues become delays.',
    sector:'Engineering',metric:'360°',metricText:'Design, procurement and site coordination',
    video:'https://player.vimeo.com/external/345176967.sd.mp4?s=10e03e08f6c57a7901f830b78594b66083683a5c&profile_id=139&oauth2_token_id=1223210874',
    poster:'https://thumbs.wbm.im/pw/medium/aacf38f5a099d840880db172125fdd19.jpg'
  },
  {
    eyebrow:'Construction Site Collaboration',
    title:'A premium contractor starts with field clarity.',
    copy:'Hard hats, drawings, site discussion and active coordination bring the homepage closer to real contractor identity.',
    capability:'Site supervision + delivery governance',
    note:'From foremen to engineers, every package is tracked through quality, safety and milestone-based control.',
    sector:'Infrastructure',metric:'HSE',metricText:'Safety-first execution culture',
    video:'https://player.vimeo.com/external/345176754.sd.mp4?s=a5b26714f0b4e585f25e03f738880709712669cb&profile_id=139&oauth2_token_id=1223210874',
    poster:'https://pikwizard.com/pw/medium/d60498adeafe17970a5741d827b12e89.jpg'
  },
  {
    eyebrow:'Drone View + Project Progress',
    title:'Built to be seen from the ground and the sky.',
    copy:'Aerial construction footage adds scale, movement and confidence while keeping the experience professional and corporate.',
    capability:'Project progress visibility',
    note:'Drone-level reporting, progress tracking and executive presentation turn site activity into clear client confidence.',
    sector:'Public Realm',metric:'VIP',metricText:'Executive-grade client presentation',
    video:'https://player.vimeo.com/external/442915493.sd.mp4?s=3690d3ebbb23a86a9356761803868c41ffcc4d06&profile_id=139&oauth2_token_id=1223210874',
    poster:'https://pikwizard.com/pw/medium/21528a7277960453bb633edba2ba7523.jpg'
  }
];
hero.innerHTML=`<span class="lux-grid"></span><span class="lux-orbit"></span><div class="hero-slider" id="heroSlider">${heroVideos.map((x,i)=>`<article class="hero-slide ${i?'':'active'}"><video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="${x.poster}"><source src="${x.video}" type="video/mp4"></video><span class="video-badge">REAL CONSTRUCTION VIDEO</span><span class="hero-shade"></span><div class="hero-grid"><div class="hero-content"><p class="eyebrow">${x.eyebrow}</p><h1>${x.title}</h1><p class="hero-copy">${x.copy}</p></div><aside class="hero-aside"><p class="hero-mini-label">Featured capability</p><h3>${x.capability}</h3><p>${x.note}</p><div class="hero-aside-metrics"><div><strong>${String(i+1).padStart(2,'0')}</strong><span>${x.sector}</span></div><div><strong>${x.metric}</strong><span>${x.metricText}</span></div></div></aside></div></article>`).join('')}</div><div class="hero-strip">${heroVideos.map((x,i)=>`<button class="hero-key ${i?'':'active'}" data-slide="${i}" type="button"><small>Video 0${i+1}</small><strong>${x.sector}</strong></button>`).join('')}</div><div class="hero-bottom"><div class="hero-controls"><button id="prevSlide" type="button">←</button><span id="slideCount">01 / 04</span><button id="nextSlide" type="button">→</button></div><a class="hero-cta magnetic" href="#about">Discover CONS <span>↘</span></a></div>`;
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
const slides=[...document.querySelectorAll('.hero-slide')],keys=[...document.querySelectorAll('.hero-key')],count=document.getElementById('slideCount');let current=0;
function playActiveVideo(){slides.forEach((s,n)=>{const v=s.querySelector('video');if(!v)return;if(n===current){v.muted=true;v.loop=true;v.playsInline=true;v.play().catch(()=>{});}else{v.pause();}})}
function showSlide(i){slides[current].classList.remove('active');current=(i+slides.length)%slides.length;slides[current].classList.add('active');keys.forEach((k,n)=>k.classList.toggle('active',n===current));count.textContent=String(current+1).padStart(2,'0')+' / 04';playActiveVideo();}
document.getElementById('nextSlide').onclick=()=>showSlide(current+1);document.getElementById('prevSlide').onclick=()=>showSlide(current-1);keys.forEach((k,i)=>k.onclick=()=>showSlide(i));setInterval(()=>showSlide(current+1),8500);showSlide(0);
const menu=document.getElementById('mobileMenu');document.getElementById('menuBtn').onclick=()=>{menu.classList.add('open');menu.setAttribute('aria-hidden','false')};document.getElementById('mobileClose').onclick=()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true')};menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
document.querySelectorAll('.service-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.service-tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.service-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.target).classList.add('active')}));
let arabic=false;document.getElementById('langBtn').onclick=()=>{arabic=!arabic;body.classList.toggle('rtl',arabic);document.documentElement.lang=arabic?'ar':'en';document.documentElement.dir=arabic?'rtl':'ltr';document.getElementById('langBtn').textContent=arabic?'EN':'AR'};
document.querySelectorAll('main section,.footer').forEach(x=>x.classList.add('reveal-section'));const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ro.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal-section').forEach(x=>ro.observe(x));
const loader=document.getElementById('pageLoader');window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('done'),350));setTimeout(()=>loader.classList.add('done'),2200);
const progress=document.getElementById('scrollProgress');addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+'%'},{passive:true});
const dot=document.getElementById('cursorDot'),ring=document.getElementById('cursorRing');let mx=0,my=0,rx=0,ry=0;addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.cssText+=`;opacity:1;left:${mx}px;top:${my}px`;ring.style.opacity=1});(function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();document.querySelectorAll('a,button,.project-card,.hero-aside').forEach(x=>{x.onmouseenter=()=>ring.classList.add('hover');x.onmouseleave=()=>ring.classList.remove('hover')});
document.querySelectorAll('.project-card,.hero-aside').forEach(c=>{c.classList.add('tilt-card');c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${y*-6}deg) rotateY(${x*8}deg) scale(1.012)`};c.onmouseleave=()=>c.style.transform=''});