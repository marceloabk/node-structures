export class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront(element) {
    if (this.isEmpty()) this.count++

    this.items[this.lowestCount] = element
    this.lowestCount--
  }

  addBack(element) {
    if (this.isEmpty()) this.lowestCount--

    this.items[this.count] = element
    this.count++
  }

  removeFront() {
    if (this.isEmpty()) return

    this.lowestCount++
    const value = this.items[this.lowestCount]
    delete this.items[this.lowestCount]

    return value
  }

  removeBack() {
    if (this.isEmpty()) return

    this.count--
    const value = this.items[this.count]
    delete this.items[this.count]

    return value
  }

  peekFront() {
    return this.items[this.lowestCount + 1]
  }

  peekBack() {
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.lowestCount === this.count
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  size() {
    const size = Math.abs(this.count) + Math.abs(this.lowestCount) - 1
    return size < 0 ? 0 : size
  }

  toString() {
    return Object.keys(this.items)
      .sort((a, b) => a - b)
      .map((i) => this.items[i])
      .join(", ")
  }
}
