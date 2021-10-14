import Componente from "../Componente";

describe("Given a Component class constructor", () => {
  describe("When it recieves a parentElement '.container', a className of 'patata'", () => {
    test("Then it should return that there is a div element with the class of 'patata' inside an element with the class '.container'", () => {
      const parentElement = document.querySelector(".container");
      const className = "patata";

      const result = new Componente(parentElement, className);

      expect(result);
    });
  });
});
