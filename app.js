'use strict';
const $=s=>document.querySelector(s);
let lang='ar',category='all';
try{lang=localStorage.getItem('mzmz-language')==='en'?'en':'ar'}catch{}
const t=(ar,en)=>lang==='ar'?ar:en;
const menu=[
 {ar:'الشطيرة الخطيرة',en:'Al Khatira',cat:'sandwich',price:1,meal:2,desc:['دجاج، صوص الجبنة المميز، خيار مخلل وخس.','Chicken, signature cheese sauce, pickles and lettuce.'],img:'sandwiches-hd',crop:'65 155 395 285'},
 {ar:'خيال',en:'Khayaal',cat:'sandwich',price:2,meal:3,desc:['صدر دجاج مقرمش، صوص الجبنة المميز وشرائح شيدر.','Crispy chicken breast, signature cheese sauce and cheddar.'],img:'sandwiches-hd',crop:'550 145 410 300'},
 {ar:'بيغ مزمز',en:'Big MZMZ',cat:'sandwich',price:2,meal:3,desc:['دجاج مقرمش، صوص الجبنة الحار، تركي مدخن وشيدر.','Crispy chicken, spicy cheese sauce, smoked turkey and cheddar.'],img:'sandwiches-hd',crop:'45 635 455 280'},
 {ar:'هاني',en:'Hani',cat:'sandwich',price:2,meal:3,desc:['صدر دجاج مع هوني ماسترد، روست بيف وجبنة سويس.','Chicken breast, honey mustard, roast beef and Swiss cheese.'],img:'extras-hd',crop:'4 4 504 504'},
 {ar:'الديك',en:'Al Deek',cat:'sandwich',price:3,meal:4,desc:['صدر دجاج، صوص النار المميز، شيدر وهالبينو.','Chicken breast, signature hot sauce, cheddar and jalapeños.'],img:'sides-hd',crop:'4 4 504 504'},
 {ar:'الدينامو',en:'Dynamo',cat:'sandwich',price:3,meal:4,desc:['دجاج مقرمش، صوص الدينامو وحلقات بصل.','Crispy chicken, Dynamo sauce and onion rings.'],img:'sides-hd',crop:'516 4 504 504'},
 {ar:'مزموزيل',en:'Mazmozeel',cat:'sandwich',price:2.5,meal:3.5,desc:['دجاج، موزاريلا ستيكس، شيدر، سويس وهالبينو.','Chicken, mozzarella sticks, cheddar, Swiss cheese and jalapeños.'],img:'sandwiches-hd',crop:'580 600 400 345'},
 {ar:'مزمز شيبس',en:'MZMZ Chips',cat:'chips',price:2.5,desc:['شيبس طبيعي مقرمش، جبنة وصوصات مزمز الخاصة.','Crispy natural potato chips, cheese and MZMZ sauces.'],img:'extras-hd',crop:'516 4 504 504'},
 {ar:'تاكيز أزرق',en:'Blue Takis',cat:'chips',price:2.5,desc:['نكهة حارة وحامضة.','A spicy, tangy flavour.'],img:'flavors-b',crop:'122 788 260 290'},
 {ar:'سطل شيبس',en:'Chips Bucket',cat:'chips',price:2.5,desc:['شيبس طبيعي مقرمش بنكهات متعددة، جبنة وصوصات.','A bucket of natural potato chips with flavour options, cheese and sauces.'],img:'extras-hd',crop:'4 516 504 504'},
 {ar:'تندر فينغرز',en:'Tender Fingers',cat:'sides',price:1.5,desc:['ثلاث قطع دجاج مقرمش مع صوص الجبنة المميز.','Three crispy chicken tenders with signature cheese sauce.'],img:'sides-hd',crop:'4 516 504 504'},
 {ar:'بونلس بون بون',en:'Boneless Bon Bon',cat:'sides',price:2,desc:['10 قطع بونلس مع صوصات مزمز.','Ten boneless chicken bites with MZMZ sauces.'],img:'sides-hd',crop:'516 516 504 504'},
 {ar:'العو',en:'Al Aww',cat:'sides',price:5,desc:['شيبس وبونلس مقرمش مع صوصات مزمز المميزة.','Chips and crispy boneless chicken with MZMZ signature sauces.'],img:'extras-hd',crop:'516 516 504 504'},
 {ar:'فرايز',en:'Fries',cat:'sides',price:1,desc:['بطاطا أصابع رفيعة وكريسبي مع صوص جبنة وكاتشب.','Thin crispy fries with cheese sauce and ketchup.'],img:'fries-clean',crop:null},
 {ar:'عصير مش طبيعي',en:'Mesh Tabe3i Juice',cat:'drinks',price:.5,desc:['فراولة، برتقال أو توت.','Strawberry, orange or berry.'],img:'juice-clean',crop:null},
 {ar:'مشروب غازي جوي',en:'Joy Soft Drink',cat:'drinks',price:.35,desc:['نكهات جوي المختلفة.','Assorted Joy flavours.'],img:'joy-cola-hd',crop:null}
];
const combos=[
 {ar:'منيو المزمزة',en:'Al Mazmaza Combo',img:'combo-mzmz-hd',crop:null,desc:['الشطيرة الخطيرة + مزمز شيبس مع جبنة وصوصات + 3 تندر فينغرز مع جبنة + عصير أو مياه.','Al Khatira sandwich, MZMZ chips with cheese and sauces, three tenders with cheese, and juice or water.']},
 {ar:'منيو الشرس',en:'Al Shares Combo',img:'combo-fierce-hd',crop:null,desc:['ساندويش خيال + الشطيرة الخطيرة + بونلس بون بون 10 قطع.','Khayaal sandwich, Al Khatira sandwich and ten Boneless Bon Bon bites.']},
 {ar:'منيو التفليلة',en:'Al Tafleela Combo',img:'combo-full-hd',crop:null,desc:['ساندويش خيال + بيغ مزمز + عصيرين.','Khayaal sandwich, Big MZMZ and two juices.']}
];
const flavours=[
 ['مزمز','MZMZ','خلطة مزمز الخاصة من مجموعة نكهات.','The signature MZMZ blend of flavours.'],
 ['باربيكيو','BBQ','نكهة شواء حلوة ومميزة.','A sweet, smoky barbecue flavour.'],
 ['جبنة حارة','Spicy cheese','جبنة شيدر مع الحار.','Cheddar meets a spicy kick.'],
 ['بابريكا','Paprika','نكهة الفلفل الحلو المميزة.','A sweet pepper flavour.'],
 ['ملح وخل','Salt & vinegar','نكهة مالحة وحامضة.','Salty and tangy.'],
 ['تاكيز أزرق','Blue Takis','نكهة حارة وحامضة.','A spicy, tangy flavour.'],
 ['سويت تشيلي','Sweet chilli','نكهة الفلفل الحلو مع الحار والحموضة.','Sweet pepper with heat and tang.'],
 ['حار','Hot','نكهة الفلفل الحار.','A hot pepper kick.']
];
let flavour=0;
const photoUrl=name=>`assets/${name}.${name.endsWith('-hd')||name.endsWith('-clean')?'webp':name==='joy-cans'?'png':'jpg'}`;
const picture=(name,crop,label)=>!crop?`<img class="product-photo" src="${photoUrl(name)}" alt="${label}" width="1536" height="1024" loading="lazy">`:`<svg viewBox="${crop}" style="aspect-ratio:${crop.split(' ')[2]}/${crop.split(' ')[3]}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg"><image href="${photoUrl(name)}" width="${name.endsWith('-hd')?1024:640}" height="${name.endsWith('-hd')?1024:1138}"/></svg>`;
const money=n=>Number(n).toFixed(n===.35?2:Number.isInteger(n)?0:1)+' '+t('د.أ','JD');
function renderMenu(){
 const q=$('#search').value.trim().toLowerCase();
 const filtered=menu.filter(m=>(category==='all'||m.cat===category)&&(!q||(m.ar+' '+m.en+' '+m.desc.join(' ')).toLowerCase().includes(q)));
 $('#menu-grid').innerHTML=filtered.map(m=>`<article class="menu-card"><button class="food-visual" data-photo="${m.img}" data-crop="${m.crop||''}" data-caption="${t(m.ar,m.en)}" aria-label="${t('تكبير صورة ','Enlarge image of ')+t(m.ar,m.en)}">${picture(m.img,m.crop,t(m.ar,m.en))}<span class="zoom-mark" aria-hidden="true">+</span></button><div class="menu-copy"><h3>${t(m.ar,m.en)}</h3><p>${t(...m.desc)}</p><div class="prices"><span>${m.meal?t('ساندويش','Sandwich'):t('السعر','Price')}<b>${money(m.price)}</b></span>${m.meal?`<span>${t('وجبة','Meal')}<b>${money(m.meal)}</b></span>`:''}</div></div></article>`).join('');
 $('#empty').hidden=filtered.length!==0;
}
function renderCombos(){
 $('#combo-grid').innerHTML=combos.map(m=>`<article class="combo-card"><button class="combo-img food-visual" data-photo="${m.img}" data-crop="${m.crop||''}" data-caption="${t(m.ar,m.en)}" aria-label="${t('تكبير صورة ','Enlarge image of ')+t(m.ar,m.en)}">${picture(m.img,m.crop,t(m.ar,m.en))}<span class="zoom-mark" aria-hidden="true">+</span></button><div class="copy"><h3>${t(m.ar,m.en)}</h3><p>${t(...m.desc)}</p><div class="price-row"><span>${t('المزمزة كاملة','The whole combo')}</span><b>${money(5)}</b></div></div></article>`).join('');
}
function renderFlavours(){
 $('#flavours').innerHTML=flavours.map((f,i)=>`<button data-flavour="${i}" aria-pressed="${flavour===i}">${t(f[0],f[1])}</button>`).join('');
 $('#flavour-description').textContent=t(flavours[flavour][2],flavours[flavour][3]);
}
function setLanguage(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-ar][data-en]').forEach(el=>el.textContent=el.dataset[lang].replaceAll('\\n','\n'));
 $('#language').innerHTML=lang==='ar'?'EN <span aria-hidden="true">↔</span>':'عربي <span aria-hidden="true">↔</span>';
 $('#language').setAttribute('aria-label',t('Switch to English','التبديل إلى العربية'));
 $('#search').placeholder=t('دوّر على اللي عبالك…','Find your favourite…');
 $('#search').setAttribute('aria-label',t('البحث في المنيو','Search the menu'));
 document.title=t('مزمز | محطة لازم توقف عندها','MZMZ | Your downtown Amman stop');
 renderMenu();renderCombos();renderFlavours();
 try{localStorage.setItem('mzmz-language',lang)}catch{}
}
$('#language').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';setLanguage()});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b?'true':'false'));renderMenu()}));
$('#search').addEventListener('input',renderMenu);
$('#flavours').addEventListener('click',e=>{const b=e.target.closest('[data-flavour]');if(b){flavour=Number(b.dataset.flavour);renderFlavours()}});
const dialog=$('#photo-dialog');
function openPhoto(name,caption,crop=''){
 const image=$('#dialog-image'), product=$('#dialog-product');
 image.hidden=Boolean(crop);product.hidden=!crop;
 if(crop){
  image.removeAttribute('src');
  product.innerHTML=picture(name,crop,caption);
  const svg=product.querySelector('svg');
  svg.setAttribute('preserveAspectRatio','xMidYMid meet');
  const [, , width,height]=crop.split(' ').map(Number);
  svg.style.aspectRatio=`${width} / ${height}`;
  svg.style.width=`min(100%, ${72*width/height}vh)`;
 }else{product.replaceChildren();image.src=photoUrl(name);image.alt=caption}
 $('#dialog-caption').textContent=caption;dialog.showModal();document.body.style.overflow='hidden';
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-photo]');if(b)openPhoto(b.dataset.photo,b.dataset.caption,b.dataset.crop||'')});
$('#original-menu').addEventListener('click',()=>openPhoto('menu',t('المنيو الأصلي — الأسعار بالدينار الأردني','Original Arabic menu — prices in JD')));
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>document.body.style.overflow='');
$('#year').textContent=new Date().getFullYear();
setLanguage();

