// leetcode 605 种花问题
// export default(arr, n) => {
//   // 计数器
//   let max = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === 0) {
//       if (i === 0 && arr[1] === 0) {
//         max ++
//         i++
//       } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
//         max ++
//         i++
//       }
//     }
//   }
//   return max >= n
// }

export default(arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i - 1] && !arr[i] && !arr[i + 1]) {
      i++
      n --
    }
  }
  return n <= 0
}