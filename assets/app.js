'use strict';
const I18N={
th:{loginTitle:'เข้าสู่ระบบ HR',loginNote:'เฉพาะผู้ดูแลที่ได้รับอนุญาต การกรอก Face ID ไม่ใช่การยืนยันตัวตน',user:'ผู้ใช้',pass:'รหัสผ่าน',signin:'เข้าสู่ระบบ',logout:'ออกจากระบบ',
 e_bad:'ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',e_throttled:'ลองผิดหลายครั้ง กรุณารอ 15 นาที',e_notconfigured:'ระบบยังไม่ได้ตั้งค่าผู้ใช้ จึงปิดการเข้าถึงไว้ก่อน',e_csrf:'หน้าหมดอายุ กรุณาลองใหม่',
 title:'สแกนหน้าไม่สำเร็จ / ลืมสแกน — พฤศจิกายน 2569',subtitle:'คำนวณจาก SAGA HR ตามกติกา: สแกนซ้ำสำเร็จถือว่าสำเร็จ, สแกนเข้า ≥16:00 นับเป็นออกบ่าย',
 search:'ค้นหา Face ID',date:'วันที่',dept:'แผนก',status:'สถานะ',all:'ทั้งหมด',allDates:'ทุกวันที่ตรวจแล้ว',issues:'เฉพาะที่ต้องติดตาม',
 s_full:'ครบ',s_partial:'สแกนไม่ครบ',s_none:'ไม่สแกน',s_review:'รอตรวจ',s_manual:'ตรวจด้วยมือ',
 st_people:'พนักงานที่แสดง',st_issue:'คน-วันที่ต้องติดตาม',st_full:'คน-วันครบ',st_manual:'ตรวจด้วยมือ',
 coverage:'ตรวจครบเฉพาะ 2–7 พ.ย. วันที่ 1 และ 8 พ.ย. ข้อมูลส่งออกไม่ครบ จึงไม่สรุปว่าขาด',am:'เช้า',pm:'บ่าย',noPhoto:'ไม่มีรูป',punches:'บันทึกสแกน',close:'ปิด',
 f_name_mismatch_unresolved:'ชื่อในชีตกับ HR ไม่ตรงกัน รอยืนยัน',f_bd010_ac141_not_written:'7/11 ช่องบ่าย (AC141) ยังไม่ได้ลง รออนุมัติ',manualNote:'ออนไลน์/SA088/SA089/ไม่มี Face ID — ตรวจด้วยมือ',noScanRule:'กติกา No Scan: มีสแกน ≥1 ครั้ง = เต็มวัน',empty:'ไม่พบข้อมูล',internal:'ข้อมูลภายในบริษัท ห้ามเผยแพร่'},
zh:{loginTitle:'HR 登录',loginNote:'仅限授权管理员。输入人脸编号不代表身份验证',user:'用户名',pass:'密码',signin:'登录',logout:'退出',
 e_bad:'用户名或密码错误',e_throttled:'尝试次数过多，请等待15分钟',e_notconfigured:'尚未设置用户，系统暂时关闭访问',e_csrf:'页面已过期，请重试',
 title:'人脸打卡失败 / 漏打卡 — 2026年11月',subtitle:'根据 SAGA HR 计算：失败后重打成功视为成功；16:00 后上班打卡计为下午下班',
 search:'搜索人脸编号',date:'日期',dept:'部门',status:'状态',all:'全部',allDates:'全部已核对日期',issues:'仅需跟进',
 s_full:'完整',s_partial:'打卡不完整',s_none:'未打卡',s_review:'待复核',s_manual:'人工核对',
 st_people:'显示员工',st_issue:'需跟进人次',st_full:'完整人次',st_manual:'人工核对',
 coverage:'仅 11月2–7日 已完整核对。11月1日和8日导出数据不完整，不判定缺勤',am:'上午',pm:'下午',noPhoto:'无照片',punches:'打卡记录',close:'关闭',
 f_name_mismatch_unresolved:'表格与 HR 姓名不一致，待确认',f_bd010_ac141_not_written:'11/7 下午格 (AC141) 未填写，待批准',manualNote:'线上/SA088/SA089/无人脸编号 — 人工核对',noScanRule:'No Scan 规则：≥1 次打卡 = 全天',empty:'无数据',internal:'公司内部资料，禁止外传'},
my:{loginTitle:'HR ဝင်ရောက်ရန်',loginNote:'ခွင့်ပြုထားသော စီမံသူများသာ။ Face ID ရိုက်ထည့်ခြင်းသည် အတည်ပြုခြင်း မဟုတ်ပါ',user:'အသုံးပြုသူ',pass:'စကားဝှက်',signin:'ဝင်မည်',logout:'ထွက်မည်',
 e_bad:'အသုံးပြုသူ သို့မဟုတ် စကားဝှက် မှားနေသည်',e_throttled:'အကြိမ်များစွာ မှားသဖြင့် ၁၅ မိနစ် စောင့်ပါ',e_notconfigured:'အသုံးပြုသူ မသတ်မှတ်ရသေးသဖြင့် ဝင်ခွင့် ပိတ်ထားသည်',e_csrf:'စာမျက်နှာ သက်တမ်းကုန်သည်၊ ထပ်ကြိုးစားပါ',
 title:'မျက်နှာစကင် မအောင်မြင် / မေ့ခဲ့ — ၂၀၂၆ နိုဝင်ဘာ',subtitle:'SAGA HR မှ တွက်ချက်သည်။ ပြန်စကင်အောင်မြင်လျှင် အောင်မြင်သည်။ ၁၆:၀၀ နောက် ဝင်စကင်ကို ညနေထွက်အဖြစ် ရေတွက်သည်',
 search:'Face ID ရှာရန်',date:'ရက်စွဲ',dept:'ဌာန',status:'အခြေအနေ',all:'အားလုံး',allDates:'စစ်ပြီးရက်အားလုံး',issues:'လိုက်လံရန်သာ',
 s_full:'ပြည့်စုံ',s_partial:'စကင် မပြည့်စုံ',s_none:'စကင် မလုပ်',s_review:'စစ်ဆေးဆဲ',s_manual:'လက်ဖြင့်စစ်',
 st_people:'ပြသထားသော ဝန်ထမ်း',st_issue:'လိုက်လံရန် လူ-ရက်',st_full:'ပြည့်စုံ လူ-ရက်',st_manual:'လက်ဖြင့်စစ်',
 coverage:'နိုဝင်ဘာ ၂–၇ သာ အပြည့်စစ်ပြီး။ ၁ နှင့် ၈ ရက် ဒေတာမပြည့်စုံ၍ ပျက်ကွက်ဟု မသတ်မှတ်ပါ',am:'မနက်',pm:'ညနေ',noPhoto:'ဓာတ်ပုံမရှိ',punches:'စကင်မှတ်တမ်း',close:'ပိတ်',
 f_name_mismatch_unresolved:'ဇယားနှင့် HR အမည် မကိုက်ညီ၊ အတည်ပြုရန်',f_bd010_ac141_not_written:'၇/၁၁ ညနေကွက် (AC141) မဖြည့်ရသေး',manualNote:'အွန်လိုင်း/SA088/SA089/Face ID မရှိ — လက်ဖြင့်စစ်',noScanRule:'No Scan စည်းမျဉ်း: စကင် ≥၁ = တစ်နေ့လုံး',empty:'ဒေတာ မရှိ',internal:'ကုမ္ပဏီတွင်းသုံးသာ'}};
