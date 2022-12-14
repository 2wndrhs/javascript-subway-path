const MainController = require('./controllers/MainController');

class App {
  #mainController;

  constructor() {
    this.#mainController = new MainController();
  }

  play() {
    this.#mainController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
