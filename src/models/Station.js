const { StationNames } = require('../utils/StationData');

class Station {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getStationLines() {
    return Object.entries(StationNames).reduce((acc, [lineName, stations]) => {
      const isIncluded = stations.includes(this.#name);
      if (isIncluded) {
        acc.push(lineName);
      }

      return acc;
    }, []);
  }

  getName() {
    return this.#name;
  }
}

module.exports = Station;
