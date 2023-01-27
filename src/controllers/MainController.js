const { Console } = require('@woowacourse/mission-utils');

const PathFinder = require('../models/PathFinder');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { MAIN, PATH } = require('../utils/constants');

class MainController {
  #pathFinder;

  #mainFeaturesHandler = Object.freeze({
    [MAIN.PATH]: this.#onInputPath.bind(this),
    [MAIN.QUIT]: this.#onInputQuit.bind(this),
  });

  #pathFeaturesHandler = Object.freeze({
    [PATH.DISTANCE]: this.#onInputDistance.bind(this),
    [PATH.TIME]: this.#onInputTime.bind(this),
    [PATH.BACK]: this.#onInputBack.bind(this),
  });

  start() {
    OutputView.printMainFeatures();

    this.#inputMainFeature();
  }

  #inputMainFeature() {
    InputView.readFeature(this.#onInputMainFeature.bind(this));
  }

  #onInputMainFeature(feature) {
    this.#mainFeaturesHandler[feature]();
  }

  #onInputPath() {
    OutputView.printPathFeatures();

    this.#inputPathFeature();
  }

  #onInputQuit() {
    Console.close();
  }

  #inputPathFeature() {
    InputView.readFeature(this.#onInputPathFeature.bind(this));
  }

  #onInputPathFeature(feature) {
    this.#pathFeaturesHandler[feature]();
  }

  #onInputDistance() {
    this.#pathFinder = new PathFinder(PATH.DISTANCE);

    this.#inputDepartureStation();
  }

  #onInputTime() {
    this.#pathFinder = new PathFinder(PATH.TIME);

    this.#inputDepartureStation();
  }

  #onInputBack() {
    this.start();
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
    const result = this.#pathFinder.find();

    OutputView.printPathResult(result);

    this.start();
  }
}

module.exports = MainController;
