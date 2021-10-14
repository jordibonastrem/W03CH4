import Componente from "./Componente.js";
import Form from "./Form.js";
import Series from "./Series.js";
import Page from "./Page.js";
import SeriesServices from "./Services.js";

const body = document.querySelector("body");

const getSeriesArray = async () => {
  const seriesArray = await new SeriesServices();
  const result = await seriesArray.getSeries();
  return result;
};

console.log(getSeriesArray());

new Page(body);