const qs=new URLSearchParams(location.search);const lang=['th','zh','my'].includes(qs.get('lang'))?qs.get('lang'):'th';
const t=k=>I18N[lang][k]??I18N.th[k]??k;const $=id=>document.getElementById(id);
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=String(text);return e;}
document.documentElement.lang=lang;document.body.classList.add('lang-'+lang);
document.querySelectorAll('[data-i]').forEach(n=>{n.textContent=t(n.dataset.i);});
document.querySelectorAll('.langs a').forEach(a=>{if(a.dataset.l===lang)a.classList.add('on');});
const err=document.body.dataset.err;if(err&&$('err')){$('err').hidden=false;$('err').textContent=t('e_'+err);}
if(!$('err')&&false){}
{
 const ISSUE=['none','partial','review'];let D;
 const dayTxt=d=>new Date(d+'T12:00:00+07:00').toLocaleDateString({th:'th-TH',zh:'zh-CN',my:'my-MM'}[lang],{day:'numeric',month:'short'});
 const opt=(s,v,l)=>{const o=el('option','',l);o.value=v;s.append(o);};
 fetch('data.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw 0;return r.json();}).then(d=>{D=d;init();}).catch(()=>{$('list').replaceChildren(el('p','err',t('empty')));});
 function init(){
  opt($('date'),'all',t('allDates'));D.checkedDates.forEach(d=>opt($('date'),d,dayTxt(d)));
  opt($('dept'),'',t('all'));[...new Set(D.employees.map(e=>e.dept))].sort().forEach(d=>opt($('dept'),d,d||'—'));
  opt($('status'),'issues',t('issues'));opt($('status'),'',t('all'));['none','partial','review','full','manual'].forEach(s=>opt($('status'),s,t('s_'+s)));
  if(qs.get('date')&&D.checkedDates.includes(qs.get('date')))$('date').value=qs.get('date');
  if(qs.get('face'))$('q').value=qs.get('face');
  ['q','date','dept','status'].forEach(i=>$(i).addEventListener('input',render));
  $('coverage').textContent=t('coverage');render();}
 function sts(e,dates){return dates.map(d=>e.days[d]?.s).filter(Boolean);}
 function render(){
  const q=$('q').value.trim().toUpperCase().replace(/[\s-]/g,''),dt=$('date').value,dp=$('dept').value,st=$('status').value;
  const dates=dt==='all'?D.checkedDates:[dt];
  const rows=D.employees.filter(e=>(!q||e.face.includes(q))&&(!dp||e.dept===dp)&&(()=>{const s=sts(e,dates);if(st==='issues')return s.some(x=>ISSUE.includes(x));if(!st)return true;return s.includes(st);})());
  let iss=0,full=0,man=0;rows.forEach(e=>sts(e,dates).forEach(s=>{if(ISSUE.includes(s))iss++;else if(s==='full')full++;else if(s==='manual')man++;}));
  $('stats').replaceChildren(...[[t('st_people'),rows.length,1],[t('st_issue'),iss],[t('st_full'),full],[t('st_manual'),man]].map(([l,v,p])=>{const a=el('article','stat'+(p?' primary':''));a.append(el('div','stat-label',l),el('div','stat-value',v));return a;}));
  $('list').replaceChildren(...(rows.length?rows.map(e=>card(e,dates)):[el('p','muted',t('empty'))]));}
 function photo(e,cls){const a=el('div',cls||'avatar');if(e.photo){const i=el('img');i.src='photos/'+encodeURIComponent(e.face)+'.jpg';i.alt='';i.loading='lazy';i.onerror=()=>a.replaceChildren(el('span','nophoto',t('noPhoto')));a.append(i);}else a.append(el('span','nophoto',t('noPhoto')));return a;}
 function card(e,dates){const c=el('article','emp');const top=el('div','emp-top'),id=el('div');
  id.append(el('h3','',e.name),el('p','code',e.face+' · '+(e.code||'—')),el('p','dept',e.dept||'—'));top.append(photo(e),id);c.append(top);
  if(e.flag)c.append(el('p','flag',t('f_'+e.flag)));if(e.manual)c.append(el('p','policy',t('manualNote')));if(e.noScanRule)c.append(el('p','policy',t('noScanRule')));
  const strip=el('div','days');dates.forEach(d=>{const x=e.days[d];if(!x)return;const b=el('button','day s-'+x.s);b.type='button';b.append(el('span','dd',dayTxt(d)),el('span','ds',t('s_'+x.s)));
   if(x.s!=='manual')b.append(el('span','ap',(x.am?'✓':'✗')+t('am')+' '+(x.pm?'✓':'✗')+t('pm')));b.addEventListener('click',()=>detail(e,d));strip.append(b);});
  c.append(strip);return c;}
 function detail(e,d){const x=e.days[d],g=$('detail');const box=el('div','dlg');box.append(el('h3','',e.face+' · '+e.name),el('p','muted',dayTxt(d)+' — '+t('s_'+x.s)),el('h4','',t('punches')));
  const ul=el('ul','punches');(x.punches||[]).forEach(p=>ul.append(el('li','r-'+(p.r==='成功'?'ok':'bad'),p.t+'  '+p.a+'  '+p.r+(p.v&&p.v!=='无需复核'?' ('+p.v+')':''))));if(!(x.punches||[]).length)ul.append(el('li','',t('empty')));
  const cl=el('button','',t('close'));cl.type='button';cl.onclick=()=>g.close();box.append(ul,cl);g.replaceChildren(box);g.showModal();}
}
