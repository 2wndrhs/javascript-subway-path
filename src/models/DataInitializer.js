/* eslint-disable max-lines-per-function */
const Station = require('./Station');
const Line = require('./Line');
const Section = require('./Section');

const DataInitializer = Object.freeze({
  init({ stationRepository, lineRepository, sectionRepository }) {
    this.initStations(stationRepository);
    this.initLines(stationRepository, lineRepository);
    this.initSections(stationRepository, sectionRepository);
  },

  initStations(stationRepository) {
    stationRepository.addStation(new Station('교대역'));
    stationRepository.addStation(new Station('강남역'));
    stationRepository.addStation(new Station('역삼역'));
    stationRepository.addStation(new Station('남부터미널역'));
    stationRepository.addStation(new Station('양재역'));
    stationRepository.addStation(new Station('매봉역'));
    stationRepository.addStation(new Station('양재시민의숲역'));
  },

  initLines(stationRepository, lineRepository) {
    lineRepository.addLine(
      new Line('2호선', [
        stationRepository.findStationByName('교대역'),
        stationRepository.findStationByName('강남역'),
        stationRepository.findStationByName('역심역'),
      ]),
    );

    lineRepository.addLine(
      new Line('3호선', [
        stationRepository.findStationByName('교대역'),
        stationRepository.findStationByName('남부터미널역'),
        stationRepository.findStationByName('양재역'),
        stationRepository.findStationByName('매봉역'),
      ]),
    );

    lineRepository.addLine(
      new Line('신분당선', [
        stationRepository.findStationByName('강남역'),
        stationRepository.findStationByName('양재역'),
        stationRepository.findStationByName('양재시민의숲역'),
      ]),
    );
  },

  initSections(stationRepository, sectionRepository) {
    this.initLine2Sections(stationRepository, sectionRepository);
    this.initLine3Sections(stationRepository, sectionRepository);
    this.initShinbundangSections(stationRepository, sectionRepository);
  },

  initLine2Sections(stationRepository, sectionRepository) {
    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('교대역'),
          stationRepository.findStationByName('강남역'),
        ],
        2,
        3,
      ),
    );

    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('강남역'),
          stationRepository.findStationByName('역삼역'),
        ],
        2,
        3,
      ),
    );
  },

  initLine3Sections(stationRepository, sectionRepository) {
    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('교대역'),
          stationRepository.findStationByName('남부터미널역'),
        ],
        3,
        2,
      ),
    );

    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('남부터미널역'),
          stationRepository.findStationByName('양재역'),
        ],
        6,
        5,
      ),
    );

    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('양재역'),
          stationRepository.findStationByName('매봉역'),
        ],
        1,
        1,
      ),
    );
  },

  initShinbundangSections(stationRepository, sectionRepository) {
    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('강남역'),
          stationRepository.findStationByName('양재역'),
        ],
        2,
        8,
      ),
    );

    sectionRepository.addSection(
      new Section(
        [
          stationRepository.findStationByName('양재역'),
          stationRepository.findStationByName('양재시민의숲역'),
        ],
        10,
        3,
      ),
    );
  },
});

module.exports = DataInitializer;
