// leetcode 164最大间距
// 常规做法
export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  arr.sort()
  // 用来保存相邻元素的最大值
  let max = 0
  for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
    tmp = arr[i + 1] - arr[i]
    if (tmp > max) {
      max = tmp
    }
  }
  return max
}
