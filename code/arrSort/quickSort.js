/* 
快速排序:
*/

// 解法一
// 单独开辟两个存储空间left 和 right 来存储每次递归比 target 小和大 的序列
// 每次递归直接返回left、target、right拼接后的数组
// 浪费大量存储空间，写法简单

function quickSort(array) {
  // 递归的出口
  if (array.length < 2) {
    return array;
  }
  const target = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat([target], quickSort(right))
}

// 写法二：
// 记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始
// 在l < r 的条件下，找到右侧小于target的值的array[r],并将其赋值到array[l] 
// 在l < r 的条件下, 找到左侧大于target的值的array[l],并将其赋值给array[r] 
// 这样l = r 时，左侧的值全部小于target, 右侧的值全部大于target, 将target放到该位置
// 不需要额外存储空间，写法思路复杂

let array = [1, 3, 4, 2, 6, 5];
let start = 0;
let end = array.length - 1;

function quickSort(array, start, end) {
  if (end - start < 2) {
    return;
  }
  const target = array[start];
  let l = start;
  let r = end;
  while (l < r) {
    while (l < r && array[r] > target) {
      r--;
    }
    array[l] = array[r];
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
  }
  array[l] = target;
  quickSort(array, start, l - 1);
  quickSort(array, l + 1, end);
  return array;
}
console.log(quickSort(array, start, end))