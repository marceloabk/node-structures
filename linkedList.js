import { defaultEquals } from "./utils.js"
import { Node } from "./models/node.js"

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) current = current.next

      current.next = node
    }
    this.count++
  }

  insert(element, position) {
    const node = new Node(element)
    if (position === undefined || position < 0 || position > this.count) {
      return false
    } else if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      const previous = this.getElementAt(position - 1)
      const current = previous.next
      previous.next = node
      node.next = current
    }

    this.count++
    return true
  }

  getElementAt(index) {
    let current = this.head
    if (index === undefined || index >= this.count || index < 0) {
      current = undefined
    } else {
      for (let i = 0; i < index; i++) current = current.next
    }
    return current
  }

  remove(element) {
    return this.removeAt(this.indexOf(element))
  }

  indexOf(element) {
    let counter = 0
    let current = this.head

    while (current && !this.equalsFn(current.element, element)) {
      counter++
      current = current.next
    }

    return current ? counter : -1
  }

  removeAt(position) {
    let value

    if (position === undefined || position < 0 || position >= this.count) {
      return
    } else if (position === 0) {
      value = this.head
      this.head = this.head.next
    } else {
      const previous = this.getElementAt(position - 1)
      value = previous.next
      previous.next = previous.next.next
    }

    this.count--
    return value
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  getHead() {
    return this.head
  }

  toString() {
    if (!this.head) return ""

    let string = `${this.head.element}`
    let current = this.head.next
    while (current) {
      string = `${string}, ${current.element}`
      current = current.next
    }

    return string
  }
}
