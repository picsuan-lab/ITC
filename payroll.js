'use strict';
// Assignment 4: Simple Payroll (add / delete)
const employees = [];
const render = () => {
  $('payBody').innerHTML = employees.length
    ? employees.map(({ name, days, rate, deduction }, i) => {
        const gross = days * rate;
        return `<tr><td>${i + 1}</td><td>${name}</td><td>${days}</td><td>${fmt(rate)}</td><td>${fmt(gross)}</td><td>${fmt(deduction)}</td><td>${fmt(gross - deduction)}</td></tr>`;
      }).join('')
    : '<tr><td colspan="7" style="text-align:center;color:var(--muted)">No employees yet. Add one above.</td></tr>';
};
$('addBtn').addEventListener('click', () => {
  const name = $('pName').value.trim(), days = num('pDays'), rate = num('pRate'), deduction = num('pDed');
  const err = $('payErr');
  if (!name || [days, rate, deduction].some(Number.isNaN) || days < 0 || rate < 0 || deduction < 0) {
    err.textContent = 'Fill in every field with valid values.'; return;
  }
  const safeName = name.replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
  employees.push({ name: safeName, days, rate, deduction });
  err.textContent = '';
  ['pName', 'pDays', 'pRate'].forEach(id => { $(id).value = ''; });
  $('pDed').value = 0;
  render();
});
$('delBtn').addEventListener('click', () => {
  const no = num('delNo'), err = $('payErr');
  if (!Number.isInteger(no) || no < 1 || no > employees.length) {
    err.textContent = `Enter a line number from 1 to ${employees.length || 1}.`; return;
  }
  employees.splice(no - 1, 1);
  err.textContent = ''; $('delNo').value = '';
  render();
});
render();
