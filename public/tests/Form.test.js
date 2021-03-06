import Form from "../Form.js";

describe("Given a form class", () => {
  describe("When it receives a section container", () => {
    test("Then it should render a section element with a 'form' class inside the section container", () => {
      // Arrange
      const container = document.createElement("section");

      // Act
      // eslint-disable-next-line no-new
      new Form(container);
      const sFound = container.querySelector("section.form");

      // Assert
      expect(sFound).not.toBeNull();
    });
  });
});
