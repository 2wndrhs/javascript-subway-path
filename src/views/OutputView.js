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
  RESULT: '## 조회 결과',
  TOTAL_DISTANCE: '총 거리',
  TOTAL_TIME: '총 시간',
});

const PREFIX = Object.freeze({
  RESULT: '[INFO]',
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

  printPathResult({ path, totalDistance, totalTime }) {
    Console.print(`\n${MESSAGE.RESULT}`);
    Console.print(`${PREFIX.RESULT} ---`);
    Console.print(
      `${PREFIX.RESULT} ${MESSAGE.TOTAL_DISTANCE}: ${totalDistance}km`,
    );
    Console.print(`${PREFIX.RESULT} ${MESSAGE.TOTAL_TIME}: ${totalTime}분`);
    Console.print(`${PREFIX.RESULT} ---`);
    path.forEach((station) => Console.print(`${PREFIX.RESULT} ${station}`));
  },
};

module.exports = OutputView;
