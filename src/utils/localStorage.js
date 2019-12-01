const ls = localStorage

export default {
  set (name, value) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }

    ls.setItem(name, value)
  },
  get (name) {
    let value = ls.getItem(name)
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  },
  remove (name) {
    ls.removeItem(name)
  }
}
