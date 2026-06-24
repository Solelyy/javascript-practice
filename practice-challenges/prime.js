//identify a number is prime

console.log(isPrime(101));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= squareRoot; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
