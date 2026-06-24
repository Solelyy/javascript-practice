//Find the most frequent number

const numbers = [];

function frequentNumber(numbers) {
  let frequentNum = [];
  let frequentNumberCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let count = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }

    if (count > frequentNumberCount) {
      frequentNumberCount = count;
      frequentNum = [numbers[i]];
    } else if (
      count === frequentNumberCount &&
      !frequentNum.includes(numbers[i])
    ) {
      frequentNum.push(numbers[i]);
    }
  }

  return frequentNum;
}

console.log(`Frequent number/s: ${frequentNumber(numbers).join(", ")}`);
