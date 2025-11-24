(() => {
  'use strict';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validarEmail(campo) {
    if (!campo) return true;
    const email = (campo.value || '').trim();
    const ok = emailRegex.test(email);
    campo.style.border = ok ? '1px solid green' : '2px solid red';
    campo.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (ok) {
      campo.setCustomValidity('');
    } else {
      campo.setCustomValidity('Por favor, insira um endereço de e-mail válido.');
    }

    return ok;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const campoEmailCliente = document.getElementById('id_email');
    const campoEmail = document.getElementById('iemail');
    const formulario = document.querySelector('form');
    [campoEmailCliente, campoEmail].forEach((el) => {
      if (!el) return;
      el.addEventListener('blur', () => validarEmail(el));
      el.addEventListener('input', () => {
        if (validarEmail(el)) el.reportValidity();
      });
    });
  });

})();
