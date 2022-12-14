const StationRepository = require('../models/StationRepository');
const LineRepository = require('../models/LineRepository');
const Station = require('../models/Station');
const Line = require('../models/Line');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { PATH } = require('../utils/constants');

class PathController {
  #stationRepository = new StationRepository();

  #lineRepository = new LineRepository();

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

  #onInputDepartureStation(stationName) {
    const station = new Station(stationName);
    const lines = station.getStationLines();

    this.#stationRepository.addStation(station);
    lines.forEach((line) => this.#lineRepository.addLine(new Line(line)));

    this.#inputArrivalStation();
  }

  #inputArrivalStation() {
    InputView.readArrivalStation(this.#onInputArrivalStation.bind(this));
  }

  #onInputArrivalStation(stationName) {
    const station = new Station(stationName);
    const lines = station.getStationLines();

    this.#stationRepository.addStation(station);
    lines.forEach((line) => this.#lineRepository.addLine(new Line(line)));
  }
}

module.exports = PathController;
