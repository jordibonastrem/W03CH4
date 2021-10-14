class SeriesServices {
  url = "http://localhost:3001/series";
  object;

  async getSeries() {
    const response = await fetch(this.url);
    const series = await response.json();
    return series;
  }
}

// const response = await fetch("http://localhost:3001/series");
// const series = await response.json();
// console.log(series);

export default SeriesServices;
