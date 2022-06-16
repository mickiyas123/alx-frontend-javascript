export default class Currency {
  constructor(code, name) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_code"] }] */
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
