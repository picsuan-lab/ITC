'use strict';
// Assignment 3: Looping
// Factorial uses a while loop, sum a do...while loop, average a for loop.
const readN = () => {
  const n = num('n'), out = $('loopOut');
  const ok = Number.isInteger(n) && n >= 1;
  out.classList.toggle('err', !ok);
  if (!ok) out.textContent = 'Enter a whole number of 1 or more.';
  return ok ? n : null;
};
$('factBtn').addEventListener('click', () => {
  const n = readN(); if (n === null) return;
  let result = 1n, i = 1n;
  while (i <= BigInt(n)) { result *= i; i++; }   // while loop
  $('loopOut').textContent = `${n}! = ${result.toLocaleString('en-US')}`;
});
$('sumBtn').addEventListener('click', () => {
  const n = readN(); if (n === null) return;
  let sum = 0, i = 1;
  do { sum += i; i++; } while (i <= n);          // do...while loop
  $('loopOut').textContent = `Sum of the first ${n} natural numbers = ${sum.toLocaleString('en-US')}`;
});
$('avgBtn').addEventListener('click', () => {
  const n = readN(); if (n === null) return;
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;       // for loop
  $('loopOut').textContent = `Average of the first ${n} natural numbers = ${total / n}`;
});
