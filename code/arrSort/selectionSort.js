/* 
选择排序：
  工作原理：首先在未排序序列中找到最小(大)的元素，存放在排序序列的起始位置，
  然后再从剩余未排序的序列中继续寻找最大(小)的元素，然后放在已排序序列的末尾。
  以此类推，直到所有元素均排序结束。
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  return arr
}

let arr = [1,3,2,4,6,5];
console.log(selectionSort(arr))