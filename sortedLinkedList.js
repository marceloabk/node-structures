import {
  defaultEquals,
  defaultCompare,
  compare
} from "./utils.js"
import {
  LinkedList
} from "./linkedList.js"

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element) {
    if (this.isEmpty()) return super.insert(element, 0)

    const index = this.getIndexNextSortedElement(element)
    return super.insert(element, index)
  }

  getIndexNextSortedElement(element) {
    let i = 0
    let current = this.head
    for (; i < this.count && current; i++) {
      const result = this.compareFn(element, current.element)
      if (result === compare.LESS_THAN)
        break
      current = current.next
    }
    return i
  }
}