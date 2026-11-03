(()=>{
  const menu=document.querySelector('[data-menu]');
  const toggle=document.querySelector('[data-menu-toggle]');
  if(menu&&toggle){toggle.addEventListener('click',()=>{const isOpen=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const themeBtn=document.querySelector('[data-theme-toggle]');
  const themes=[['neon','Neon Glass'],['void','Void Lotus'],['mycelium','Mycelium Neon'],['aurora','Aurora']];
  let index=0;
  if(themeBtn){themeBtn.addEventListener('click',()=>{index=(index+1)%themes.length;document.documentElement.dataset.theme=themes[index][0];themeBtn.setAttribute('aria-label','Change theme. Current: '+themes[index][1]);themeBtn.querySelector('[data-theme-name]').textContent=themes[index][1];});}
})();
