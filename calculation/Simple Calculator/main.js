function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y === 0) {
      return "Error: Cannot divide by zero";
    }
    return x / y;
  }
  
  function calculate(operation, num1, num2) {
    if (operation === "+") {
      return add(num1, num2);
    } else if (operation === "-") {
      return subtract(num1, num2);
    } else if (operation === "*") {
      return multiply(num1, num2);
    } else if (operation === "%") {
      return divide(num1, num2);
    } else {
      return "Error: Invalid operation";
    }
  }
  
  // Get user input
  const operation = prompt("Enter operation (add, subtract, multiply, divide): ");
  const num1 = parseFloat(prompt("Enter first number: "));
  const num2 = parseFloat(prompt("Enter second number: "));
  
  // Perform calculation and display result
  const result = calculate(operation, num1, num2);
  console.log(result);