function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/; // default delimiters: comma or newline

  const numArray = numbers.split(delimiter).map(Number);

  const negativeNumbers = numArray.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
