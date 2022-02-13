`use strict`

// const arr = [1, -30, 40, 50];
// let min = Infinity;

// for (let i = 0; i < arr.length; i++) {

// 	if (arr[i] < min) {
// 		min = arr[i];
// 	}

// }

function sumTwoMin(arr) {
	let minMin = Infinity;
	let minMax = Infinity;

	for (let i = 0; i < arr.length; i++) {

			if (arr[i] < minMin) {
				minMax = minMin;
				minMin = arr[i];
			} else if (arr[i] > minMin && arr[i] < minMax) {
				minMax = arr[i];
			}

	}

	return minMin + minMax;
}


console.log(sumTwoMin([1, 2, 3])); // 3
console.log(sumTwoMin([19, 5, 42, 2, 77])); // 7
console.log(sumTwoMin([-5, 5, 10])); // 0

