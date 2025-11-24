(() => {
  'use strict';
  const KEY = 'tema-site'; 
  const linkTema = document.getElementById('theme-link');

  function aplicaTema(modo) {
    if (!linkTema) return;
    linkTema.href = (modo === 'dark') ? 'css/theme-dark.css' : 'css/theme-light.css';
    localStorage.setItem(KEY, modo);
    const botao = document.getElementById('toggle-tema');
    if (botao) botao.textContent = (modo === 'dark') ? 'Tema Claro' : 'Tema Escuro';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const salvo = localStorage.getItem(KEY) || 'light';
    aplicaTema(salvo);

    const botao = document.getElementById('toggle-tema');
    if (botao) {
      botao.addEventListener('click', () => {
        const atual = localStorage.getItem(KEY) || 'light';
        aplicaTema(atual === 'light' ? 'dark' : 'light');
      });
    }
  });
})();
