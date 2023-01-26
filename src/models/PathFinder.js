/* eslint-disable max-lines-per-function */
const WeightedGraph = require('./WeightedGraph');

const { PATH } = require('../utils/constants');

class PathFinder {
  #departure;

  #arrival;

  #weightedGraph = Object.freeze({
    distance: new WeightedGraph(PATH.DISTANCE),
    time: new WeightedGraph(PATH.TIME),
  });

  setDeparture(station) {
    this.#departure = station;
  }

  setArrival(station) {
    this.#arrival = station;
  }

  find(condition) {
    if (condition === PATH.DISTANCE) {
      return this.#weightedGraph.distance.findShortestPath(
        this.#departure,
        this.#arrival,
      );
    }

    return this.#weightedGraph.time.findShortestPath(
      this.#departure,
      this.#arrival,
    );
  }
}

module.exports = PathFinder;
