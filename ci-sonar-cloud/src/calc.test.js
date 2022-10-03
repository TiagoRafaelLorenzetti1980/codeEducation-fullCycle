const test = require('tape')
const calculator = require('./calc');

test('Calculator sum should be ok', (t) => {
  t.assert(calculator.sum(2, 2) === 4, "Correct");
  t.end();
});

test('Calculator sub should be ok', (t) => {
  t.assert(calculator.sub(3, 2) === 1, "Correct");
  t.end();
});

test('Calculator div should be ok', (t) => {
  t.assert(calculator.div(6, 2) === 3, "Correct");
  t.end();
});

test('Calculator mult should be ok', (t) => {
  t.assert(calculator.mult(3, 2) === 6, "Correct");
  t.end();
});
