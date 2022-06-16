export default class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_length", "_students"] }] */
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an object');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Name must be a number');
    }
  }

  set students(value) {
    if (typeof value === 'object') {
      this._students = value;
    } else {
      throw new TypeError('Name must be an object');
    }
  }
}
