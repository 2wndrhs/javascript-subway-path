const { Console } = require('@woowacourse/mission-utils');

const { MAIN } = require('../utils/constants');

const MESSAGE = Object.freeze({
  MAIN: '메인 화면',
  [MAIN.PATH]: '경로 조회',
  [MAIN.QUIT]: '종료',
});

const OutputView = {
  printMainFeatures() {
    Console.print(`## ${MESSAGE.MAIN}`);
    Console.print(`${MAIN.PATH}. ${MESSAGE[MAIN.PATH]}`);
    Console.print(`${MAIN.QUIT}. ${MESSAGE[MAIN.QUIT]}`);
  },
};

module.exports = OutputView;
