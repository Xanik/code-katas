const argv = process.argv.slice(2);

function FizzBuzz(i) {
  var f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
}

// for (var i = 1; i <= 100; i++) {
//   var f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
// }

if (argv.length === 0) {
  console.info("Require Number arguement");
} else {
  const numbers = argv[0];
  FizzBuzz(numbers);
}
