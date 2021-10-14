/* eslint-disable no-new */
import Componente from "./Componente.js";
import Form from "./Form.js";
import Series from "./Series.js";

class Page extends Componente {
  series;

  constructor(parentElement, series) {
    super(parentElement, "container");
    this.series = series;
    console.log(series);
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `    <div class="container">
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
      </main>
    </div>`;

    const container = document.querySelector(".main");
    new Form(container);
    new Series(container, this.series);
  }
}

export default Page;
