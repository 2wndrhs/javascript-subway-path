const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class MainController {
  start() {
    OutputView.printMainFeatures();

    this.#inputMainFeature();
  }

  #inputMainFeature() {
    InputView.readFeature(this.#onInputMainFeature.bind(this));
  }

  #onInputMainFeature(feature) {}
}

module.exports = MainController;
