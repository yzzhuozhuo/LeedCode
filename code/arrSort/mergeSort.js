/* 
归并排序：归并排序是建立在归并操作上的一种有效排序算法，该算法是采用分治法的一种典型应用。
合并排序法是将两个或两个以上有序表合并成一个新的有序表，即把待排序序列分为若干个子序列，
每个子序列都是有序的，然后再把有序子序列合并为整体有序序列。
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  let result = []
  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result
}

let arr = [2,3,1,5,4,6]
console.log(mergeSort(arr))