const StationNames = Object.freeze({
  LINE2: ['교대역', '강남역', '역삼역'],
  LINE3: ['교대역', '남부터미널역', '양재역', '매봉역'],
  SINBUNDANG: ['강남역', '양재역', '양재시민의숲역'],
});

const SectionInfo = new Map([
  [['교대역', '강남역'], { distance: 2, time: 3 }],
  [['강남역', '역심역'], { distance: 2, time: 3 }],
  [['교대역', '남부터미널역'], { distance: 3, time: 2 }],
  [['남부터미널역', '양재역'], { distance: 6, time: 5 }],
  [['양재역', '매봉역'], { distance: 1, time: 1 }],
  [['강남역', '양재역'], { distance: 2, time: 8 }],
  [['양재역', '양재시민의숲역'], { distance: 10, time: 3 }],
]);

module.exports = { StationNames, SectionInfo };
