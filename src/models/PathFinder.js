/* eslint-disable max-lines-per-function */
const WeightedGraph = require('./WeightedGraph');

class PathFinder {
  #departure;

  #arrival;

  #weightedGraph;

  constructor(condition) {
    this.#weightedGraph = new WeightedGraph(condition);
  }

  setDeparture(station) {
    this.#departure = station;
  }

  setArrival(station) {
    this.#arrival = station;
  }

  find() {
    return this.#weightedGraph.findShortestPath(this.#departure, this.#arrival);
  }
}

module.exports = PathFinder;
