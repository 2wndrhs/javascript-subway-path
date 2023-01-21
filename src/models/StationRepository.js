class StationRepository {
  #stations = [];

  getStations() {
    return this.#stations;
  }

  findStationByName(stationName) {
    return this.#stations.find((station) => station.getName() === stationName);
  }

  addStation(station) {
    this.#stations.push(station);
  }

  deleteStation(stationName) {
    this.#stations = this.#stations.filter(
      (station) => station.getName() !== stationName,
    );

    return this.#stations;
  }

  deleteAll() {
    this.#stations = [];
  }
}

module.exports = StationRepository;
