const array = [1, 3, -4, -5, 6, 7, -8, 10, 12, 15];

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}

console.log(linearSearch(array, 10));
console.log(linearSearch(array, 0));

console.log(array.includes(9));
console.log(array.includes(10));

console.log(array.indexOf(9));
console.log(array.indexOf(6));

console.log(array.find((num) => num > 0));
console.log(array.find((num) => num < 0));
console.log(array.findIndex((num) => num < 0));
