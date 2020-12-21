import {
  LinkedList
} from "./linkedList.js"
import {
  DoublyNode as Node
} from "./models/node.js"
import {
  defaultEquals
} from './utils.js'

export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }
  push(element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.count++
  }

  insert(element, position) {
    const node = new Node(element)
    if (position === undefined || position < 0 || position > this.count) {
      return false
    } else if (position === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = next
      }
    } else if (position === this.count) {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    } else {
      const prev = this.getElementAt(position - 1)
      const current = prev.next
      node.prev = prev
      node.next = current
      prev.next = node
      current.prev = node
    }

    this.count++
    return true
  }

  removeAt(position) {
    let value

    if (position === undefined || position < 0 || position >= this.count) {
      return
    } else if (position === 0) {
      value = this.head
      this.head = this.head.next
      this.head.prev = undefined
      if (this.count === 1) this.tail = undefined
    } else if (position === this.count - 1) {
      value = this.tail
      this.tail = this.tail.prev
      this.tail.next = undefined
    } else if (position) {
      const previous = this.getElementAt(position - 1)
      const next = previous.next.next
      value = previous.next
      previous.next = next
      next.prev = previous
    }

    this.count--
    return value
  }
}