/* eslint-disable no-param-reassign */
/* eslint-disable max-lines-per-function */
const WeightedGraph = require('./WeightedGraph');

const { SECTIONS } = require('../utils/SubwayData');

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
    const path = this.#weightedGraph.findShortestPath(
      this.#departure,
      this.#arrival,
    );
    const { totalDistance, totalTime } =
      PathFinder.computeTotalDistanceAndTime(path);

    return { path, totalDistance, totalTime };
  }

  static computeTotalDistanceAndTime(path) {
    const sections = PathFinder.computeSectionsOfPath(path);

    const totalDistance = PathFinder.computeTotalDistance(sections);
    const totalTime = PathFinder.computeTotalTime(sections);

    return { totalDistance, totalTime };
  }

  static computeSectionsOfPath(path) {
    return SECTIONS.filter((section) => {
      const stations = section.STATIONS;
      const includedCount = PathFinder.computeIncludedCount(path, stations);

      return includedCount === 2;
    });
  }

  static computeIncludedCount(path, stations) {
    return path.reduce((acc, station) => {
      const isIncluded = stations.includes(station);

      if (isIncluded) {
        acc += 1;
      }

      return acc;
    }, 0);
  }

  static computeTotalDistance(sections) {
    return sections.reduce((result, section) => {
      const distance = section.DISTANCE;
      result += distance;

      return result;
    }, 0);
  }

  static computeTotalTime(sections) {
    return sections.reduce((result, section) => {
      const time = section.TIME;
      result += time;

      return result;
    }, 0);
  }
}

module.exports = PathFinder;
