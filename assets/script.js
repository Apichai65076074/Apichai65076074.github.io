(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('themeBtn');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (btn){
    btn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('light');
    });
  }
  if (navToggle && navMenu){
    navToggle.addEventListener('click', ()=>{
      const open = navMenu.style.display === 'block';
      navMenu.style.display = open ? 'none' : 'block';
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Basic outbound link tracking without external libs (privacy‑friendly)
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if (!a) return;
    try{
      const url = new URL(a.href);
      if (url.origin !== location.origin){
        console.log('Outbound:', url.href);
      }
    }catch(_){}
  });
})();