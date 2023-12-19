function twoSum(nums, target) {

    if (nums.length < 2 || typeof target !== 'number') {
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

// question example 
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

// if the target is 0 
// const nums = [0, 7, 11, 0];
// const target = 0;
// const result = twoSum(nums, target);
// console.log(result);

// if the target is not a number
// const nums = [0, 7, 11, 0];
// const target = '0';
// const result = twoSum(nums, target);
// console.log(result);

// if the nums is empty
// const nums = [];
// const target = 0;
// const result = twoSum(nums, target);
// console.log(result);

// if the target is not in the nums
// const nums = [2, 7, 11, 15];
// const target = 10;
// const result = twoSum(nums, target);
// console.log(result);
