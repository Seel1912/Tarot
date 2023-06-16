var search = function (nums, target) {
    let b = nums.indexOf(target)
    if (nums.length < 1 && target == 1) {
        return true
    } if (b == -1) {
        return false
    }
    if (b !== false) {
        return true
    }
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 2));