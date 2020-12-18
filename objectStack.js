export class Stack {
  constructor() {
    this._items = {}
    this._count = 0
  }

  push(element) {
    this._items[this._count] = element
    this._count++
  }

  pop() {
    if (this.isEmpty()) return

    this._count--
    const value = this._items[this._count]
    delete this._items[this._count]

    return value
  }

  peek() {
    return this._items[this._count - 1]
  }

  isEmpty() {
    return this._count === 0
  }

  clear() {
    this._items = {}
    this._count = 0
  }

  size() {
    return this._count
  }

  toString() {
    return Object.values(this._items).join(', ')
  }
}