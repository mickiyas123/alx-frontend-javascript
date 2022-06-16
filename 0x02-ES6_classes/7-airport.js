export default class Airport {
  constructor(name, code) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_code"] }] */
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
