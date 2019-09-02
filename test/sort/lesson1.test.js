import sort from '../../code/sort/lesson1'

test('冒泡排序', () => {
  expect(sort([2,4,3,1,5])).toEqual([1,2,3,4,5])
})