import Componente from "./Componente";

class Series extends Componente {
  constructor(parentElement) {
    super(parentElement, "series", "section");
    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <i class="icon--add fas fa-plus-circle"></i>
          <section class="series-pending">
          </section>
          <section class="series-watched">
          </section>
        </section
    `;
  }
}
