class SectionRepository {
  #sections = [];

  getSections() {
    return this.#sections;
  }

  addSection(section) {
    this.#sections.push(section);
  }

  deleteSection(stations) {
    this.#sections = this.#sections.filter(
      (section) => section.getStations().toString() !== stations.toSting(),
    );

    return this.#sections;
  }

  deleteAll() {
    this.#sections = [];
  }
}

module.exports = SectionRepository;
