export class Stack {
  constructor(initialItems) {
    this.items = []

    if (initialItems) this.push(initialItems)
  }

  push(elements) {
    if (Array.isArray(elements)) {
      this.items.push(...elements)
    } else {
      this.items.push(elements)
    }
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items.length = 0
  }

  size() {
    return this.items.length
  }
}
