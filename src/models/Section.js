class Section {
  #stations;

  #distance;

  #time;

  constructor(stations, distance, time) {
    this.#stations = stations;
    this.#distance = distance;
    this.#time = time;
  }

  getStations() {
    return this.#stations;
  }
}

module.exports = Section;
