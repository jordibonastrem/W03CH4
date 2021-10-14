/* eslint-disable no-new */
import Componente from "./Componente.js";
import Serie from "./Serie.js";

class Series extends Componente {
  series;
  constructor(parentElement, series) {
    super(parentElement, "series", "section");
    this.series = series;
    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <i class="icon--add fas fa-plus-circle"></i>

          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            
            </ul>
          </section>

          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            
            </ul>
          </section>
        </section>
    `;

    const seriesList = document.querySelector(".series-list");
    this.series.map((serie) => {
      new Serie(seriesList, serie);
    });
  }
}

export default Series;
