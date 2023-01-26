const { PATH } = require('../utils/constants');
const { SECTIONS } = require('../utils/SubwayData');
const Dijkstra = require('../utils/Dijkstra');

class WeightedGraph {
  #dijkstra;

  constructor(condition) {
    this.#dijkstra = new Dijkstra();
    this.init(condition);
  }

  init(condition) {
    SECTIONS.forEach((section) => {
      const stations = section.STATIONS;
      const weight =
        condition === PATH.DISTANCE ? section.DISTANCE : section.TIME;

      this.#dijkstra.addEdge(stations[0], stations[1], weight);
    });
  }

  findShortestPath(departure, arrival) {
    return this.#dijkstra.findShortestPath(departure, arrival);
  }
}

module.exports = WeightedGraph;
