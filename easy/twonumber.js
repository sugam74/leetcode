// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for(var first = 0; first < nums.length -1; first++){
        for(var second = first+1; second < nums.length; second++){
            if(nums[first] + nums[second] === target) {
                return [first, second];
            }
        }
    }
};
var nums = [3,2,4];
var target = 6;
var op = twoSum(nums, target);
console.log(op);