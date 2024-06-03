// create a context class so that we can store data in it

class Context {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

const context = new Context()

module.exports = context;