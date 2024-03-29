//https://leetcode.com/problems/reverse-string/

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

const s = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
	if (s.length === 0) {
		return [];
	} else {
		return s.reverse();
	}
};

reverseString(s);
