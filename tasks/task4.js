function task4(arr) {
	let maxMin = '';
	let maxMax = '';

	for (let i = 0; i < arr.length; i++) {

		if (arr[i].length > maxMax.length) {
			maxMin = maxMax;
			maxMax = arr[i];
		} else if (arr[i].length > maxMin.length && arr[i].length < maxMax.length) {
			maxMin = arr[i];
		}

	}

	return [maxMax, maxMin];
}

console.log(task4(['Москва', 'Саратов', 'Магнитогорск', 'Ухта', 'Псков', 'Киров']));