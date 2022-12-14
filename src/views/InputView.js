const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  FEATURE: '## 원하는 기능을 선택하세요.',
});

const InputView = {
  readFeature(callback) {
    Console.readLine(`\n${QUERY.FEATURE}\n`, callback);
  },
};

module.exports = InputView;
