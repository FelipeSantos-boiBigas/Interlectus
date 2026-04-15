(() => {
  'use strict';
  const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  function validaEmail(input) {
    if (!input) return true;
    const ok = EMAIL_REGEX.test((input.value || '').trim());
    input.setCustomValidity(ok ? '' : 'Informe um e-mail válido (ex.: joao.silva@net.com).');
    return ok;
  }
  function validaCPF(input) {
    if (!input) return true;
    const ok = CPF_REGEX.test((input.value || '').trim());
    input.setCustomValidity(ok ? '' : 'Informe o CPF no formato 999.999.999-99.');
    return ok;
  }
  function aplicaMascaraCPF(input) {
    let v = input.value.replace(/\D/g, '').slice(0, 11);
    let out = '';
    if (v.length > 0) out = v.slice(0,3);
    if (v.length >= 4) out += '.' + v.slice(3,6);
    if (v.length >= 7) out += '.' + v.slice(6,9);
    if (v.length >= 10) out += '-' + v.slice(9,11);
    input.value = out;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#iemail, #id_email, input[name="email"]');
    let cpf = document.querySelector('#icpf, input[name="cpf"]');
    if (email && !cpf) {
      cpf = document.createElement('input');
      cpf.type = 'text';
      cpf.id = 'icpf';
      cpf.name = 'cpf';
      cpf.placeholder = 'CPF (999.999.999-99)';
      cpf.inputMode = 'numeric';
      cpf.autocomplete = 'off';
      cpf.style.display = 'block';
      cpf.style.marginTop = '8px';
      email.insertAdjacentElement('afterend', cpf);
    }
    if (email) {
      email.addEventListener('input', () => { validaEmail(email); email.reportValidity(); });
      email.addEventListener('blur', () => { validaEmail(email); });
    }
    if (cpf) {
      cpf.addEventListener('input', () => { aplicaMascaraCPF(cpf); validaCPF(cpf); cpf.reportValidity(); });
      cpf.addEventListener('blur', () => { validaCPF(cpf); });
    }
    const form = email ? email.closest('form') : document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const okEmail = validaEmail(email);
        const okCPF = validaCPF(cpf);
        if (!okEmail || !okCPF) {
          e.preventDefault();
          ( !okEmail ? email : cpf ).reportValidity();
        }
      });
    }
  });
})();
