function task2(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sum = sum + arr[i] ** 0.5;
		}
	}

	return sum;
}

console.log(task2([1, 4, 3, 0, 4, 5, 4])); // 6
