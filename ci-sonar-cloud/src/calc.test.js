const calculator = require('./calc');

test('Calculator sum should be ok', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

test('Calculator sub should be ok', () => {
  expect(calculator.sub(2, 2)).toBe(0);
});

test('Calculator div should be ok', () => {
  expect(calculator.div(6, 2)).toBe(3);
});

test('Calculator mult should be ok', () => {
  expect(calculator.mult(4, 2)).toBe(8);
});
