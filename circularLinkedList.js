import { defaultEquals } from "./utils.js"
import { LinkedList } from "./linkedList.js"
import { Node } from "./models/node.js"

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index) {
    const node = new Node(element)
    if (index === undefined || index < 0 || index > this.count) {
      return undefined
    } else if (index === 0) {
      if (!this.head) {
        node.next = node
        this.head = node
      } else {
        node.next = this.head
        this.head = node
        const lastElement = this.getElementAt(this.size())
        lastElement.next = node
      }
    } else {
      let current = this.getElementAt(index - 1)
      node.next = current.next
      current.next = node
    }

    this.count++
  }

  toString() {
    if (!this.head) return ""

    let string = `${this.head.element}`
    let current = this.head.next

    for (let i = 0; i < this.count - 1; i++) {
      string = `${string}, ${current.element}`
      current = current.next
    }

    return string
  }
}
