// 设计循环队列
export default class MyCircularQueue {
  // 构造器，设置队列长度为k
  constructor (k) {
    // 用来保存数据长度为k的数据结构
    this.list = Array(k)
    // 队首指针
    this.front = 0
    // 队尾指针
    this.rear = 0
    // 队列的长度
    this.max = k
  }
  enQueue (num) {
    if (this.isFull()) {
      return false
    } else {
      // num 赋给队列的尾指针，即在队列的尾部添加元素
      this.list[this.rear] = num
      // 生成循环队列
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }
  deQueue () {
    let val = this.list[this.front]
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return val
  }
  isEmpty () {
    return this.front === this.rear && !this.list[this.front]
  }
  isFull () {
    return this.front === this.rear && !!this.list[this.front]
  }
  Front () {
    return this.list[this.front]
  }
  Rear () {
    let rear = this.list[this.rear - 1]
    return this.list[this.rear < 1 ? this.max - 1 : rear]
  }
}