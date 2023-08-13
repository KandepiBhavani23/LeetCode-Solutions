//Sum of Digits

//Method - 1
const sumOfDigits = (num) => {
	const splitStr = num.toString().split("");
	const sum = splitStr.reduce((acc, curr) => acc + parseInt(curr), 0);
	return sum;
};

console.log(sumOfDigits(1245));
console.log(sumOfDigits(245));
