const balance = 100
const bal2 = new Number(100)
const bal3 = Number(100)

console.log(balance) // 100
console.log(bal2) // [Number: 100]
console.log(bal3) // 100
console.log(balance.toString().length) // 3 makes it string
console.log(balance.toFixed(2)) //100.00

function precise(x) {
    return x.toPrecision(4);
  }
  
  console.log(precise(123.456));
  // Expected output: "123.5"
  
  console.log(precise(0.004));
  // Expected output: "0.004000"
  
  console.log(precise(1.23e5));
  // Expected output: "1.230e+5"

  const hundreds = 1000000
  console.log(hundreds.toLocaleString('en-IN')) //10,00,000
  console.log(Math) // Object [Math] {}
  console.log(Math.abs(-4)) // 4
  console.log(Math.round(4.6)) // 5
  console.log(Math.ceil(4.2)) // 5
  console.log(Math.floor(4.6)) // 4
  console.log(Math.min(4, 6)) // 4
  console.log(Math.max(4, 6)) // 6
  console.log(Math.random()) // between 0 and 1


  const min = 10
  const max = 20

  console.log(Math.floor(Math.random() * (max - min + 1) + min))

  