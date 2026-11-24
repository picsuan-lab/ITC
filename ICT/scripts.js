'use strict';
// Shared helpers used by every page
const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = id => { const v = $(id).value; return v === '' ? NaN : Number(v); };
