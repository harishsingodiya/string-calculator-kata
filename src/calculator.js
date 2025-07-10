function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/; // default delimiters: comma or newline

  // Custom delimiter handling
  if (numbers.startsWith("//")) {
    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterDefinition = numbers.slice(2, delimiterSectionEnd);

    // Support for delimiters with brackets: //[***]\n1***2***3
    if (
      delimiterDefinition.startsWith("[") &&
      delimiterDefinition.endsWith("]")
    ) {
      // Match all delimiters in square brackets
      const delimiters = [...delimiterDefinition.matchAll(/\[(.*?)\]/g)].map(
        (match) => match[1]
      );
      // Escape special regex characters in delimiters and join them with OR
      delimiter = new RegExp(
        delimiters
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
          .join("|")
      );
    } else {
      // Single-character custom delimiter
      delimiter = new RegExp(
        delimiterDefinition.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    }

    numbers = numbers.slice(delimiterSectionEnd + 1);
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return parts.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
