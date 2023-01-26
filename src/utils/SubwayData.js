const STATIONS = Object.freeze([
  '교대역',
  '강남역',
  '역삼역',
  '남부터미널역',
  '양재역',
  '양재시민의숲역',
  '매봉역',
]);

const LINES = Object.freeze([
  { NAME: '2호선', STATIONS: ['교대역', '강남역', '역삼역'] },
  { NAME: '3호선', STATIONS: ['교대역', '남부터미널역', '양재역', '매봉역'] },
  { NAME: '신분당선', STATIONS: ['강남역', '양재역', '양재시민의숲역'] },
]);

const SECTIONS = Object.freeze([
  { STATIONS: ['교대역', '강남역'], DISTANCE: 2, TIME: 3 },
  { STATIONS: ['강남역', '역삼역'], DISTANCE: 2, TIME: 3 },
  { STATIONS: ['교대역', '남부터미널역'], DISTANCE: 3, TIME: 2 },
  { STATIONS: ['남부터미널역', '양재역'], DISTANCE: 6, TIME: 5 },
  { STATIONS: ['양재역', '매봉역'], DISTANCE: 1, TIME: 1 },
  { STATIONS: ['강남역', '양재역'], DISTANCE: 2, TIME: 8 },
  { STATIONS: ['양재역', '양재시민의숲역'], DISTANCE: 10, TIME: 3 },
]);

module.exports = {
  STATIONS,
  LINES,
  SECTIONS,
};
