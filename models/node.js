export class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }

  toString() {
    return this.element
  }
}

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}