document.querySelectorAll('.menu-toggle').forEach((button)=>button.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open')));
document.querySelectorAll('.faq-q').forEach((button)=>button.addEventListener('click',()=>button.closest('.faq-item')?.classList.toggle('open')));
document.querySelectorAll('video').forEach((video)=>{video.muted=true;video.defaultMuted=true;video.autoplay=true;video.loop=true;video.playsInline=true;video.controls=true;video.setAttribute('muted','');video.setAttribute('autoplay','');video.setAttribute('loop','');video.setAttribute('playsinline','');video.play?.().catch(()=>{});});
document.querySelectorAll('[data-lightbox]').forEach((button)=>button.addEventListener('click',()=>{let box=document.querySelector('.lightbox');if(!box){box=document.createElement('div');box.className='lightbox';box.innerHTML='<img alt="Expanded clinic gallery image">';box.addEventListener('click',()=>box.classList.remove('open'));document.body.appendChild(box);}box.querySelector('img').src=button.dataset.lightbox;box.classList.add('open');}));
document.querySelectorAll('.booking-form').forEach((form)=>form.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(form);const name=data.get('name')||'';const phone=data.get('phone')||'';const service=data.get('service')||'';const text=encodeURIComponent('Hello First Smile Dental Clinic,

My Name: '+name+'
Phone Number: '+phone+'
Treatment Required: '+service+'

I would like to book an appointment.');window.open('https://wa.me/918171515184?text='+text,'_blank','noopener');}));
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('is-visible');}),{threshold:.12});document.querySelectorAll('.reveal').forEach((item)=>observer.observe(item));
const loadMap=(map)=>{if(map.dataset.src){map.src=map.dataset.src;delete map.dataset.src;}};const mapObserver=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){loadMap(entry.target);mapObserver.unobserve(entry.target);}}),{rootMargin:'240px'});document.querySelectorAll('.lazy-map').forEach((map)=>mapObserver.observe(map));
