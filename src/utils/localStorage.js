const ls = localStorage

export default {
  set (name, value) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }

    ls.setItem(name, value)
  },
  get (name) {
    try {
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },
  remove (name) {
    ls.removeItem(name)
  }
}
