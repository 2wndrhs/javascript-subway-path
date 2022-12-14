const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class PathController {
  start() {
    OutputView.printPathFeatures();
  }
}

module.exports = PathController;
