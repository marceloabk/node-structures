export class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) return

    const value = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++

    return value
  }

  peek() {
    return this.items[this.lowestCount]
  }

  isEmpty() {
    return this.count === this.lowestCount
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    return Object.values(this.items).join(", ")
  }
}
