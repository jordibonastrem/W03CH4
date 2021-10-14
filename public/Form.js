import Component from "./Componente.js";

class Form extends Component {
  constructor(parentElement) {
    super(parentElement, "form", "section");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<section class="form">
          <form>
            <div class="form-block">
              <label for="title">Title:</label>
              <input type="text" id="title" />
            </div>
            <div class="form-block">
              <label for="creator">Creator:</label>
              <input type="text" id="creator" />
            </div>
            <div class="form-block">
              <label for="image">Image URL:</label>
              <input type="url" id="image" />
            </div>
            <div class="form-block">
              <label for="emmies">Emmies:</label>
              <input type="number" id="emmies" />
            </div>
            <div class="form-block">
              <button type="submit">Create</button>
            </div>
          </form>
        </section>`;
  }
}

export default Form;
