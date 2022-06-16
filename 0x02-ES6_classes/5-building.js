export default class Building {
  constructor(sqft) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_sqft"] }] */
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
