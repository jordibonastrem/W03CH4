/* eslint-disable no-new */
import Series from "../Series";

describe("Given a series class", () => {
  describe("When it receives parentElement section container", () => {
    test("Then it should render a section element with a 'series' class inside the section", () => {
      // Arrange
      const container = document.createElement("section");

      // Act

      new Series(container);
      const seriesFound = container.querySelector("section.series");

      // Assert
      expect(seriesFound).not.toBeNull();
    });
  });
});
