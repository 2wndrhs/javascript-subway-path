class LineRepository {
  #lines = [];

  getLines() {
    return this.#lines;
  }

  addLine(line) {
    this.#lines.push(line);
  }

  deleteLine(lineName) {
    this.#lines = this.#lines.filter((line) => line.getName() !== lineName);

    return this.#lines;
  }

  deleteAll() {
    this.#lines = [];
  }
}

module.exports = LineRepository;
