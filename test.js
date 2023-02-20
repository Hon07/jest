// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test('one dollar should be 106.58 yen', function() {
  const yen = fromDollarToYen(1);
  const expected = 1 / 1.2 * 127.9;
  expect(yen).toBe(expected);
});

test('one yen should be 0.0062 pounds', function() {
  const pound = fromYenToPound(1);
  const expected = 1 / 127.9 * 0.8;
  expect(pound).toBe(expected);
});

test('One euro should be 1.206 dollars', function() {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.2;
  expect(dollars).toBe(expected);
});
