const createServer = require("./createServer");
const MathBasic = require("./MathBasic");
const FigureCalculator = require('./FigureCalculator');

describe("A HTTP Server", () => {
  describe("when GET /add", () => {
    it("should respond with a status code of 200 and the payload value is addition result of a and b correctly", async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe("when GET /subtract", () => {
    it("should respond with a status code of 200 and the payload value is subtraction result of a and b correctly", async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, "subtract");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe("when GET /multiply", () => {
    it("should respond with a status code of 200 and the payload value is multiplied result of a and b correctly", async () => {
      // Arrange
    const a = 7;
    const b = 4;
    const spyMultiply = jest.spyOn(MathBasic, "multiply");
    const server = createServer({ mathBasic: MathBasic });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/multiply/${a}/${b}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(28);
    expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe("when GET /divide", () => {
    it("should respond with a status code of 200 and the payload value is divided result of a and b correctly", async () => {
      // Arrange
    const a = 24;
    const b = 3;
    const spyDivide = jest.spyOn(MathBasic, "divide");
    const server = createServer({ mathBasic: MathBasic });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/divide/${a}/${b}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(8);
    expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe("when GET /rectangle/perimeter", () => {
    it("should respond with a status code of 200 and the payload value is perimeter rectangle result of a and b correctly", async () => {
      // Arrange
    const length = 9;
    const width = 3;
    const figureCalculator = new FigureCalculator(MathBasic);
    const spyRectanglePerimeter = jest.spyOn(figureCalculator, "calculateRectanglePerimeter");
    const server = createServer({ figureCalculator });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/rectangle/perimeter/${length}/${width}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(24);
    expect(spyRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe("when GET /rectangle/area", () => {
    it("should respond with a status code of 200 and the payload value is perimeter rectangle result of length and width correctly", async () => {
      // Arrange
    const length = 9;
    const width = 3;
    const figureCalculator = new FigureCalculator(MathBasic);
    const spyRectangleArea = jest.spyOn(figureCalculator, "calculateRectangleArea");
    const server = createServer({ figureCalculator });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/rectangle/area/${length}/${width}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(27);
    expect(spyRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe("when GET /triangle/perimeter", () => {
    it("should respond with a status code of 200 and the payload value is perimeter triangle result of sideA, sideB, and base correctly", async () => {
      // Arrange
    const sideA = 4;
    const sideB = 4;
    const base = 3;
    const figureCalculator = new FigureCalculator(MathBasic);
    const spyTrianglePerimeter = jest.spyOn(figureCalculator, "calculateTrianglePerimeter");
    const server = createServer({ figureCalculator });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(11);
    expect(spyTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    }); 
  });

  describe("when GET /triangle/area", () => {
    it("should respond with a status code of 200 and the payload value is area triangle result of height and base correctly", async () => {
      // Arrange
    const height = 6;
    const base = 3;
    const figureCalculator = new FigureCalculator(MathBasic);
    const spyTriangleArea = jest.spyOn(figureCalculator, "calculateTriangleArea");
    const server = createServer({ figureCalculator });

    // Action
    const response = await server.inject({
      method: 'GET',
      url: `/triangle/area/${height}/${base}`,
    });

    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.value).toEqual(9);
    expect(spyTriangleArea).toBeCalledWith(height, base);
    }); 
  });
});
