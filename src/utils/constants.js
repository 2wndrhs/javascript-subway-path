const MAIN = Object.freeze({
  PATH: '1',
  QUIT: 'Q',
});

const MAIN_MESSAGE = Object.freeze({
  [MAIN.PATH]: '경로 조회',
  [MAIN.QUIT]: '종료',
});

const PATH = Object.freeze({
  DISTANCE: '1',
  TIME: '2',
  BACK: 'B',
});

const PATH_MESSAGE = Object.freeze({
  [PATH.DISTANCE]: '최단 거리',
  [PATH.TIME]: '최소 시간',
  [PATH.BACK]: '돌아가기',
});

module.exports = {
  MAIN,
  MAIN_MESSAGE,
  PATH,
  PATH_MESSAGE,
};
