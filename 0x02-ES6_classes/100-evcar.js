import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_brand", "_motor",
    "_color", "_range"] }] */
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
