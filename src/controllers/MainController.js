const { Console } = require('@woowacourse/mission-utils');

const PathController = require('./PathController');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { MAIN } = require('../utils/constants');

class MainController {
  #pathConroller = new PathController();

  #featureHandlers = Object.freeze({
    [MAIN.PATH]: this.#startPathConroller.bind(this),
    [MAIN.QUIT]: this.#quit.bind(this),
  });

  start() {
    OutputView.printMainFeatures();

    this.#inputMainFeature();
  }

  #inputMainFeature() {
    InputView.readFeature(this.#onInputMainFeature.bind(this));
  }

  #onInputMainFeature(feature) {
    this.#featureHandlers[feature]();
  }

  #startPathConroller() {
    this.#pathConroller.start();
  }

  #quit() {
    Console.close();
  }
}

module.exports = MainController;
