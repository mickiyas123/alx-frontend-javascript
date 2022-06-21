export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const idView = new Int8Array(buffer);
  if (position > length) {
    throw Error('Position outside range');
  }
  idView[position] = value;
  console.log(idView);

  return new DataView(buffer);
}
