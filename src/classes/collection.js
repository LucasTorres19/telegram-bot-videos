class Collection {
  constructor() {
    this.items = {};
  }
  set(name, value) {
    this.items[name] = value
  }
  get(name) {
    return this.items[name];
  }
}

export default Collection;