class LineRepository {
  #lines = [];

  addLine(station) {
    this.#lines.push(station);
  }

  getStations() {
    return this.#lines;
  }
}

module.exports = LineRepository;
