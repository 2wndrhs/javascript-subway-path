const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  FEATURE: '## 원하는 기능을 선택하세요.',
  DEPARTURE: '## 출발역을 입력하세요.',
  ARRIVAL: '## 도착역을 입력하세요.',
});

const InputView = {
  readFeature(callback) {
    Console.readLine(`\n${QUERY.FEATURE}\n`, callback);
  },

  readDepartureStation(callback) {
    Console.readLine(`\n${QUERY.DEPARTURE}\n`, callback);
  },

  readArrivalStation(callback) {
    Console.readLine(`\n${QUERY.ARRIVAL}\n`, callback);
  },
};

module.exports = InputView;
