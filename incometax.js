'use strict';
// Assignment 2: Income Tax Calculator
const computeTax = income => {
  if (income <= 250000) return 0;
  if (income <= 400000) return (income - 250000) * 0.20;
  if (income <= 800000) return 30000 + (income - 400000) * 0.25;
  if (income <= 2000000) return 130000 + (income - 800000) * 0.30;
  if (income <= 8000000) return 490000 + (income - 2000000) * 0.32;
  return 2410000 + (income - 8000000) * 0.35;
};
$('taxBtn').addEventListener('click', () => {
  const income = num('income'), out = $('taxOut');
  const bad = Number.isNaN(income) || income < 0;
  out.classList.toggle('err', bad);
  out.textContent = bad ? 'Enter a taxable income of 0 or more.' : `Income tax: ₱${fmt(computeTax(income))}`;
});
