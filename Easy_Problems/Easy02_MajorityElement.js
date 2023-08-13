// https://leetcode.com/problems/majority-element/

/*

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume 
that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const nums = [2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 2];

var majorityElement = function (nums) {
	let count = {};
	for (let ele of nums) {
		count[ele] = count[ele] + 1 || 1;
	}
	const element = Object.keys(count).reduce((a, b) =>
		count[a] > count[b] ? a : b
	);
	return element;
};

majorityElement(nums);
