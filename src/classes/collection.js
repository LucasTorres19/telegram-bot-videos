class Collection {
  #items
  constructor() {
    this.#items = {};
  }
  set(name, value) {
    this.items = this.items.filter(i => i !== item);
  }
  get(name) {
    return this.items[name];
  }
}

export default Collection;