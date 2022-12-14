class StationRepository {
  #stations = [];

  addStation(station) {
    this.#stations.push(station);
  }

  getStations() {
    return this.#stations;
  }
}

module.exports = StationRepository;
