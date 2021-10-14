import Componente from "./Componente.js";

class Serie extends Componente {
  series;
  constructor(parentElement, serie) {
    super(parentElement, "serie", "li");
    this.series = serie;
    this.generateHtml(serie);
  }

  generateHtml(serie) {
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src=${serie.poster}
                  alt=${serie.name}
                />
                <h4 class="serie__title">${serie.name}</h4>
                <p class="serie__info">${serie.creator} (${serie.year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
  }
}

export default Serie;
