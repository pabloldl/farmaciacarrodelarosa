'use strict';

const year = document.getElementById('year');
if (year) year.textContent = new Intl.DateTimeFormat('es', {year: 'numeric', timeZone: 'Europe/Madrid'}).format(new Date());

const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
const phoneValue = document.getElementById('phone-value');

if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    manualCopy.hidden = true;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('956 716 268');
      copyStatus.textContent = 'Teléfono copiado: 956 716 268.';
    } catch {
      copyStatus.textContent = 'Puedes copiar el número desde este campo.';
      manualCopy.hidden = false;
      phoneValue.focus();
      phoneValue.select();
    }
  });
}
