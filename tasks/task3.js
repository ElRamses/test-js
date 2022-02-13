function task3() {
	const applePrice = 1.15;
	const orangePrice = 2.30;

	return ( Math.round(applePrice * 100) + Math.round(orangePrice * 100) ) / 100;
}

console.log(task3());