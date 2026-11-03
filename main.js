(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
 document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();let valid=true;
  form.querySelectorAll('[required]').forEach(field=>{const err=form.querySelector(`[data-error-for="${field.id||field.name}"]`);let msg='';
   if(field.type==='checkbox'&&!field.checked)msg='Please confirm this field.';
   else if(!String(field.value||'').trim())msg='Please complete this field.';
   else if(field.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))msg='Enter a valid email address.';
   if(err)err.textContent=msg;field.setAttribute('aria-invalid',msg?'true':'false');if(msg)valid=false;
  });
  const status=form.querySelector('.form-status');if(status)status.textContent=valid?'Thanks — your entries passed local validation. Demo mode: no message was sent or saved. Connect a secure form endpoint before publishing.':'Please correct the highlighted fields and try again.';
  if(!valid)form.querySelector('[aria-invalid="true"]')?.focus();
 }));
 document.querySelectorAll('form[data-demo-form] input,form[data-demo-form] select,form[data-demo-form] textarea').forEach(f=>f.addEventListener('input',()=>{const e=document.querySelector(`[data-error-for="${f.id||f.name}"]`);if(e&&(f.type==='checkbox'?f.checked:String(f.value||'').trim()))e.textContent=''}));
 const search=document.querySelector('#service-search');if(search){const cards=[...document.querySelectorAll('[data-service-card]')];search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();cards.forEach(c=>c.hidden=!c.textContent.toLowerCase().includes(q));const count=document.querySelector('#service-count');if(count)count.textContent=`${cards.filter(c=>!c.hidden).length} service(s) shown`})}
 const box=document.querySelector('.lightbox');if(box){const image=box.querySelector('img'),close=box.querySelector('button');document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{const i=b.querySelector('img');image.src=i.src;image.alt=i.alt;box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus()}));const hide=()=>{box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow=''};close.addEventListener('click',hide);box.addEventListener('click',e=>{if(e.target===box)hide()});document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()})}
 const back=document.querySelector('.back-top');if(back){const update=()=>back.classList.toggle('show',scrollY>500);addEventListener('scroll',update,{passive:true});update();back.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}))}
 document.querySelectorAll('[data-current-year]').forEach(e=>e.textContent=new Date().getFullYear());
 const params=new URLSearchParams(location.search),topic=params.get('topic'),select=document.querySelector('#topic');if(topic&&select){const map={'community-support':'services','learning':'services','youth-family':'services','neighbourhood':'services','volunteering':'volunteering','partnership':'sponsorship'};select.value=map[topic]||''}
})();
