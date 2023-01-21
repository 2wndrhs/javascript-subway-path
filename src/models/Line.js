class Line {
  #name;

  #stations;

  constructor(name, stations) {
    this.#name = name;
    this.#stations = stations;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Line;
