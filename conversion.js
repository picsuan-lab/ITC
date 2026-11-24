'use strict';
// Assignment 1: Conversion
const converters = {
  c2f: { fn: c => c * 9 / 5 + 32, from: '°C', to: '°F' },
  f2c: { fn: f => (f - 32) * 5 / 9, from: '°F', to: '°C' },
  m2f: { fn: m => m * 3.28084, from: 'm', to: 'ft' },
  f2m: { fn: ft => ft / 3.28084, from: 'ft', to: 'm' }
};
document.querySelectorAll('[data-conv]').forEach(btn => btn.addEventListener('click', () => {
  const key = btn.dataset.conv, { fn, from, to } = converters[key], out = $(`r-${key}`), v = num(key);
  out.classList.toggle('err', Number.isNaN(v));
  out.textContent = Number.isNaN(v) ? 'Enter a number first.' : `${v} ${from} = ${fn(v).toFixed(2)} ${to}`;
}));
