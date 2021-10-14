class SeriesServices {
  url = "http://localhost:3001/series";

  async getSeries() {
    const response = await fetch(this.url);
    const series = await response.json();
    return series;
  }
}

export default SeriesServices;
