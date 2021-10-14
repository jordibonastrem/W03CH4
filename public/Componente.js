class Componente {
  element;

  parentElement;

  className;

  htmlTag;

  constructor(parentElement, htmlTag = "div", className) {
    this.parentElement = parentElement;
    this.htmlTag = htmlTag;
    this.className = className;

    this.element = document.createElement(htmlTag);
    this.parentElement.appendChild(this.element);
  }
}

export default Componente;
