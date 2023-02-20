// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// we declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     // convert the given valueInEuro to dollars
//     const valueInDollar = valueInEuro * 1.2;
//     // return the dollar value
//     return valueInDollar;
//   }
  
//   module.exports = { fromEuroToDollar };
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(valueInDollar) {
  const valueInYen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
  return valueInYen;
}

  const fromEuroToDollar = (amount) => {
    const dollarAmount = amount * 1.2;
    return dollarAmount;
  };
  
  const fromYenToPound = (amount) => {
    const euroAmount = amount / 127.9;
    const poundAmount = euroAmount * 0.8;
    return poundAmount;
  };
  
  module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
  