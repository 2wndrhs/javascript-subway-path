const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { PATH } = require('../utils/constants');

class PathController {
  #featureHandlers = Object.freeze({
    [PATH.DISTANCE]: this.#onInputDistance.bind(this),
    [PATH.TIME]: '',
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
    this.#inputDepartureStation();
  }

  #inputDepartureStation() {
    InputView.readDepartureStation(this.#onInputDepartureStation.bind(this));
  }

  #onInputDepartureStation(station) {}
}

module.exports = PathController;
