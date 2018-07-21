let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

if (boolean1 && boolean2) result = 'both';
if (boolean1 && !boolean2 || !boolean1 && boolean2) result = 'one';
if (!boolean1 && !boolean2) result = 'none';

console.log(result);