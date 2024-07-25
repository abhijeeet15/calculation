function findMinMax(arr) {
    if (arr.length === 0) {
      return "Error";
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
  }
  
  const numbers = [5, 10, 2, 25];
  const result = findMinMax(numbers);
  console.log(result); 
  