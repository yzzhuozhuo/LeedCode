export default (arr) => {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
      }
    }
  }
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}