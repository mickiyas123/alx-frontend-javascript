export default class HolbertonClass {
  constructor(size, location) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_size", "_location"] }] */
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
