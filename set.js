class Set {
  constructor() {
    this.elements = {}
  }

  add(element) {
    if (!this.has(element)) {
      this.elements[element] = true
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.elements[element]
      return true
    }
    return false
  }

  has(element) {
    return element in this.elements
  }

  clear() {
    this.elements = {}
  }

  size() {
    return Object.keys(this.elements).length
  }

  values() {
    return Object.keys(this.elements)
  }

  union(other) {
    const result = new Set()
    result.elements = Object.assign({}, this.elements, other.elements)
    return result
  }

  intersection(other) {
    const result = new Set()
    const biggerSet = this.size() > other.size() ? this : other
    const smallerSet = this.size() > other.size() ? other : this

    for (const element of smallerSet.values()) {
      if (biggerSet.has(element)) {
        result.add(element)
      }
    }
    return result
  }

  difference(other) {
    const result = new Set()
    for (const element of this.values()) {
      if (!other.has(element)) {
        result.add(element)
      }
    }
    return result
  }

  isSubsetOf(other) {
    if (this.size() > other.size()) return false

    for (const element of this.values()) {
      if (!other.has(element)) {
        return false
      }
    }
    return true
  }
}
