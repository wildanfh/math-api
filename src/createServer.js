const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalculator }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(parseInt(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.subtract(Number(a), parseInt(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.multiply(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/divide/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.divide(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{length}/{width}',
      handler: (request) => {
        const { length, width } = request.params;
        const value = figureCalculator.calculateRectanglePerimeter(Number(length), Number(width));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/area/{length}/{width}',
      handler: (request) => {
        const { length, width } = request.params;
        const value = figureCalculator.calculateRectangleArea(Number(length), Number(width));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/perimeter/{sideA}/{sideB}/{base}',
      handler: (request) => {
        const { sideA, sideB, base } = request.params;
        const value = figureCalculator.calculateTrianglePerimeter(Number(sideA), Number(sideB), Number(base));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/area/{height}/{base}',
      handler: (request) => {
        const { height, base } = request.params;
        const value = figureCalculator.calculateTriangleArea(Number(height), Number(base));
        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;