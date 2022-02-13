function findMax(arr) {
  let max = -Infinity;
  let min = Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max + min;
}

console.log(findMax([1, 12, 5, -6, 7, -8, -22, 3, -49, 0]));
