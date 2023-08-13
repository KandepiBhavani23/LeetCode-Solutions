//Sum of Natural Numbers - Sum(1 to 5)

//Method - 1
function sumOfNaturalNumbers(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumOfNaturalNumbers(5));
console.log(sumOfNaturalNumbers(10));
console.log(sumOfNaturalNumbers(12));

//Method - 2
function sumNaturalNumbers(num) {
	return (num * (num + 1)) / 2;
}

console.log(sumNaturalNumbers(10));
console.log(sumNaturalNumbers(18));
