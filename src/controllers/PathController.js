const PathFinder = require('../models/PathFinder');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { PATH } = require('../utils/constants');

class PathController {
  #pathFinder;

  #featureHandlers = Object.freeze({
    [PATH.DISTANCE]: this.#onInputDistance.bind(this),
    [PATH.TIME]: this.#onInputTime.bind(this),
    [PATH.BACK]: '',
  });

  start() {
    OutputView.printPathFeatures();

    this.#inputPathFeature();
  }

  #inputPathFeature() {
    InputView.readFeature(this.#onInputPathFeature.bind(this));
  }

  #onInputPathFeature(feature) {
    this.#featureHandlers[feature]();
  }

  #onInputDistance() {
    this.#pathFinder = new PathFinder(PATH.DISTANCE);

    this.#inputDepartureStation();
  }

  #onInputTime() {
    this.#pathFinder = new PathFinder(PATH.TIME);

    this.#inputDepartureStation();
  }

  #inputDepartureStation() {
    InputView.readDepartureStation(this.#onInputDepartureStation.bind(this));
  }

  #onInputDepartureStation(station) {
    this.#pathFinder.setDeparture(station);

    this.#inputArrivalStation();
  }

  #inputArrivalStation() {
    InputView.readArrivalStation(this.#onInputArrivalStation.bind(this));
  }

  #onInputArrivalStation(station) {
    this.#pathFinder.setArrival(station);

    this.#findShortestPath();
  }

  #findShortestPath() {
    const path = this.#pathFinder.find(PATH.DISTANCE);
    console.log(path);
  }
}

module.exports = PathController;
