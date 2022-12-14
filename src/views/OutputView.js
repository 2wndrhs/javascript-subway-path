const { Console } = require('@woowacourse/mission-utils');

const {
  MAIN,
  PATH,
  MAIN_MESSAGE,
  PATH_MESSAGE,
} = require('../utils/constants');

const MESSAGE = Object.freeze({
  MAIN: '## 메인 화면',
  PATH: '## 경로 기준',
});

const OutputView = {
  printMainFeatures() {
    Console.print(MESSAGE.MAIN);
    Console.print(`${MAIN.PATH}. ${MAIN_MESSAGE[MAIN.PATH]}`);
    Console.print(`${MAIN.QUIT}. ${MAIN_MESSAGE[MAIN.QUIT]}`);
  },

  printPathFeatures() {
    Console.print(`\n${MESSAGE.PATH}`);
    Console.print(`${PATH.DISTANCE}. ${PATH_MESSAGE[PATH.DISTANCE]}`);
    Console.print(`${PATH.TIME}. ${PATH_MESSAGE[PATH.TIME]}`);
    Console.print(`${PATH.BACK}. ${PATH_MESSAGE[PATH.BACK]}`);
  },
};

module.exports = OutputView;
