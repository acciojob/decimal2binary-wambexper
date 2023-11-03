function decimalToBinary(num) {
  // Check if the input is 0
  if (num === 0) {
    return '0';
  }

  // Initialize an empty string to store the binary representation
  let binary = '';

  // Convert the decimal number to binary
  while (num > 0) {
    // Append the remainder of the division by 2 to the binary string
    binary = (num % 2) + binary;
    // Integer division by 2
    num = Math.floor(num / 2);
  }

  return binary;
}

const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));