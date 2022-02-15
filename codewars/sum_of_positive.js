function positiveSum(arr) {
	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum = sum + arr[i];
		}
	}

	return sum;
}

console.log(positiveSum([1, 2, 3, -5, -6, 6, 9, -23]));