function calculate(operation, num1, num2) {
    if (operation === "+") {
      return num1 + num2;
    } else if (operation === "-") {
      return num1 - num2;
    } else if (operation === "*") {
      return num1 * num2;
    } else if (operation === "%") {
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;
    } else {
      return "Error: Invalid operation";
    }
  }
  
  const operation = prompt("Enter operation (add, subtract, multiply, divide): ");
  const num1 = parseFloat(prompt("Enter first number: "));
  const num2 = parseFloat(prompt("Enter second number: "));
  
  const result = calculate(operation, num1, num2);
  console.log(result);
  