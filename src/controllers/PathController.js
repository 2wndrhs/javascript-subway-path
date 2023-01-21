const StationRepository = require('../models/StationRepository');
const LineRepository = require('../models/LineRepository');
const SectionRepository = require('../models/SectionRepository');
const DataInitializer = require('../models/DataInitializer');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { PATH } = require('../utils/constants');

class PathController {
  #repository = Object.freeze({
    stationRepository: new StationRepository(),
    lineRepository: new LineRepository(),
    sectionRepository: new SectionRepository(),
  });

  #featureHandlers = Object.freeze({
    [PATH.DISTANCE]: this.#onInputDistance.bind(this),
    [PATH.TIME]: '',
    [PATH.BACK]: '',
  });

  start() {
    DataInitializer.init(this.#repository);

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

  #onInputDepartureStation(stationName) {
    this.#inputArrivalStation();
  }

  #inputArrivalStation() {
    InputView.readArrivalStation(this.#onInputArrivalStation.bind(this));
  }

  #onInputArrivalStation(stationName) {}
}

module.exports = PathController;
