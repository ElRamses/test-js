function task8() {
	let sum = 2000;
	const costPerDay = 200;
	const ticketPrice = 500;
	const drippingEveryDay = 100;

	// сумма в первый день
	let day = 1;
	sum = sum - ticketPrice - costPerDay + drippingEveryDay;
	console.log(`День ${day}: Остаток ${sum} рублей`);

	for (;sum > 500; day++) {
		sum = sum - costPerDay + drippingEveryDay;

		if (sum === 500) {
			console.log(`День ${day}: У Вас осталось ${sum} рублей. Вам пора ехать домой`)
		} else {
			console.log(`День ${day}: Остаток ${sum} рублей`);	
		}
	} 

}

task8();
